// Variables Section Plugin
const variablesSection = {
    id: 'variables',
    title: 'Variables',
    icon: 'fas fa-variable',
    color: 'green',
    subsections: [
        { id: 'variable-types', title: 'Variable Types', anchor: 'variables' },
        { id: 'detailed-explanation', title: 'Detailed Explanation', anchor: 'detailed-variables' },
        { id: 'beginner-explanation', title: 'Beginner Friendly', anchor: 'beginner-variables' }
    ],
    content: `
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">Variables are like containers that hold data. Think of them as labeled boxes where you store different types of information. Java has different kinds of variables depending on where they're used.</p>
        <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
            <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="// Local variable - only exists inside this method\\nint age = 25;\\n\\n// Static variable - belongs to the entire class\\nstatic int globalAge;"><i class="fas fa-copy"></i> Copy</button>
            <pre class="language-java"><code>// Local variable - only exists inside this method
int age = 25;

// Static variable - belongs to the entire class
static int globalAge;</code></pre>
        </div>
        <div class="flex space-x-4 mb-4">
            <button class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 flex items-center" onclick="toggleExplanation('detailed-variables')">
                <i class="fas fa-info-circle mr-2"></i>Detailed Explanation
            </button>
            <button class="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-200 flex items-center" onclick="toggleExplanation('beginner-variables')">
                <i class="fas fa-child mr-2"></i>Beginner Friendly
            </button>
        </div>
        <div id="detailed-variables" class="hidden mt-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
            <h3 class="text-xl font-semibold mb-3 text-green-800">Technical Details</h3>
            <p class="mb-2"><strong>Local variables:</strong> Declared inside methods. They exist only within that method's scope and are destroyed when the method ends.</p>
            <p class="mb-2"><strong>Static variables:</strong> Declared at the class level with the 'static' keyword. They belong to the class, not instances. If not initialized, they default to 0 for integers.</p>
            <p>You can declare a static variable and then override it locally in a method, creating a local copy with the same name.</p>
        </div>
        <div id="beginner-variables" class="hidden mt-4 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
            <h3 class="text-xl font-semibold mb-3 text-yellow-800">Think of it like this...</h3>
            <p class="mb-3">Imagine you're organizing a party. A <strong>local variable</strong> is like a plate of cookies you put on the table just for the party - it's only there for that event and gets cleaned up afterward.</p>
            <p class="mb-3">A <strong>static variable</strong> is like your house's electricity - it's always available for the whole house (class), no matter which room (method) you're in.</p>
            <p>If you have house electricity but bring a battery-powered lamp to the party, the lamp (local variable) takes priority in that room, but the house electricity is still there for everything else!</p>
        </div>
    `
};

export { variablesSection };