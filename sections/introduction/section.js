// Introduction Section Plugin
const introductionSection = {
    id: 'introduction',
    title: 'Introduction',
    icon: 'fas fa-play',
    color: 'blue',
    subsections: [
        { id: 'hello-world', title: 'Hello World Program', anchor: 'introduction' },
        { id: 'detailed-explanation', title: 'Detailed Explanation', anchor: 'detailed-intro' },
        { id: 'beginner-explanation', title: 'Beginner Friendly', anchor: 'beginner-intro' }
    ],
    content: `
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">Java is a powerful, high-level, object-oriented programming language used to build everything from mobile apps to enterprise systems. Let's start with the classic "Hello World" program - your first step into Java!</p>
        <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
            <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="class Main {\\n    public static void main(String[] args) {\\n        System.out.println(\\"Hello World\\");\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
            <pre class="language-java"><code>class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}</code></pre>
        </div>
        <div class="flex space-x-4 mb-4">
            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center" onclick="toggleExplanation('detailed-intro')">
                <i class="fas fa-info-circle mr-2"></i>Detailed Explanation
            </button>
            <button class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 flex items-center" onclick="toggleExplanation('beginner-intro')">
                <i class="fas fa-child mr-2"></i>Beginner Friendly
            </button>
        </div>
        <div id="detailed-intro" class="hidden mt-4 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <h3 class="text-xl font-semibold mb-3 text-blue-800">Technical Breakdown</h3>
            <p class="mb-2"><strong>class Main:</strong> Defines the class name. In Java, every program starts with a class.</p>
            <p class="mb-2"><strong>public:</strong> The method can be accessed from anywhere.</p>
            <p class="mb-2"><strong>static:</strong> The method can be executed without creating an instance of the class.</p>
            <p class="mb-2"><strong>void:</strong> The method returns no value.</p>
            <p class="mb-2"><strong>main:</strong> The entry point of the program.</p>
            <p class="mb-2"><strong>String[] args:</strong> Arguments passed from the command line.</p>
            <p><strong>System.out.println:</strong> Prints to the console. System.out is the predefined output stream, and println is the method to print with a newline.</p>
        </div>
        <div id="beginner-intro" class="hidden mt-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
            <h3 class="text-xl font-semibold mb-3 text-green-800">Think of it like this...</h3>
            <p class="mb-3">Imagine Java is like a recipe book. The <strong>class Main</strong> is like the title of your recipe book - it tells you what this collection of instructions is called.</p>
            <p class="mb-3">The <strong>main method</strong> is like the "Getting Started" page in your recipe book. It's where you begin reading.</p>
            <p class="mb-3"><strong>System.out.println("Hello World");</strong> is like writing a note to yourself saying "Hello World" - it's your way of communicating with the world!</p>
            <p>Just like how you need a recipe book to cook, you need this Java program to tell the computer what to do. Simple, right?</p>
        </div>
    `
};

export { introductionSection };