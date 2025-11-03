// Plugin System for Learning Java
class LearningJavaPluginSystem {
    constructor() {
        this.sections = [];
        this.sidebarNav = null;
    }

    // Load a section plugin dynamically
    async loadSectionPlugin(sectionPath) {
        try {
            // Dynamically import the section module
            const module = await import(`./sections/${sectionPath}/section.js`);
            const sectionData = Object.values(module)[0]; // Get the exported section object
            this.sections.push(sectionData);
            return sectionData;
        } catch (error) {
            console.error(`Failed to load section plugin: ${sectionPath}`, error);
            return null;
        }
    }

    // Load all section plugins
    async loadAllSections() {
        const sectionFolders = ['introduction', 'variables', 'data-types'];
        for (const folder of sectionFolders) {
            await this.loadSectionPlugin(folder);
        }
    }

    // Render sidebar navigation
    renderSidebar() {
        if (!this.sidebarNav) return;

        const navHtml = this.sections.map(section => {
            if (!section || !section.id) return ''; // Skip invalid sections

            return `
            <li class="mb-3">
                <div class="flex items-center py-3 px-4 rounded-xl hover:bg-white hover:bg-opacity-20 transition-all duration-200 cursor-pointer section-toggle nav-item" data-section="${section.id}">
                    <i class="fas ${section.icon} mr-3 text-lg"></i>
                    <span class="flex-1 font-medium">${section.title}</span>
                    <i class="fas fa-chevron-down transition-transform duration-200 text-sm"></i>
                </div>
                <ul class="ml-8 mt-2 space-y-1 hidden subsection-list" id="subsections-${section.id}">
                    ${section.subsections ? section.subsections.map(sub => `
                        <li>
                            <a href="#${sub.anchor}" class="block py-2 px-3 rounded-lg text-sm text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white transition-all duration-200 ml-4 border-l border-blue-300 border-opacity-30">
                                ${sub.title}
                            </a>
                        </li>
                    `).join('') : ''}
                </ul>
            </li>
        `}).join('');

        this.sidebarNav.innerHTML = navHtml;

        // Add toggle functionality
        document.querySelectorAll('.section-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const sectionId = e.currentTarget.dataset.section;
                const subsectionList = document.getElementById(`subsections-${sectionId}`);
                const chevron = e.currentTarget.querySelector('.fa-chevron-down');

                if (subsectionList) {
                    subsectionList.classList.toggle('hidden');
                    chevron.classList.toggle('rotate-180');
                }
            });
        });
    }

    // Render all sections
    renderSections(container) {
        this.sections.forEach(section => {
            if (!section || !section.id) return; // Skip invalid sections

            const sectionElement = document.createElement('section');
            sectionElement.id = section.id;
            sectionElement.className = `bg-white shadow-xl p-8 mb-8 rounded-2xl card-hover animate-fade-in`;
            sectionElement.innerHTML = `
                <h2 class="text-3xl font-bold mb-6 text-gray-800"><i class="fas ${section.icon} text-${section.color}-600 mr-3"></i> ${section.title}</h2>
                ${section.content}
            `;
            container.appendChild(sectionElement);
        });

        // Re-initialize Prism for dynamically loaded content
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }

        // Add copy functionality
        this.addCopyFunctionality();
    }

    // Add copy functionality to code blocks
    addCopyFunctionality() {
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const code = e.target.dataset.code || e.target.closest('.copy-btn').dataset.code;
                try {
                    await navigator.clipboard.writeText(code);
                    // Visual feedback
                    const originalText = e.target.innerHTML;
                    e.target.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => {
                        e.target.innerHTML = originalText;
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy: ', err);
                }
            });
        });
    }

    // Initialize the plugin system
    async init() {
        await this.loadAllSections();
        this.sidebarNav = document.getElementById('sidebar-nav');

        // Render sidebar and sections
        this.renderSidebar();

        // Load sections into container
        const container = document.getElementById('sections-container');
        if (container) {
            this.renderSections(container);
        }

        // Setup observers and other functionality
        this.setupObservers();
    }

    // Setup intersection observers for animations
    setupObservers() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe all sections after they're loaded
        setTimeout(() => {
            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
        }, 100);
    }
}

// Global instance
const pluginSystem = new LearningJavaPluginSystem();