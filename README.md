# Learning Java - Interactive Documentation

A modern, interactive Java learning platform with a plugin-based architecture for extensible content.

## Features

- 🎨 Beautiful, responsive design with Tailwind CSS
- 📚 Modular plugin system for easy content expansion
- 🔍 Syntax-highlighted code snippets with copy functionality
- 📖 Beginner-friendly explanations with real-world analogies
- 📱 Mobile-responsive layout
- ⚡ Fast loading with dynamic content
- 🎯 Section-based navigation with subsections

## Plugin System Architecture

The Learning Java platform uses a sophisticated plugin system that allows developers to easily add new sections and content without modifying the core application.

### How It Works

1. **Section Structure**: Each learning section is contained in its own folder under `/sections/`
2. **Plugin Files**: Each section has a `section.js` file that exports the section configuration
3. **Dynamic Loading**: The main application dynamically imports and loads section plugins
4. **Navigation**: Sidebar navigation is automatically generated from section metadata

### Creating a New Section Plugin

1. **Create Section Folder**: Create a new folder under `/sections/` (e.g., `/sections/methods/`)

2. **Create section.js**: In your section folder, create a `section.js` file with this structure:

```javascript
// sections/your-section/section.js
const yourSection = {
    id: 'your-section',           // Unique identifier
    title: 'Your Section Title',  // Display title
    icon: 'fas fa-icon-name',     // Font Awesome icon class
    color: 'color-name',          // Tailwind color (blue, green, purple, etc.)
    subsections: [                // Array of subsections for navigation
        { id: 'subsection-1', title: 'Subsection 1', anchor: 'anchor-1' },
        { id: 'subsection-2', title: 'Subsection 2', anchor: 'anchor-2' }
    ],
    content: `
        <!-- Your HTML content here -->
        <p>Your section content...</p>

        <!-- Code blocks with copy functionality -->
        <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
            <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="your code here"><i class="fas fa-copy"></i> Copy</button>
            <pre class="language-java"><code>your code here</code></pre>
        </div>

        <!-- Explanation toggles -->
        <div class="flex space-x-4 mb-4">
            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center" onclick="toggleExplanation('detailed-explanation')">
                <i class="fas fa-info-circle mr-2"></i>Detailed Explanation
            </button>
            <button class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 flex items-center" onclick="toggleExplanation('beginner-explanation')">
                <i class="fas fa-child mr-2"></i>Beginner Friendly
            </button>
        </div>

        <!-- Hidden explanation sections -->
        <div id="detailed-explanation" class="hidden mt-4 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <h3 class="text-xl font-semibold mb-3 text-blue-800">Technical Details</h3>
            <p>Your detailed technical explanation...</p>
        </div>
        <div id="beginner-explanation" class="hidden mt-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
            <h3 class="text-xl font-semibold mb-3 text-green-800">Think of it like this...</h3>
            <p>Your beginner-friendly analogy...</p>
        </div>
    `
};

export { yourSection };
```

3. **Update Plugin Loader**: Add your new section folder name to the `sectionFolders` array in `sections.js`:

```javascript
// In sections.js
async loadAllSections() {
    const sectionFolders = ['introduction', 'variables', 'data-types', 'your-section'];
    // ... rest of the code
}
```

### Section Configuration Properties

- **id**: Unique identifier for the section (used for navigation and DOM elements)
- **title**: Human-readable title displayed in the UI
- **icon**: Font Awesome icon class for visual representation
- **color**: Tailwind CSS color name for theming (affects icons and accents)
- **subsections**: Array of navigation subsections with id, title, and anchor properties
- **content**: HTML string containing the section's content

### Content Guidelines

- Use semantic HTML with proper heading hierarchy
- Include code examples with syntax highlighting
- Add copy buttons to code blocks using the provided CSS classes
- Use explanation toggles for detailed vs. beginner-friendly content
- Follow the established color scheme and styling patterns
- Ensure content is mobile-responsive

### Best Practices

1. **Modular Content**: Keep sections focused on single concepts
2. **Progressive Disclosure**: Use toggles to hide/show detailed information
3. **Analogies**: Include real-world analogies for complex concepts
4. **Code Examples**: Always include practical code examples
5. **Accessibility**: Use proper ARIA labels and semantic HTML
6. **Performance**: Keep individual section files reasonably sized

## Development

### Prerequisites

- Modern web browser with ES6 module support
- Local web server (for proper module loading)

### Running Locally

1. Clone the repository
2. Serve the files using a local web server (e.g., `python -m http.server` or VS Code Live Server)
3. Open `index.html` in your browser

### Adding New Sections

1. Create a new section plugin following the structure above
2. Add the section folder name to the loader
3. Test the section loads correctly
4. Update navigation and content as needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your section plugin
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.