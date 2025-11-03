// Control Structures Section Plugin
const controlStructuresSection = {
    id: 'control-structures',
    title: 'Control Structures',
    icon: 'fas fa-code-branch',
    color: 'orange',
    subsections: [
        { id: 'if-else', title: 'If-Else Statements', anchor: 'control-structures' },
        { id: 'switch', title: 'Switch Statements', anchor: 'switch-section' },
        { id: 'loops', title: 'Loops (For, While, Do-While)', anchor: 'loops-section' },
        { id: 'break-continue', title: 'Break and Continue', anchor: 'break-continue-section' },
        { id: 'detailed-explanation', title: 'Detailed Explanation', anchor: 'detailed-control' },
        { id: 'beginner-explanation', title: 'Beginner Friendly', anchor: 'beginner-control' }
    ],
    content: `
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">Control structures are like traffic signals for your code. They decide which path your program takes based on conditions, and they can repeat actions until certain conditions are met.</p>

        <div class="mb-8 p-6 bg-orange-50 rounded-xl" id="if-else-section">
            <h3 class="text-2xl font-semibold mb-4 text-orange-800"><i class="fas fa-question mr-2"></i>If-Else Statements</h3>
            <p class="mb-4 text-gray-700">Make decisions in your code - like choosing what to wear based on the weather:</p>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="int temperature = 25;

if (temperature > 30) {
    System.out.println("It&#39;s hot! Wear light clothes.");
} else if (temperature > 20) {
    System.out.println("It&#39;s warm. T-shirt and jeans.");
} else {
    System.out.println("It&#39;s cold. Wear a jacket.");
}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>int temperature = 25;

if (temperature > 30) {
    System.out.println("It's hot! Wear light clothes.");
} else if (temperature > 20) {
    System.out.println("It's warm. T-shirt and jeans.");
} else {
    System.out.println("It's cold. Wear a jacket.");
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-red-50 rounded-xl" id="switch-section">
            <h3 class="text-2xl font-semibold mb-4 text-red-800"><i class="fas fa-exchange-alt mr-2"></i>Switch Statements</h3>
            <p class="mb-4 text-gray-700">Choose from multiple options - like selecting a menu item:</p>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="int day = 3;\\nString dayName;\\n\\nswitch (day) {\\n    case 1:\\n        dayName = \\"Monday\\";\\n        break;\\n    case 2:\\n        dayName = \\"Tuesday\\";\\n        break;\\n    case 3:\\n        dayName = \\"Wednesday\\";\\n        break;\\n    default:\\n        dayName = \\"Invalid day\\";\\n}\\n\\nSystem.out.println(dayName);"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>int day = 3;
String dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Invalid day";
}

System.out.println(dayName);</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-blue-50 rounded-xl" id="loops-section">
            <h3 class="text-2xl font-semibold mb-4 text-blue-800"><i class="fas fa-sync mr-2"></i>Loops</h3>
            <p class="mb-4 text-gray-700">Repeat actions - like counting sheep or processing a list:</p>

            <h4 class="text-lg font-semibold mb-2">For Loop (when you know how many times):</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="for (int i = 1; i <= 5; i++) {\\n    System.out.println(\\"Count: \\" + i);\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}</code></pre>
            </div>

            <h4 class="text-lg font-semibold mb-2">While Loop (when you don't know how many times):</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="int count = 1;\\nwhile (count <= 5) {\\n    System.out.println(\\"Count: \\" + count);\\n    count++;\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>int count = 1;
while (count <= 5) {
    System.out.println("Count: " + count);
    count++;
}</code></pre>
            </div>

            <h4 class="text-lg font-semibold mb-2">Do-While Loop (runs at least once):</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="int number;\\ndo {\\n    System.out.println(\\"Enter a number greater than 10:\\");\\n    // In real code, you'd get input here\\n    number = 5; // Example\\n} while (number <= 10);"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>int number;
do {
    System.out.println("Enter a number greater than 10:");
    // In real code, you'd get input here
    number = 5; // Example
} while (number <= 10);</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-purple-50 rounded-xl" id="break-continue-section">
            <h3 class="text-2xl font-semibold mb-4 text-purple-800"><i class="fas fa-stop mr-2"></i>Break and Continue</h3>
            <p class="mb-4 text-gray-700">Control loop execution - break exits the loop, continue skips to the next iteration:</p>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="for (int i = 1; i <= 10; i++) {\\n    if (i == 5) {\\n        continue; // Skip number 5\\n    }\\n    if (i == 8) {\\n        break; // Stop at 8\\n    }\\n    System.out.println(i);\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        continue; // Skip number 5
    }
    if (i == 8) {
        break; // Stop at 8
    }
    System.out.println(i);
}</code></pre>
            </div>
        </div>

        <div class="flex space-x-4 mb-4">
            <button class="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-200 flex items-center" onclick="toggleExplanation('detailed-control')">
                <i class="fas fa-info-circle mr-2"></i>Detailed Explanation
            </button>
            <button class="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition duration-200 flex items-center" onclick="toggleExplanation('beginner-control')">
                <i class="fas fa-child mr-2"></i>Beginner Friendly
            </button>
        </div>
        <div id="detailed-control" class="hidden mt-4 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
            <h3 class="text-xl font-semibold mb-3 text-orange-800">Technical Details</h3>
            <p class="mb-2"><strong>If-else:</strong> Conditional execution based on boolean expressions. Multiple else-if chains are evaluated in order.</p>
            <p class="mb-2"><strong>Switch:</strong> Efficient for multiple discrete values. Uses break to prevent fall-through. Default case handles unexpected values.</p>
            <p class="mb-2"><strong>For loops:</strong> Best when iteration count is known. Consists of initialization, condition, and increment.</p>
            <p class="mb-2"><strong>While loops:</strong> Condition checked before execution. May never execute if condition is false initially.</p>
            <p class="mb-2"><strong>Do-while:</strong> Condition checked after execution. Always executes at least once.</p>
            <p><strong>Break/Continue:</strong> Break exits the loop entirely. Continue skips current iteration and continues with next.</p>
        </div>
        <div id="beginner-control" class="hidden mt-4 p-6 bg-teal-50 rounded-xl border-l-4 border-teal-500">
            <h3 class="text-xl font-semibold mb-3 text-teal-800">Think of it like this...</h3>
            <p class="mb-3"><strong>If-else</strong> is like deciding what to eat: "If I have pizza, eat pizza. Else if I have burgers, eat burgers. Otherwise, eat cereal."</p>
            <p class="mb-3"><strong>Switch</strong> is like choosing elevator floors - you pick a number and go directly to that floor.</p>
            <p class="mb-3"><strong>For loops</strong> are like counting to 10: "1, 2, 3... up to 10" - you know exactly how many times.</p>
            <p class="mb-3"><strong>While loops</strong> are like eating cookies: "Keep eating while there are cookies left" - you don't know how many you'll eat.</p>
            <p class="mb-3"><strong>Do-while</strong> is like trying food: "Take a bite, then decide if you want more" - you always try at least once.</p>
            <p><strong>Break</strong> is like saying "I'm full, stop eating." <strong>Continue</strong> is like saying "I don't like this cookie, skip it and try the next one."</p>
        </div>
    `
};

export { controlStructuresSection };