// Input/Output Section Plugin
const inputOutputSection = {
    id: 'input-output',
    title: 'Input and Output',
    icon: 'fas fa-exchange-alt',
    color: 'teal',
    subsections: [
        { id: 'console-io', title: 'Console Input/Output', anchor: 'input-output' },
        { id: 'file-io', title: 'File Input/Output', anchor: 'file-io-section' },
        { id: 'buffered-io', title: 'Buffered I/O', anchor: 'buffered-io-section' },
        { id: 'serialization', title: 'Object Serialization', anchor: 'serialization-section' },
        { id: 'detailed-explanation', title: 'Detailed Explanation', anchor: 'detailed-io' },
        { id: 'beginner-explanation', title: 'Beginner Friendly', anchor: 'beginner-io' }
    ],
    content: `
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">Input and Output (I/O) operations allow your Java programs to communicate with the outside world. This includes reading from and writing to the console, files, networks, and other data sources.</p>

        <div class="mb-8 p-6 bg-teal-50 rounded-xl" id="console-io-section">
            <h3 class="text-2xl font-semibold mb-4 text-teal-800"><i class="fas fa-terminal mr-2"></i>Console Input/Output</h3>
            <p class="mb-4 text-gray-700">Basic input from keyboard and output to console screen:</p>

            <h4 class="text-lg font-semibold mb-2">Console Output (System.out):</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">public class ConsoleOutput {\\n    public static void main(String[] args) {\\n        // Simple output\\n        System.out.println(\\"Hello, World!\\");\\n        \\n        // Output without newline\\n        System.out.print(\\"Hello, \\");\\n        System.out.print(\\"World!\\");\\n        System.out.println(); // Add newline\\n        \\n        // Formatted output\\n        String name = \\"Alice\\";\\n        int age = 25;\\n        double height = 5.6;\\n        System.out.printf(\\"Name: %s, Age: %d, Height: %.1f feet\\\\n\\", name, age, height);\\n        \\n        // Using String.format()\\n        String message = String.format(\\"Welcome %s! You are %d years old.\\", name, age);\\n        System.out.println(message);\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public class ConsoleOutput {
    public static void main(String[] args) {
        // Simple output
        System.out.println("Hello, World!");

        // Output without newline
        System.out.print("Hello, ");
        System.out.print("World!");
        System.out.println(); // Add newline

        // Formatted output
        String name = "Alice";
        int age = 25;
        double height = 5.6;
        System.out.printf("Name: %s, Age: %d, Height: %.1f feet\n", name, age, height);

        // Using String.format()
        String message = String.format("Welcome %s! You are %d years old.", name, age);
        System.out.println(message);
    }
}</code></pre>
            </div>

            <h4 class="text-lg font-semibold mb-2">Console Input (Scanner):</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.util.Scanner;\\n\\npublic class ConsoleInput {\\n    public static void main(String[] args) {\\n        Scanner scanner = new Scanner(System.in);\\n        \\n        // Reading different types of input\\n        System.out.print(\\"Enter your name: \\");\\n        String name = scanner.nextLine();\\n        \\n        System.out.print(\\"Enter your age: \\");\\n        int age = scanner.nextInt();\\n        \\n        System.out.print(\\"Enter your height in feet: \\");\\n        double height = scanner.nextDouble();\\n        \\n        // Display the input\\n        System.out.println(\\"\\\\n--- User Information ---\\");\\n        System.out.printf(\\"Name: %s\\\\n\\", name);\\n        System.out.printf(\\"Age: %d years\\\\n\\", age);\\n        System.out.printf(\\"Height: %.1f feet\\\\n\\", height);\\n        \\n        // Close the scanner\\n        scanner.close();\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.util.Scanner;

public class ConsoleInput {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Reading different types of input
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.print("Enter your height in feet: ");
        double height = scanner.nextDouble();

        // Display the input
        System.out.println("\n--- User Information ---");
        System.out.printf("Name: %s\n", name);
        System.out.printf("Age: %d years\n", height);
        System.out.printf("Height: %.1f feet\n", height);

        // Close the scanner
        scanner.close();
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-blue-50 rounded-xl" id="file-io-section">
            <h3 class="text-2xl font-semibold mb-4 text-blue-800"><i class="fas fa-file mr-2"></i>File Input/Output</h3>
            <p class="mb-4 text-gray-700">Reading from and writing to files on disk:</p>

            <h4 class="text-lg font-semibold mb-2">Writing to a File:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.io.*;\\n\\npublic class FileWriterExample {\\n    public static void main(String[] args) {\\n        try {\\n            // Create a FileWriter\\n            FileWriter writer = new FileWriter(\\"example.txt\\");\\n            \\n            // Write some text\\n            writer.write(\\"Hello, World!\\\\n\\");\\n            writer.write(\\"This is a text file.\\\\n\\");\\n            writer.write(\\"Created using Java File I/O.\\\\n\\");\\n            \\n            // Close the writer\\n            writer.close();\\n            \\n            System.out.println(\\"File written successfully!\\");\\n            \\n        } catch (IOException e) {\\n            System.out.println(\\"Error writing to file: \\" + e.getMessage());\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.io.*;

public class FileWriterExample {
    public static void main(String[] args) {
        try {
            // Create a FileWriter
            FileWriter writer = new FileWriter("example.txt");

            // Write some text
            writer.write("Hello, World!\n");
            writer.write("This is a text file.\n");
            writer.write("Created using Java File I/O.\n");

            // Close the writer
            writer.close();

            System.out.println("File written successfully!");

        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }
    }
}</code></pre>
            </div>

            <h4 class="text-lg font-semibold mb-2">Reading from a File:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.io.*;\\n\\npublic class FileReaderExample {\\n    public static void main(String[] args) {\\n        try {\\n            // Create a FileReader\\n            FileReader reader = new FileReader(\\"example.txt\\");\\n            \\n            // Read character by character\\n            int character;\\n            while ((character = reader.read()) != -1) {\\n                System.out.print((char) character);\\n            }\\n            \\n            // Close the reader\\n            reader.close();\\n            \\n        } catch (FileNotFoundException e) {\\n            System.out.println(\\"File not found: \\" + e.getMessage());\\n        } catch (IOException e) {\\n            System.out.println(\\"Error reading file: \\" + e.getMessage());\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.io.*;

public class FileReaderExample {
    public static void main(String[] args) {
        try {
            // Create a FileReader
            FileReader reader = new FileReader("example.txt");

            // Read character by character
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }

            // Close the reader
            reader.close();

        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-green-50 rounded-xl" id="buffered-io-section">
            <h3 class="text-2xl font-semibold mb-4 text-green-800"><i class="fas fa-tachometer-alt mr-2"></i>Buffered I/O</h3>
            <p class="mb-4 text-gray-700">Buffered readers/writers for efficient file operations:</p>

            <h4 class="text-lg font-semibold mb-2">Buffered Writing:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.io.*;\\n\\npublic class BufferedWriterExample {\\n    public static void main(String[] args) {\\n        try {\\n            // Create buffered writer\\n            BufferedWriter writer = new BufferedWriter(new FileWriter(\\"buffered.txt\\"));\\n            \\n            // Write lines efficiently\\n            writer.write(\\"Line 1: Hello World\\");\\n            writer.newLine();\\n            writer.write(\\"Line 2: Java I/O is powerful\\");\\n            writer.newLine();\\n            writer.write(\\"Line 3: Buffered I/O is fast\\");\\n            writer.newLine();\\n            \\n            // Close the writer\\n            writer.close();\\n            \\n            System.out.println(\\"Buffered writing completed!\\");\\n            \\n        } catch (IOException e) {\\n            System.out.println(\\"Error: \\" + e.getMessage());\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.io.*;

public class BufferedWriterExample {
    public static void main(String[] args) {
        try {
            // Create buffered writer
            BufferedWriter writer = new BufferedWriter(new FileWriter("buffered.txt"));

            // Write lines efficiently
            writer.write("Line 1: Hello World");
            writer.newLine();
            writer.write("Line 2: Java I/O is powerful");
            writer.newLine();
            writer.write("Line 3: Buffered I/O is fast");
            writer.newLine();

            // Close the writer
            writer.close();

            System.out.println("Buffered writing completed!");

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}</code></pre>
            </div>

            <h4 class="text-lg font-semibold mb-2">Buffered Reading:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.io.*;\\n\\npublic class BufferedReaderExample {\\n    public static void main(String[] args) {\\n        try {\\n            // Create buffered reader\\n            BufferedReader reader = new BufferedReader(new FileReader(\\"buffered.txt\\"));\\n            \\n            // Read line by line\\n            String line;\\n            int lineNumber = 1;\\n            while ((line = reader.readLine()) != null) {\\n                System.out.println(\\"Line \\" + lineNumber + \\": \\" + line);\\n                lineNumber++;\\n            }\\n            \\n            // Close the reader\\n            reader.close();\\n            \\n        } catch (FileNotFoundException e) {\\n            System.out.println(\\"File not found: \\" + e.getMessage());\\n        } catch (IOException e) {\\n            System.out.println(\\"Error reading file: \\" + e.getMessage());\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.io.*;

public class BufferedReaderExample {
    public static void main(String[] args) {
        try {
            // Create buffered reader
            BufferedReader reader = new BufferedReader(new FileReader("buffered.txt"));

            // Read line by line
            String line;
            int lineNumber = 1;
            while ((line = reader.readLine()) != null) {
                System.out.println("Line " + lineNumber + ": " + line);
                lineNumber++;
            }

            // Close the reader
            reader.close();

        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-purple-50 rounded-xl" id="serialization-section">
            <h3 class="text-2xl font-semibold mb-4 text-purple-800"><i class="fas fa-save mr-2"></i>Object Serialization</h3>
            <p class="mb-4 text-gray-700">Saving and loading complete objects to/from files:</p>

            <h4 class="text-lg font-semibold mb-2">Serializing Objects:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.io.*;\\n\\n// Class must implement Serializable\\nclass Person implements Serializable {\\n    private static final long serialVersionUID = 1L;\\n    \\n    private String name;\\n    private int age;\\n    private String email;\\n    \\n    public Person(String name, int age, String email) {\\n        this.name = name;\\n        this.age = age;\\n        this.email = email;\\n    }\\n    \\n    @Override\\n    public String toString() {\\n        return \\"Person{name='\\" + name + \\"', age=\\" + age + \\", email='\\" + email + \\"'}\\";\\n    }\\n}\\n\\npublic class SerializationExample {\\n    public static void main(String[] args) {\\n        Person person = new Person(\\"Alice Johnson\\", 30, \\"alice@example.com\\");\\n        \\n        // Serialize (save) the object\\n        try {\\n            FileOutputStream fileOut = new FileOutputStream(\\"person.ser\\");\\n            ObjectOutputStream out = new ObjectOutputStream(fileOut);\\n            out.writeObject(person);\\n            out.close();\\n            fileOut.close();\\n            System.out.println(\\"Object serialized successfully\\");\\n            \\n        } catch (IOException e) {\\n            System.out.println(\\"Serialization error: \\" + e.getMessage());\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.io.*;

// Class must implement Serializable
class Person implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private int age;
    private String email;

    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", email='" + email + "'}";
    }
}

public class SerializationExample {
    public static void main(String[] args) {
        Person person = new Person("Alice Johnson", 30, "alice@example.com");

        // Serialize (save) the object
        try {
            FileOutputStream fileOut = new FileOutputStream("person.ser");
            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(person);
            out.close();
            fileOut.close();
            System.out.println("Object serialized successfully");

        } catch (IOException e) {
            System.out.println("Serialization error: " + e.getMessage());
        }
    }
}</code></pre>
            </div>

            <h4 class="text-lg font-semibold mb-2">Deserializing Objects:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.io.*;\\n\\npublic class DeserializationExample {\\n    public static void main(String[] args) {\\n        Person person = null;\\n        \\n        // Deserialize (load) the object\\n        try {\\n            FileInputStream fileIn = new FileInputStream(\\"person.ser\\");\\n            ObjectInputStream in = new ObjectInputStream(fileIn);\\n            person = (Person) in.readObject();\\n            in.close();\\n            fileIn.close();\\n            \\n        } catch (IOException e) {\\n            System.out.println(\\"Deserialization IO error: \\" + e.getMessage());\\n        } catch (ClassNotFoundException e) {\\n            System.out.println(\\"Class not found error: \\" + e.getMessage());\\n        }\\n        \\n        // Use the deserialized object\\n        if (person != null) {\\n            System.out.println(\\"Deserialized object: \\" + person);\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.io.*;

public class DeserializationExample {
    public static void main(String[] args) {
        Person person = null;

        // Deserialize (load) the object
        try {
            FileInputStream fileIn = new FileInputStream("person.ser");
            ObjectInputStream in = new ObjectInputStream(fileIn);
            person = (Person) in.readObject();
            in.close();
            fileIn.close();

        } catch (IOException e) {
            System.out.println("Deserialization IO error: " + e.getMessage());
        } catch (ClassNotFoundException e) {
            System.out.println("Class not found error: " + e.getMessage());
        }

        // Use the deserialized object
        if (person != null) {
            System.out.println("Deserialized object: " + person);
        }
    }
}</code></pre>
            </div>
        </div>

        <div class="flex space-x-4 mb-4">
            <button class="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition duration-200 flex items-center" onclick="toggleExplanation('detailed-io')">
                <i class="fas fa-info-circle mr-2"></i>Detailed Explanation
            </button>
            <button class="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition duration-200 flex items-center" onclick="toggleExplanation('beginner-io')">
                <i class="fas fa-child mr-2"></i>Beginner Friendly
            </button>
        </div>
        <div id="detailed-io" class="hidden mt-4 p-6 bg-teal-50 rounded-xl border-l-4 border-teal-500">
            <h3 class="text-xl font-semibold mb-3 text-teal-800">Technical Details</h3>
            <p class="mb-2"><strong>Streams:</strong> Java I/O is based on streams - sequences of data. InputStream/OutputStream for bytes, Reader/Writer for characters.</p>
            <p class="mb-2"><strong>Scanner:</strong> Utility class for parsing primitive types and strings from text input. More convenient than direct stream reading.</p>
            <p class="mb-2"><strong>Buffered I/O:</strong> Improves performance by reducing system calls. Buffers data before reading/writing.</p>
            <p class="mb-2"><strong>Serialization:</strong> Process of converting objects to byte streams. Requires Serializable interface. Includes serialVersionUID for version control.</p>
            <p class="mb-2"><strong>File Paths:</strong> Can be absolute or relative. Use forward slashes (/) on all platforms for portability.</p>
            <p><strong>Resource Management:</strong> Always close streams in finally blocks or use try-with-resources to prevent resource leaks.</p>
        </div>
        <div id="beginner-io" class="hidden mt-4 p-6 bg-cyan-50 rounded-xl border-l-4 border-cyan-500">
            <h3 class="text-xl font-semibold mb-3 text-cyan-800">Think of it like this...</h3>
            <p class="mb-3"><strong>Console I/O</strong> is like talking to a friend - you say something (output) and listen to their response (input).</p>
            <p class="mb-3"><strong>File I/O</strong> is like writing letters and reading old letters - you save information to read later.</p>
            <p class="mb-3"><strong>Buffered I/O</strong> is like using a shopping cart instead of carrying items one by one - it's more efficient to batch operations.</p>
            <p class="mb-3"><strong>Serialization</strong> is like freezing food - you preserve the entire object (with all its properties) to use later, exactly as it was.</p>
            <p class="mb-3"><strong>Streams</strong> are like hoses - water (data) flows through them. Input streams bring data in, output streams send data out.</p>
            <p><strong>Closing resources</strong> is like turning off the faucet when you're done - it prevents wasting resources and potential leaks.</p>
        </div>
    `
};

export { inputOutputSection };