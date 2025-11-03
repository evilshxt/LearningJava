// Arrays Section Plugin
const arraysSection = {
    id: 'arrays',
    title: 'Arrays',
    icon: 'fas fa-list',
    color: 'cyan',
    subsections: [
        { id: 'array-basics', title: 'Array Basics', anchor: 'arrays' },
        { id: 'array-operations', title: 'Array Operations', anchor: 'operations-section' },
        { id: 'multidimensional', title: 'Multidimensional Arrays', anchor: 'multidimensional-section' },
        { id: 'array-methods', title: 'Array Methods', anchor: 'methods-section' },
        { id: 'detailed-explanation', title: 'Detailed Explanation', anchor: 'detailed-arrays' },
        { id: 'beginner-explanation', title: 'Beginner Friendly', anchor: 'beginner-arrays' }
    ],
    content: `
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">Arrays are like organized storage containers that hold multiple values of the same type. Think of them as a row of boxes where each box can hold one item, and you can access any box by its position number.</p>

        <div class="mb-8 p-6 bg-cyan-50 rounded-xl" id="array-basics-section">
            <h3 class="text-2xl font-semibold mb-4 text-cyan-800"><i class="fas fa-boxes mr-2"></i>Array Basics</h3>
            <p class="mb-4 text-gray-700">Arrays store multiple values of the same type in a single variable:</p>

            <h4 class="text-lg font-semibold mb-2">Creating and Using Arrays:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="// Method 1: Declare and initialize separately\\nint[] numbers;\\nnumbers = new int[5];\\n\\n// Method 2: Declare and initialize together\\nint[] scores = new int[5];\\n\\n// Method 3: Initialize with values\\nint[] grades = {85, 92, 78, 96, 88};\\n\\n// Method 4: Using array literals\\nString[] names = new String[]{\\"Alice\\", \\"Bob\\", \\"Charlie\\"};\\n\\n// Accessing elements (index starts at 0)\\nSystem.out.println(grades[0]); // First element: 85\\nSystem.out.println(grades[2]); // Third element: 78\\n\\n// Modifying elements\\ngrades[1] = 95; // Change second element to 95"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>// Method 1: Declare and initialize separately
int[] numbers;
numbers = new int[5];

// Method 2: Declare and initialize together
int[] scores = new int[5];

// Method 3: Initialize with values
int[] grades = {85, 92, 78, 96, 88};

// Method 4: Using array literals
String[] names = new String[]{"Alice", "Bob", "Charlie"};

// Accessing elements (index starts at 0)
System.out.println(grades[0]); // First element: 85
System.out.println(grades[2]); // Third element: 78

// Modifying elements
grades[1] = 95; // Change second element to 95</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-blue-50 rounded-xl" id="operations-section">
            <h3 class="text-2xl font-semibold mb-4 text-blue-800"><i class="fas fa-cogs mr-2"></i>Array Operations</h3>
            <p class="mb-4 text-gray-700">Common operations you perform on arrays:</p>

            <h4 class="text-lg font-semibold mb-2">Finding Array Length:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code="int[] numbers = {10, 20, 30, 40, 50};\\nSystem.out.println(\\"Array length: \\" + numbers.length); // 5\\n\\n// Loop through all elements\\nfor (int i = 0; i < numbers.length; i++) {\\n    System.out.println(\\"Element at index \\" + i + \\": \\" + numbers[i]);\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>int[] numbers = {10, 20, 30, 40, 50};
System.out.println("Array length: " + numbers.length); // 5

// Loop through all elements
for (int i = 0; i < numbers.length; i++) {
    System.out.println("Element at index " + i + ": " + numbers[i]);
}</code></pre>
            </div>

            <h4 class="text-lg font-semibold mb-2">Enhanced For Loop (For-Each):</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">String[] fruits = {\\"Apple\\", \\"Banana\\", \\"Orange\\"};\\n\\n// Traditional for loop\\nfor (int i = 0; i < fruits.length; i++) {\\n    System.out.println(fruits[i]);\\n}\\n\\n// Enhanced for-each loop (simpler)\\nfor (String fruit : fruits) {\\n    System.out.println(fruit);\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>String[] fruits = {"Apple", "Banana", "Orange"};

// Traditional for loop
for (int i = 0; i < fruits.length; i++) {
    System.out.println(fruits[i]);
}

// Enhanced for-each loop (simpler)
for (String fruit : fruits) {
    System.out.println(fruit);
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-green-50 rounded-xl" id="multidimensional-section">
            <h3 class="text-2xl font-semibold mb-4 text-green-800"><i class="fas fa-th mr-2"></i>Multidimensional Arrays</h3>
            <p class="mb-4 text-gray-700">Arrays can have multiple dimensions, like a table or matrix:</p>

            <h4 class="text-lg font-semibold mb-2">2D Arrays (Tables):</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">// 2D array declaration and initialization\\nint[][] matrix = new int[3][4]; // 3 rows, 4 columns\\n\\n// Initialize with values\\nint[][] grades = {\\n    {85, 92, 78}, // Student 1\\n    {96, 88, 91}, // Student 2\\n    {79, 85, 83}  // Student 3\\n};\\n\\n// Access elements\\nSystem.out.println(grades[0][1]); // Student 1, Subject 2: 92\\nSystem.out.println(grades[2][0]); // Student 3, Subject 1: 79\\n\\n// Get dimensions\\nSystem.out.println(\\"Rows: \\" + grades.length);\\nSystem.out.println(\\"Columns: \\" + grades[0].length);"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>// 2D array declaration and initialization
int[][] matrix = new int[3][4]; // 3 rows, 4 columns

// Initialize with values
int[][] grades = {
    {85, 92, 78}, // Student 1
    {96, 88, 91}, // Student 2
    {79, 85, 83}  // Student 3
};

// Access elements
System.out.println(grades[0][1]); // Student 1, Subject 2: 92
System.out.println(grades[2][0]); // Student 3, Subject 1: 79

// Get dimensions
System.out.println("Rows: " + grades.length);
System.out.println("Columns: " + grades[0].length);</code></pre>
            </div>

            <h4 class="text-lg font-semibold mb-2">Looping Through 2D Arrays:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">int[][] matrix = {\\n    {1, 2, 3},\\n    {4, 5, 6},\\n    {7, 8, 9}\\n};\\n\\n// Nested loops to traverse 2D array\\nfor (int row = 0; row < matrix.length; row++) {\\n    for (int col = 0; col < matrix[row].length; col++) {\\n        System.out.print(matrix[row][col] + \\" \\");\\n    }\\n    System.out.println(); // New line after each row\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Nested loops to traverse 2D array
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println(); // New line after each row
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-purple-50 rounded-xl" id="methods-section">
            <h3 class="text-2xl font-semibold mb-4 text-purple-800"><i class="fas fa-tools mr-2"></i>Array Methods</h3>
            <p class="mb-4 text-gray-700">Useful methods for working with arrays:</p>

            <h4 class="text-lg font-semibold mb-2">Array Utilities:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.util.Arrays;\\n\\nint[] numbers = {5, 2, 8, 1, 9};\\n\\n// Sort the array\\nArrays.sort(numbers);\\nSystem.out.println(\\"Sorted: \\" + Arrays.toString(numbers));\\n\\n// Search for an element (array must be sorted)\\nint index = Arrays.binarySearch(numbers, 8);\\nSystem.out.println(\\"Index of 8: \\" + index);\\n\\n// Fill array with a value\\nint[] filled = new int[5];\\nArrays.fill(filled, 42);\\nSystem.out.println(\\"Filled: \\" + Arrays.toString(filled));\\n\\n// Copy array\\nint[] copy = Arrays.copyOf(numbers, numbers.length);\\nSystem.out.println(\\"Copy: \\" + Arrays.toString(copy));"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.util.Arrays;

int[] numbers = {5, 2, 8, 1, 9};

// Sort the array
Arrays.sort(numbers);
System.out.println("Sorted: " + Arrays.toString(numbers));

// Search for an element (array must be sorted)
int index = Arrays.binarySearch(numbers, 8);
System.out.println("Index of 8: " + index);

// Fill array with a value
int[] filled = new int[5];
Arrays.fill(filled, 42);
System.out.println("Filled: " + Arrays.toString(filled));

// Copy array
int[] copy = Arrays.copyOf(numbers, numbers.length);
System.out.println("Copy: " + Arrays.toString(copy));</code></pre>
            </div>
        </div>

        <div class="flex space-x-4 mb-4">
            <button class="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition duration-200 flex items-center" onclick="toggleExplanation('detailed-arrays')">
                <i class="fas fa-info-circle mr-2"></i>Detailed Explanation
            </button>
            <button class="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition duration-200 flex items-center" onclick="toggleExplanation('beginner-arrays')">
                <i class="fas fa-child mr-2"></i>Beginner Friendly
            </button>
        </div>
        <div id="detailed-arrays" class="hidden mt-4 p-6 bg-cyan-50 rounded-xl border-l-4 border-cyan-500">
            <h3 class="text-xl font-semibold mb-3 text-cyan-800">Technical Details</h3>
            <p class="mb-2"><strong>Array Declaration:</strong> Type[] arrayName; or Type arrayName[]; (both valid, first preferred)</p>
            <p class="mb-2"><strong>Memory Allocation:</strong> new keyword allocates memory. Arrays are objects in Java.</p>
            <p class="mb-2"><strong>Index Bounds:</strong> Valid indices from 0 to length-1. ArrayIndexOutOfBoundsException thrown for invalid access.</p>
            <p class="mb-2"><strong>Array Length:</strong> .length field gives array size. Cannot be changed after creation.</p>
            <p class="mb-2"><strong>Multidimensional Arrays:</strong> Arrays of arrays. Jagged arrays possible (rows can have different lengths).</p>
            <p><strong>Arrays Class:</strong> java.util.Arrays provides utility methods for sorting, searching, copying, and comparison.</p>
        </div>
        <div id="beginner-arrays" class="hidden mt-4 p-6 bg-teal-50 rounded-xl border-l-4 border-teal-500">
            <h3 class="text-xl font-semibold mb-3 text-teal-800">Think of it like this...</h3>
            <p class="mb-3"><strong>Arrays</strong> are like a row of egg cartons. Each carton (element) holds one egg (value), and you can find any egg by counting from the start.</p>
            <p class="mb-3"><strong>Index</strong> is like the position number - the first carton is #0, second is #1, etc. (computers start counting from 0).</p>
            <p class="mb-3"><strong>Array length</strong> tells you how many cartons there are total - like knowing you have 12 egg cartons.</p>
            <p class="mb-3"><strong>2D Arrays</strong> are like a parking lot - rows and columns, where you find a car by saying "row 3, column 5".</p>
            <p class="mb-3"><strong>Enhanced for loop</strong> is like saying "give me each egg one by one" instead of "give me the egg from carton 0, then carton 1, etc."</p>
            <p><strong>Array methods</strong> are like having tools to organize your egg cartons - sort them, search for a specific one, or make copies.</p>
        </div>
    `
};

export { arraysSection };