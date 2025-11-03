// Methods Section Plugin
const methodsSection = {
    id: 'methods',
    title: 'Methods',
    icon: 'fas fa-cogs',
    color: 'indigo',
    subsections: [
        { id: 'method-basics', title: 'Method Basics', anchor: 'methods' },
        { id: 'parameters-return', title: 'Parameters and Return Values', anchor: 'parameters-section' },
        { id: 'method-overloading', title: 'Method Overloading', anchor: 'overloading-section' },
        { id: 'static-vs-instance', title: 'Static vs Instance Methods', anchor: 'static-instance-section' },
        { id: 'detailed-explanation', title: 'Detailed Explanation', anchor: 'detailed-methods' },
        { id: 'beginner-explanation', title: 'Beginner Friendly', anchor: 'beginner-methods' }
    ],
    content: `
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">Methods are like reusable recipes in your code. Instead of writing the same instructions over and over, you create a method once and call it whenever you need that functionality.</p>

        <div class="mb-8 p-6 bg-indigo-50 rounded-xl" id="method-basics-section">
            <h3 class="text-2xl font-semibold mb-4 text-indigo-800"><i class="fas fa-play-circle mr-2"></i>Method Basics</h3>
            <p class="mb-4 text-gray-700">A method is a block of code that performs a specific task. Here's a simple method that greets someone:</p>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="public class Greeter {\\n    // Method definition\\n    public static void greet() {\\n        System.out.println(\\"Hello, World!\\");\\n    }\\n    \\n    // Main method calls our greet method\\n    public static void main(String[] args) {\\n        greet(); // Method call\\n        greet(); // Call it again\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public class Greeter {
    // Method definition
    public static void greet() {
        System.out.println("Hello, World!");
    }

    // Main method calls our greet method
    public static void main(String[] args) {
        greet(); // Method call
        greet(); // Call it again
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-green-50 rounded-xl" id="parameters-section">
            <h3 class="text-2xl font-semibold mb-4 text-green-800"><i class="fas fa-arrow-right mr-2"></i>Parameters and Return Values</h3>
            <p class="mb-4 text-gray-700">Methods can take inputs (parameters) and give back results (return values):</p>

            <h4 class="text-lg font-semibold mb-2">Method with Parameters:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="public static void greetPerson(String name) {\\n    System.out.println(\\"Hello, \\" + name + \\"!\\");\\n}\\n\\n// Calling the method\\ngreetPerson(\\"Alice\\");\\ngreetPerson(\\"Bob\\");"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public static void greetPerson(String name) {
    System.out.println("Hello, " + name + "!");
}

// Calling the method
greetPerson("Alice");
greetPerson("Bob");</code></pre>
            </div>

            <h4 class="text-lg font-semibold mb-2">Method with Return Value:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="public static int add(int a, int b) {\\n    return a + b;\\n}\\n\\n// Using the return value\\nint result = add(5, 3);\\nSystem.out.println(\\"5 + 3 = \\" + result);"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public static int add(int a, int b) {
    return a + b;
}

// Using the return value
int result = add(5, 3);
System.out.println("5 + 3 = " + result);</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-yellow-50 rounded-xl" id="overloading-section">
            <h3 class="text-2xl font-semibold mb-4 text-yellow-800"><i class="fas fa-clone mr-2"></i>Method Overloading</h3>
            <p class="mb-4 text-gray-700">Multiple methods with the same name but different parameters:</p>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="public static int multiply(int a, int b) {\\n    return a * b;\\n}\\n\\npublic static double multiply(double a, double b) {\\n    return a * b;\\n}\\n\\npublic static int multiply(int a, int b, int c) {\\n    return a * b * c;\\n}\\n\\n// All these calls work:\\nSystem.out.println(multiply(2, 3));        // 6\\nSystem.out.println(multiply(2.5, 4.0));   // 10.0\\nSystem.out.println(multiply(2, 3, 4));     // 24"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public static int multiply(int a, int b) {
    return a * b;
}

public static double multiply(double a, double b) {
    return a * b;
}

public static int multiply(int a, int b, int c) {
    return a * b * c;
}

// All these calls work:
System.out.println(multiply(2, 3));        // 6
System.out.println(multiply(2.5, 4.0));   // 10.0
System.out.println(multiply(2, 3, 4));     // 24</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-purple-50 rounded-xl" id="static-instance-section">
            <h3 class="text-2xl font-semibold mb-4 text-purple-800"><i class="fas fa-share-alt mr-2"></i>Static vs Instance Methods</h3>
            <p class="mb-4 text-gray-700">Static methods belong to the class, instance methods belong to objects:</p>

            <h4 class="text-lg font-semibold mb-2">Static Method (belongs to class):</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="public class MathUtils {\\n    public static int square(int number) {\\n        return number * number;\\n    }\\n}\\n\\n// Call without creating an object\\nint result = MathUtils.square(5);"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public class MathUtils {
    public static int square(int number) {
        return number * number;
    }
}

// Call without creating an object
int result = MathUtils.square(5);</code></pre>
            </div>

            <h4 class="text-lg font-semibold mb-2">Instance Method (belongs to object):</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="public class Dog {\\n    private String name;\\n    \\n    public Dog(String name) {\\n        this.name = name;\\n    }\\n    \\n    public void bark() {\\n        System.out.println(name + \\" says woof!\\");\\n    }\\n}\\n\\n// Need to create an object first\\nDog myDog = new Dog(\\"Buddy\\");\\nmyDog.bark(); // Buddy says woof!"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public class Dog {
    private String name;

    public Dog(String name) {
        this.name = name;
    }

    public void bark() {
        System.out.println(name + " says woof!");
    }
}

// Need to create an object first
Dog myDog = new Dog("Buddy");
myDog.bark(); // Buddy says woof!</code></pre>
            </div>
        </div>

        <div class="flex space-x-4 mb-4">
            <button class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center" onclick="toggleExplanation('detailed-methods')">
                <i class="fas fa-info-circle mr-2"></i>Detailed Explanation
            </button>
            <button class="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-200 flex items-center" onclick="toggleExplanation('beginner-methods')">
                <i class="fas fa-child mr-2"></i>Beginner Friendly
            </button>
        </div>
        <div id="detailed-methods" class="hidden mt-4 p-6 bg-indigo-50 rounded-xl border-l-4 border-indigo-500">
            <h3 class="text-xl font-semibold mb-3 text-indigo-800">Technical Details</h3>
            <p class="mb-2"><strong>Method Signature:</strong> Method name + parameter types. Overloaded methods must have different signatures.</p>
            <p class="mb-2"><strong>Access Modifiers:</strong> public (accessible everywhere), private (only within class), protected (package + subclasses).</p>
            <p class="mb-2"><strong>Return Types:</strong> void for no return value, or any data type. Methods can return only one value.</p>
            <p class="mb-2"><strong>Parameters:</strong> Passed by value for primitives, by reference for objects. Changes to parameters don't affect originals.</p>
            <p class="mb-2"><strong>Static Methods:</strong> Can be called without object instantiation. Cannot access instance variables.</p>
            <p><strong>Instance Methods:</strong> Require object creation. Can access both static and instance members.</p>
        </div>
        <div id="beginner-methods" class="hidden mt-4 p-6 bg-pink-50 rounded-xl border-l-4 border-pink-500">
            <h3 class="text-xl font-semibold mb-3 text-pink-800">Think of it like this...</h3>
            <p class="mb-3"><strong>Methods</strong> are like kitchen appliances. You don't build a blender every time you want a smoothie - you build it once and use it whenever you need.</p>
            <p class="mb-3"><strong>Parameters</strong> are like ingredients you put into the appliance - different inputs give different results.</p>
            <p class="mb-3"><strong>Return values</strong> are like the finished product that comes out - the smoothie you can drink.</p>
            <p class="mb-3"><strong>Method overloading</strong> is like having different versions of the same appliance - a regular blender and a heavy-duty one, both called "blender" but for different purposes.</p>
            <p class="mb-3"><strong>Static methods</strong> are like public utilities - electricity is always available for the whole neighborhood without anyone having to "own" it.</p>
            <p><strong>Instance methods</strong> are like personal belongings - your phone's ringtone is specific to your phone object.</p>
        </div>
    `
};

export { methodsSection };