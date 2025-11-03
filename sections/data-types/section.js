// Data Types Section Plugin
const dataTypesSection = {
    id: 'data-types',
    title: 'Data Types',
    icon: 'fas fa-database',
    color: 'purple',
    subsections: [
        { id: 'integers', title: 'Integers', anchor: 'data-types' },
        { id: 'boolean', title: 'Boolean', anchor: 'boolean-section' },
        { id: 'decimals', title: 'Decimals', anchor: 'decimals-section' },
        { id: 'characters', title: 'Characters', anchor: 'characters-section' },
        { id: 'detailed-explanation', title: 'Detailed Explanation', anchor: 'detailed-data-types' },
        { id: 'beginner-explanation', title: 'Beginner Friendly', anchor: 'beginner-data-types' }
    ],
    content: `
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">Data types are like different sized containers for different kinds of information. Just like you wouldn't store soup in a thimble or water in a bathtub, Java uses specific types to efficiently store different kinds of data.</p>

        <div class="mb-8 p-6 bg-blue-50 rounded-xl" id="boolean-section">
            <h3 class="text-2xl font-semibold mb-4 text-blue-800"><i class="fas fa-hashtag mr-2"></i>Integers</h3>
            <p class="mb-4 text-gray-700">Whole numbers come in different sizes, like different sized jars for different amounts of cookies:</p>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <li class="bg-white p-3 rounded-lg"><strong>byte:</strong> Tiny jar (-128 to 127)</li>
                <li class="bg-white p-3 rounded-lg"><strong>short:</strong> Small jar (-32,768 to 32,767)</li>
                <li class="bg-white p-3 rounded-lg"><strong>int:</strong> Regular jar (-2.1B to 2.1B)</li>
                <li class="bg-white p-3 rounded-lg"><strong>long:</strong> Huge jar (massive numbers!)</li>
            </ul>
            <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="byte smallNumber = 100;\\nshort mediumNumber = 30000;\\nint regularNumber = 2000000000;\\nlong bigNumber = 9000000000000000000L;"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>byte smallNumber = 100;
short mediumNumber = 30000;
int regularNumber = 2000000000;
long bigNumber = 9000000000000000000L;</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-green-50 rounded-xl" id="boolean-section">
            <h3 class="text-2xl font-semibold mb-4 text-green-800"><i class="fas fa-toggle-on mr-2"></i>Boolean</h3>
            <p class="mb-4 text-gray-700">Simple yes/no, true/false values - like a light switch:</p>
            <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="boolean isJavaFun = true;\\nboolean isHard = false;"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>boolean isJavaFun = true;
boolean isHard = false;</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-yellow-50 rounded-xl" id="decimals-section">
            <h3 class="text-2xl font-semibold mb-4 text-yellow-800"><i class="fas fa-calculator mr-2"></i>Decimals</h3>
            <p class="mb-4 text-gray-700">Numbers with decimal points. Float is like a measuring cup, double is more precise:</p>
            <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="float piFloat = 3.14f;\\ndouble piDouble = 3.141592653589793;"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>float piFloat = 3.14f;
double piDouble = 3.141592653589793;</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-red-50 rounded-xl" id="characters-section">
            <h3 class="text-2xl font-semibold mb-4 text-red-800"><i class="fas fa-font mr-2"></i>Characters</h3>
            <p class="mb-4 text-gray-700">Single letters, symbols, or special characters:</p>
            <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="char letter = 'A';\\nchar symbol = '@';\\nchar copyright = '\\u00A9'; // ©\\nchar percent = '%';\\nchar euro = '\\u20AC'; // €"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>char letter = 'A';
char symbol = '@';
char copyright = '\u00A9'; // ©
char percent = '%';
char euro = '\u20AC'; // €</code></pre>
            </div>
        </div>

        <div class="flex space-x-4 mb-4">
            <button class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-200 flex items-center" onclick="toggleExplanation('detailed-data-types')">
                <i class="fas fa-info-circle mr-2"></i>Detailed Explanation
            </button>
            <button class="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-200 flex items-center" onclick="toggleExplanation('beginner-data-types')">
                <i class="fas fa-child mr-2"></i>Beginner Friendly
            </button>
        </div>
        <div id="detailed-data-types" class="hidden mt-4 p-6 bg-purple-50 rounded-xl border-l-4 border-purple-500">
            <h3 class="text-xl font-semibold mb-3 text-purple-800">Technical Details</h3>
            <p>Data types specify the size and type of values. Integers have different ranges based on bits. Booleans are simple true/false. Decimals use float for less precision and double for more. Characters can be letters, symbols, or Unicode characters like © or €.</p>
        </div>
        <div id="beginner-data-types" class="hidden mt-4 p-6 bg-pink-50 rounded-xl border-l-4 border-pink-500">
            <h3 class="text-xl font-semibold mb-3 text-pink-800">Think of it like this...</h3>
            <p class="mb-3"><strong>Integers</strong> are like whole cookies - you can't have half a cookie (unless it's broken!).</p>
            <p class="mb-3"><strong>Booleans</strong> are like yes/no questions - "Is the light on?" can only be true or false.</p>
            <p class="mb-3"><strong>Decimals</strong> are like cutting a pizza into slices - you can have 3.5 slices!</p>
            <p><strong>Characters</strong> are like individual letters in the alphabet - each one is a single symbol, whether it's 'A', '@', or even a copyright symbol ©.</p>
        </div>
    `
};

export { dataTypesSection };