// Collections Section Plugin
const collectionsSection = {
    id: 'collections',
    title: 'Collections Framework',
    icon: 'fas fa-layer-group',
    color: 'violet',
    subsections: [
        { id: 'arraylist', title: 'ArrayList', anchor: 'collections' },
        { id: 'linkedlist', title: 'LinkedList', anchor: 'linkedlist-section' },
        { id: 'hashset', title: 'HashSet', anchor: 'hashset-section' },
        { id: 'hashmap', title: 'HashMap', anchor: 'hashmap-section' },
        { id: 'iterators', title: 'Iterators', anchor: 'iterators-section' },
        { id: 'detailed-explanation', title: 'Detailed Explanation', anchor: 'detailed-collections' },
        { id: 'beginner-explanation', title: 'Beginner Friendly', anchor: 'beginner-collections' }
    ],
    content: `
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">The Collections Framework provides a unified architecture for storing and manipulating groups of objects. It's more flexible and powerful than arrays, offering dynamic sizing, built-in algorithms, and type safety.</p>

        <div class="mb-8 p-6 bg-violet-50 rounded-xl" id="arraylist-section">
            <h3 class="text-2xl font-semibold mb-4 text-violet-800"><i class="fas fa-list mr-2"></i>ArrayList</h3>
            <p class="mb-4 text-gray-700">A resizable array implementation that provides fast random access:</p>

            <h4 class="text-lg font-semibold mb-2">Basic ArrayList Operations:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.util.ArrayList;\\n\\npublic class ArrayListExample {\\n    public static void main(String[] args) {\\n        // Create an ArrayList\\n        ArrayList<String> fruits = new ArrayList<>();\\n        \\n        // Add elements\\n        fruits.add(\\"Apple\\");\\n        fruits.add(\\"Banana\\");\\n        fruits.add(\\"Orange\\");\\n        \\n        // Add at specific index\\n        fruits.add(1, \\"Grape\\");\\n        \\n        // Access elements\\n        System.out.println(\\"First fruit: \\" + fruits.get(0));\\n        System.out.println(\\"All fruits: \\" + fruits);\\n        \\n        // Update element\\n        fruits.set(2, \\"Pineapple\\");\\n        \\n        // Remove element\\n        fruits.remove(\\"Banana\\");\\n        \\n        // Check if contains\\n        System.out.println(\\"Contains Apple? \\" + fruits.contains(\\"Apple\\"));\\n        \\n        // Get size\\n        System.out.println(\\"Size: \\" + fruits.size());\\n        \\n        // Iterate through ArrayList\\n        System.out.println(\\"All fruits:\\");\\n        for (String fruit : fruits) {\\n            System.out.println(\\"- \\" + fruit);\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        // Create an ArrayList
        ArrayList<String> fruits = new ArrayList<>();

        // Add elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");

        // Add at specific index
        fruits.add(1, "Grape");

        // Access elements
        System.out.println("First fruit: " + fruits.get(0));
        System.out.println("All fruits: " + fruits);

        // Update element
        fruits.set(2, "Pineapple");

        // Remove element
        fruits.remove("Banana");

        // Check if contains
        System.out.println("Contains Apple? " + fruits.contains("Apple"));

        // Get size
        System.out.println("Size: " + fruits.size());

        // Iterate through ArrayList
        System.out.println("All fruits:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-pink-50 rounded-xl" id="linkedlist-section">
            <h3 class="text-2xl font-semibold mb-4 text-pink-800"><i class="fas fa-link mr-2"></i>LinkedList</h3>
            <p class="mb-4 text-gray-700">A doubly-linked list implementation that provides fast insertions and deletions:</p>

            <h4 class="text-lg font-semibold mb-2">LinkedList Operations:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.util.LinkedList;\\n\\npublic class LinkedListExample {\\n    public static void main(String[] args) {\\n        LinkedList<String> tasks = new LinkedList<>();\\n        \\n        // Add elements\\n        tasks.add(\\"Task 1\\");\\n        tasks.add(\\"Task 3\\");\\n        \\n        // Add to beginning and end\\n        tasks.addFirst(\\"Urgent Task\\");\\n        tasks.addLast(\\"Optional Task\\");\\n        \\n        // Insert in middle\\n        tasks.add(2, \\"Task 2\\");\\n        \\n        System.out.println(\\"All tasks: \\" + tasks);\\n        \\n        // Access first and last\\n        System.out.println(\\"First task: \\" + tasks.getFirst());\\n        System.out.println(\\"Last task: \\" + tasks.getLast());\\n        \\n        // Remove from ends\\n        tasks.removeFirst();\\n        tasks.removeLast();\\n        \\n        System.out.println(\\"After removing ends: \\" + tasks);\\n        \\n        // Use as queue (FIFO)\\n        LinkedList<String> queue = new LinkedList<>();\\n        queue.offer(\\"Customer 1\\");\\n        queue.offer(\\"Customer 2\\");\\n        queue.offer(\\"Customer 3\\");\\n        \\n        System.out.println(\\"Queue: \\" + queue);\\n        System.out.println(\\"Served: \\" + queue.poll());\\n        System.out.println(\\"Next: \\" + queue.peek());\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
        LinkedList<String> tasks = new LinkedList<>();

        // Add elements
        tasks.add("Task 1");
        tasks.add("Task 3");

        // Add to beginning and end
        tasks.addFirst("Urgent Task");
        tasks.addLast("Optional Task");

        // Insert in middle
        tasks.add(2, "Task 2");

        System.out.println("All tasks: " + tasks);

        // Access first and last
        System.out.println("First task: " + tasks.getFirst());
        System.out.println("Last task: " + tasks.getLast());

        // Remove from ends
        tasks.removeFirst();
        tasks.removeLast();

        System.out.println("After removing ends: " + tasks);

        // Use as queue (FIFO)
        LinkedList<String> queue = new LinkedList<>();
        queue.offer("Customer 1");
        queue.offer("Customer 2");
        queue.offer("Customer 3");

        System.out.println("Queue: " + queue);
        System.out.println("Served: " + queue.poll());
        System.out.println("Next: " + queue.peek());
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-indigo-50 rounded-xl" id="hashset-section">
            <h3 class="text-2xl font-semibold mb-4 text-indigo-800"><i class="fas fa-draw-polygon mr-2"></i>HashSet</h3>
            <p class="mb-4 text-gray-700">A collection that contains no duplicate elements and doesn't maintain insertion order:</p>

            <h4 class="text-lg font-semibold mb-2">HashSet Operations:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.util.HashSet;\\n\\npublic class HashSetExample {\\n    public static void main(String[] args) {\\n        HashSet<String> uniqueWords = new HashSet<>();\\n        \\n        // Add elements\\n        uniqueWords.add(\\"apple\\");\\n        uniqueWords.add(\\"banana\\");\\n        uniqueWords.add(\\"apple\\"); // Duplicate - won't be added\\n        uniqueWords.add(\\"cherry\\");\\n        uniqueWords.add(\\"banana\\"); // Duplicate - won't be added\\n        \\n        System.out.println(\\"Unique words: \\" + uniqueWords);\\n        System.out.println(\\"Size: \\" + uniqueWords.size());\\n        \\n        // Check if contains\\n        System.out.println(\\"Contains 'apple'? \\" + uniqueWords.contains(\\"apple\\"));\\n        System.out.println(\\"Contains 'grape'? \\" + uniqueWords.contains(\\"grape\\"));\\n        \\n        // Remove element\\n        uniqueWords.remove(\\"banana\\");\\n        System.out.println(\\"After removing banana: \\" + uniqueWords);\\n        \\n        // Iterate through HashSet\\n        System.out.println(\\"All words:\\");\\n        for (String word : uniqueWords) {\\n            System.out.println(\\"- \\" + word);\\n        }\\n        \\n        // Clear the set\\n        uniqueWords.clear();\\n        System.out.println(\\"Is empty? \\" + uniqueWords.isEmpty());\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.util.HashSet;

public class HashSetExample {
    public static void main(String[] args) {
        HashSet<String> uniqueWords = new HashSet<>();

        // Add elements
        uniqueWords.add("apple");
        uniqueWords.add("banana");
        uniqueWords.add("apple"); // Duplicate - won't be added
        uniqueWords.add("banana"); // Duplicate - won't be added
        uniqueWords.add("cherry");

        System.out.println("Unique words: " + uniqueWords);
        System.out.println("Size: " + uniqueWords.size());

        // Check if contains
        System.out.println("Contains 'apple'? " + uniqueWords.contains("apple"));
        System.out.println("Contains 'grape'? " + uniqueWords.contains("grape"));

        // Remove element
        uniqueWords.remove("banana");
        System.out.println("After removing banana: " + uniqueWords);

        // Iterate through HashSet
        System.out.println("All words:");
        for (String word : uniqueWords) {
            System.out.println("- " + word);
        }

        // Clear the set
        uniqueWords.clear();
        System.out.println("Is empty? " + uniqueWords.isEmpty());
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-cyan-50 rounded-xl" id="hashmap-section">
            <h3 class="text-2xl font-semibold mb-4 text-cyan-800"><i class="fas fa-map mr-2"></i>HashMap</h3>
            <p class="mb-4 text-gray-700">A collection that stores key-value pairs and provides fast lookup by key:</p>

            <h4 class="text-lg font-semibold mb-2">HashMap Operations:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.util.HashMap;\\n\\npublic class HashMapExample {\\n    public static void main(String[] args) {\\n        HashMap<String, Integer> studentGrades = new HashMap<>();\\n        \\n        // Put key-value pairs\\n        studentGrades.put(\\"Alice\\", 95);\\n        studentGrades.put(\\"Bob\\", 87);\\n        studentGrades.put(\\"Charlie\\", 92);\\n        studentGrades.put(\\"Diana\\", 88);\\n        \\n        System.out.println(\\"Student grades: \\" + studentGrades);\\n        \\n        // Get value by key\\n        System.out.println(\\"Alice's grade: \\" + studentGrades.get(\\"Alice\\"));\\n        \\n        // Check if key exists\\n        System.out.println(\\"Has Charlie? \\" + studentGrades.containsKey(\\"Charlie\\"));\\n        System.out.println(\\"Has grade 90? \\" + studentGrades.containsValue(90));\\n        \\n        // Update value\\n        studentGrades.put(\\"Bob\\", 90); // Overwrites previous value\\n        System.out.println(\\"Bob's updated grade: \\" + studentGrades.get(\\"Bob\\"));\\n        \\n        // Remove entry\\n        studentGrades.remove(\\"Diana\\");\\n        System.out.println(\\"After removing Diana: \\" + studentGrades);\\n        \\n        // Iterate through keys\\n        System.out.println(\\"All students:\\");\\n        for (String student : studentGrades.keySet()) {\\n            System.out.println(student + \\": \\" + studentGrades.get(student));\\n        }\\n        \\n        // Iterate through entries\\n        System.out.println(\\"All entries:\\");\\n        for (HashMap.Entry<String, Integer> entry : studentGrades.entrySet()) {\\n            System.out.println(entry.getKey() + \\" -> \\" + entry.getValue());\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<String, Integer> studentGrades = new HashMap<>();

        // Put key-value pairs
        studentGrades.put("Alice", 95);
        studentGrades.put("Bob", 87);
        studentGrades.put("Charlie", 92);
        studentGrades.put("Diana", 88);

        System.out.println("Student grades: " + studentGrades);

        // Get value by key
        System.out.println("Alice's grade: " + studentGrades.get("Alice"));

        // Check if key exists
        System.out.println("Has Charlie? " + studentGrades.containsKey("Charlie"));
        System.out.println("Has grade 90? " + studentGrades.containsValue(90));

        // Update value
        studentGrades.put("Bob", 90); // Overwrites previous value
        System.out.println("Bob's updated grade: " + studentGrades.get("Bob"));

        // Remove entry
        studentGrades.remove("Diana");
        System.out.println("After removing Diana: " + studentGrades);

        // Iterate through keys
        System.out.println("All students:");
        for (String student : studentGrades.keySet()) {
            System.out.println(student + ": " + studentGrades.get(student));
        }

        // Iterate through entries
        System.out.println("All entries:");
        for (HashMap.Entry<String, Integer> entry : studentGrades.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-orange-50 rounded-xl" id="iterators-section">
            <h3 class="text-2xl font-semibold mb-4 text-orange-800"><i class="fas fa-walking mr-2"></i>Iterators</h3>
            <p class="mb-4 text-gray-700">A way to traverse through collections safely, allowing removal during iteration:</p>

            <h4 class="text-lg font-semibold mb-2">Using Iterators:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.util.*;\\n\\npublic class IteratorExample {\\n    public static void main(String[] args) {\\n        ArrayList<String> fruits = new ArrayList<>();\\n        fruits.add(\\"Apple\\");\\n        fruits.add(\\"Banana\\");\\n        fruits.add(\\"Cherry\\");\\n        fruits.add(\\"Date\\");\\n        \\n        System.out.println(\\"Original list: \\" + fruits);\\n        \\n        // Using Iterator to traverse\\n        Iterator<String> iterator = fruits.iterator();\\n        System.out.println(\\"Using Iterator:\\");\\n        while (iterator.hasNext()) {\\n            String fruit = iterator.next();\\n            System.out.println(\\"- \\" + fruit);\\n            \\n            // Remove items that start with 'B'\\n            if (fruit.startsWith(\\"B\\")) {\\n                iterator.remove();\\n            }\\n        }\\n        \\n        System.out.println(\\"After removing fruits starting with B: \\" + fruits);\\n        \\n        // Using ListIterator (bidirectional)\\n        LinkedList<String> colors = new LinkedList<>();\\n        colors.add(\\"Red\\");\\n        colors.add(\\"Green\\");\\n        colors.add(\\"Blue\\");\\n        \\n        ListIterator<String> listIterator = colors.listIterator();\\n        \\n        System.out.println(\\"Forward iteration:\\");\\n        while (listIterator.hasNext()) {\\n            System.out.println(listIterator.next());\\n        }\\n        \\n        System.out.println(\\"Backward iteration:\\");\\n        while (listIterator.hasPrevious()) {\\n            System.out.println(listIterator.previous());\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.util.*;

public class IteratorExample {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add("Date");

        System.out.println("Original list: " + fruits);

        // Using Iterator to traverse
        Iterator<String> iterator = fruits.iterator();
        System.out.println("Using Iterator:");
        while (iterator.hasNext()) {
            String fruit = iterator.next();
            System.out.println("- " + fruit);

            // Remove items that start with 'B'
            if (fruit.startsWith("B")) {
                iterator.remove();
            }
        }

        System.out.println("After removing fruits starting with B: " + fruits);

        // Using ListIterator (bidirectional)
        LinkedList<String> colors = new LinkedList<>();
        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");

        ListIterator<String> listIterator = colors.listIterator();

        System.out.println("Forward iteration:");
        while (listIterator.hasNext()) {
            System.out.println(listIterator.next());
        }

        System.out.println("Backward iteration:");
        while (listIterator.hasPrevious()) {
            System.out.println(listIterator.previous());
        }
    }
}</code></pre>
            </div>
        </div>

        <div class="flex space-x-4 mb-4">
            <button class="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition duration-200 flex items-center" onclick="toggleExplanation('detailed-collections')">
                <i class="fas fa-info-circle mr-2"></i>Detailed Explanation
            </button>
            <button class="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition duration-200 flex items-center" onclick="toggleExplanation('beginner-collections')">
                <i class="fas fa-child mr-2"></i>Beginner Friendly
            </button>
        </div>
        <div id="detailed-collections" class="hidden mt-4 p-6 bg-violet-50 rounded-xl border-l-4 border-violet-500">
            <h3 class="text-xl font-semibold mb-3 text-violet-800">Technical Details</h3>
            <p class="mb-2"><strong>Collection Hierarchy:</strong> Collection (interface) -> List, Set, Queue. Map is separate. Each has multiple implementations.</p>
            <p class="mb-2"><strong>ArrayList:</strong> Fast random access (get/set), slow insertions/deletions in middle. Good for read-heavy operations.</p>
            <p class="mb-2"><strong>LinkedList:</strong> Fast insertions/deletions, slow random access. Good for frequent modifications.</p>
            <p class="mb-2"><strong>HashSet:</strong> No duplicates, fast lookup. Uses hashCode() and equals(). Order not guaranteed.</p>
            <p class="mb-2"><strong>HashMap:</strong> Key-value pairs, fast lookup by key. Keys must be unique, null keys allowed.</p>
            <p class="mb-2"><strong>Generics:</strong> Type safety with <Type> syntax. Prevents ClassCastException at runtime.</p>
            <p><strong>Iterators:</strong> Safe traversal and modification. Iterator for basic traversal, ListIterator for bidirectional movement.</p>
        </div>
        <div id="beginner-collections" class="hidden mt-4 p-6 bg-rose-50 rounded-xl border-l-4 border-rose-500">
            <h3 class="text-xl font-semibold mb-3 text-rose-800">Think of it like this...</h3>
            <p class="mb-3"><strong>ArrayList</strong> is like a shopping list on paper - you can quickly look at any item, but adding something in the middle means rewriting everything.</p>
            <p class="mb-3"><strong>LinkedList</strong> is like a chain of paper clips - easy to add/remove links anywhere, but hard to jump to the 10th link quickly.</p>
            <p class="mb-3"><strong>HashSet</strong> is like a guest list for a party - each person can only be invited once, and you can quickly check if someone is invited.</p>
            <p class="mb-3"><strong>HashMap</strong> is like a phone book - you look up names (keys) to find phone numbers (values), and each name appears only once.</p>
            <p class="mb-3"><strong>Iterator</strong> is like a librarian showing you books one by one - they can remove books from the shelf as you go, and you don't disturb the other visitors.</p>
            <p><strong>Generics</strong> are like labeled containers - a "String container" can only hold strings, preventing mix-ups.</p>
        </div>
    `
};

export { collectionsSection };