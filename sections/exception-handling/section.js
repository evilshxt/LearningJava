// Exception Handling Section Plugin
const exceptionHandlingSection = {
    id: 'exception-handling',
    title: 'Exception Handling',
    icon: 'fas fa-exclamation-triangle',
    color: 'amber',
    subsections: [
        { id: 'what-are-exceptions', title: 'What are Exceptions?', anchor: 'exception-handling' },
        { id: 'try-catch', title: 'Try-Catch Blocks', anchor: 'try-catch-section' },
        { id: 'finally', title: 'Finally Block', anchor: 'finally-section' },
        { id: 'throw-throws', title: 'Throw and Throws', anchor: 'throw-throws-section' },
        { id: 'custom-exceptions', title: 'Custom Exceptions', anchor: 'custom-exceptions-section' },
        { id: 'detailed-explanation', title: 'Detailed Explanation', anchor: 'detailed-exceptions' },
        { id: 'beginner-explanation', title: 'Beginner Friendly', anchor: 'beginner-exceptions' }
    ],
    content: `
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">Exceptions are unexpected events that occur during program execution. Exception handling allows your program to gracefully handle errors instead of crashing. Think of it as having a plan B when things go wrong.</p>

        <div class="mb-8 p-6 bg-amber-50 rounded-xl" id="exceptions-basics-section">
            <h3 class="text-2xl font-semibold mb-4 text-amber-800"><i class="fas fa-question-circle mr-2"></i>What are Exceptions?</h3>
            <p class="mb-4 text-gray-700">Exceptions are problems that occur during program execution. They can be caused by user input, hardware failures, or programming errors:</p>

            <h4 class="text-lg font-semibold mb-2">Common Exception Types:</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <h5 class="font-semibold text-red-800">Checked Exceptions</h5>
                    <p class="text-sm text-gray-700">Compiler forces you to handle them. Examples: IOException, SQLException</p>
                </div>
                <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                    <h5 class="font-semibold text-orange-800">Unchecked Exceptions</h5>
                    <p class="text-sm text-gray-700">Runtime exceptions. Examples: NullPointerException, ArrayIndexOutOfBoundsException</p>
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <h5 class="font-semibold text-yellow-800">Errors</h5>
                    <p class="text-sm text-gray-700">Serious problems. Examples: OutOfMemoryError, StackOverflowError</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h5 class="font-semibold text-blue-800">Custom Exceptions</h5>
                    <p class="text-sm text-gray-700">User-defined exceptions for specific business logic</p>
                </div>
            </div>

            <h4 class="text-lg font-semibold mb-2">Example of an Exception:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">public class Main {\\n    public static void main(String[] args) {\\n        int[] numbers = {1, 2, 3};\\n        \\n        // This will cause an ArrayIndexOutOfBoundsException\\n        System.out.println(numbers[5]); // Index 5 doesn't exist!\\n        \\n        System.out.println(\\"This line won't execute\\");\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};

        // This will cause an ArrayIndexOutOfBoundsException
        System.out.println(numbers[5]); // Index 5 doesn't exist!

        System.out.println("This line won't execute");
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-red-50 rounded-xl" id="try-catch-section">
            <h3 class="text-2xl font-semibold mb-4 text-red-800"><i class="fas fa-shield-alt mr-2"></i>Try-Catch Blocks</h3>
            <p class="mb-4 text-gray-700">The try-catch block is the primary way to handle exceptions:</p>

            <h4 class="text-lg font-semibold mb-2">Basic Try-Catch:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">public class Main {\\n    public static void main(String[] args) {\\n        try {\\n            int[] numbers = {1, 2, 3};\\n            System.out.println(numbers[5]); // This will throw exception\\n            \\n        } catch (ArrayIndexOutOfBoundsException e) {\\n            System.out.println(\\"Error: Array index is out of bounds!\\");\\n            System.out.println(\\"Exception message: \\" + e.getMessage());\\n        }\\n        \\n        System.out.println(\\"Program continues after exception handling\\");\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public class Main {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // This will throw exception

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Array index is out of bounds!");
            System.out.println("Exception message: " + e.getMessage());
        }

        System.out.println("Program continues after exception handling");
    }
}</code></pre>
            </div>

            <h4 class="text-lg font-semibold mb-2">Multiple Catch Blocks:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">public class Main {\\n    public static void main(String[] args) {\\n        try {\\n            String text = null;\\n            System.out.println(text.length()); // NullPointerException\\n            \\n            int[] numbers = {1, 2, 3};\\n            System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException\\n            \\n            int result = 10 / 0; // ArithmeticException\\n            \\n        } catch (NullPointerException e) {\\n            System.out.println(\\"Null pointer error: \\" + e.getMessage());\\n        } catch (ArrayIndexOutOfBoundsException e) {\\n            System.out.println(\\"Array index error: \\" + e.getMessage());\\n        } catch (ArithmeticException e) {\\n            System.out.println(\\"Math error: \\" + e.getMessage());\\n        } catch (Exception e) {\\n            System.out.println(\\"General error: \\" + e.getMessage());\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public class Main {
    public static void main(String[] args) {
        try {
            String text = null;
            System.out.println(text.length()); // NullPointerException

            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException

            int result = 10 / 0; // ArithmeticException

        } catch (NullPointerException e) {
            System.out.println("Null pointer error: " + e.getMessage());
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index error: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.out.println("Math error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("General error: " + e.getMessage());
        }
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-blue-50 rounded-xl" id="finally-section">
            <h3 class="text-2xl font-semibold mb-4 text-blue-800"><i class="fas fa-check-circle mr-2"></i>Finally Block</h3>
            <p class="mb-4 text-gray-700">The finally block always executes, regardless of whether an exception occurs:</p>

            <h4 class="text-lg font-semibold mb-2">Try-Catch-Finally:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">import java.io.*;\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        FileReader reader = null;\\n        \\n        try {\\n            reader = new FileReader(\\"example.txt\\");\\n            // Read from file\\n            System.out.println(\\"Reading file...\\");\\n            \\n        } catch (FileNotFoundException e) {\\n            System.out.println(\\"File not found: \\" + e.getMessage());\\n            \\n        } finally {\\n            // This ALWAYS executes\\n            System.out.println(\\"Finally block: Cleaning up resources\\");\\n            if (reader != null) {\\n                try {\\n                    reader.close();\\n                } catch (IOException e) {\\n                    System.out.println(\\"Error closing file\\");\\n                }\\n            }\\n        }\\n        \\n        System.out.println(\\"Program continues...\\");\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>import java.io.*;

public class Main {
    public static void main(String[] args) {
        FileReader reader = null;

        try {
            reader = new FileReader("example.txt");
            // Read from file
            System.out.println("Reading file...");

        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());

        } finally {
            // This ALWAYS executes
            System.out.println("Finally block: Cleaning up resources");
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    System.out.println("Error closing file");
                }
            }
        }

        System.out.println("Program continues...");
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-green-50 rounded-xl" id="throw-throws-section">
            <h3 class="text-2xl font-semibold mb-4 text-green-800"><i class="fas fa-hand-paper mr-2"></i>Throw and Throws</h3>
            <p class="mb-4 text-gray-700">Throw exceptions manually and declare that methods can throw exceptions:</p>

            <h4 class="text-lg font-semibold mb-2">Throwing Exceptions:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">public class Calculator {\\n    public static double divide(int a, int b) throws ArithmeticException {\\n        if (b == 0) {\\n            throw new ArithmeticException(\\"Cannot divide by zero\\");\\n        }\\n        return (double) a / b;\\n    }\\n    \\n    public static void validateAge(int age) {\\n        if (age < 0) {\\n            throw new IllegalArgumentException(\\"Age cannot be negative\\");\\n        }\\n        if (age > 150) {\\n            throw new IllegalArgumentException(\\"Age cannot be over 150\\");\\n        }\\n        System.out.println(\\"Age is valid\\");\\n    }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        try {\\n            Calculator.divide(10, 0);\\n        } catch (ArithmeticException e) {\\n            System.out.println(\\"Division error: \\" + e.getMessage());\\n        }\\n        \\n        try {\\n            Calculator.validateAge(-5);\\n        } catch (IllegalArgumentException e) {\\n            System.out.println(\\"Age validation error: \\" + e.getMessage());\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public class Calculator {
    public static double divide(int a, int b) throws ArithmeticException {
        if (b == 0) {
            throw new ArithmeticException("Cannot divide by zero");
        }
        return (double) a / b;
    }

    public static void validateAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
        if (age > 150) {
            throw new IllegalArgumentException("Age cannot be over 150");
        }
        System.out.println("Age is valid");
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            Calculator.divide(10, 0);
        } catch (ArithmeticException e) {
            System.out.println("Division error: " + e.getMessage());
        }

        try {
            Calculator.validateAge(-5);
        } catch (IllegalArgumentException e) {
            System.out.println("Age validation error: " + e.getMessage());
        }
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-purple-50 rounded-xl" id="custom-exceptions-section">
            <h3 class="text-2xl font-semibold mb-4 text-purple-800"><i class="fas fa-code mr-2"></i>Custom Exceptions</h3>
            <p class="mb-4 text-gray-700">Create your own exception classes for specific business logic:</p>

            <h4 class="text-lg font-semibold mb-2">Creating and Using Custom Exceptions:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">// Custom exception class\\npublic class InsufficientFundsException extends Exception {\\n    private double amount;\\n    \\n    public InsufficientFundsException(double amount) {\\n        super(\\"Insufficient funds. Required: $ \\" + amount);\\n        this.amount = amount;\\n    }\\n    \\n    public double getAmount() {\\n        return amount;\\n    }\\n}\\n\\n// Bank account class\\npublic class BankAccount {\\n    private double balance;\\n    \\n    public BankAccount(double initialBalance) {\\n        this.balance = initialBalance;\\n    }\\n    \\n    public void withdraw(double amount) throws InsufficientFundsException {\\n        if (amount > balance) {\\n            throw new InsufficientFundsException(amount);\\n        }\\n        balance -= amount;\\n        System.out.println(\\"Withdrew: $ \\" + amount);\\n    }\\n    \\n    public double getBalance() {\\n        return balance;\\n    }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        BankAccount account = new BankAccount(100.0);\\n        \\n        try {\\n            account.withdraw(150.0); // This will throw our custom exception\\n        } catch (InsufficientFundsException e) {\\n            System.out.println(\\"Error: \\" + e.getMessage());\\n            System.out.println(\\"Attempted to withdraw: $ \\" + e.getAmount());\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>// Custom exception class
public class InsufficientFundsException extends Exception {
    private double amount;

    public InsufficientFundsException(double amount) {
        super("Insufficient funds. Required: $" + amount);
        this.amount = amount;
    }

    public double getAmount() {
        return amount;
    }
}

// Bank account class
public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount);
        }
        balance -= amount;
        System.out.println("Withdrew: $" + amount);
    }

    public double getBalance() {
        return balance;
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(100.0);

        try {
            account.withdraw(150.0); // This will throw our custom exception
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("Attempted to withdraw: $" + e.getAmount());
        }
    }
}</code></pre>
            </div>
        </div>

        <div class="flex space-x-4 mb-4">
            <button class="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition duration-200 flex items-center" onclick="toggleExplanation('detailed-exceptions')">
                <i class="fas fa-info-circle mr-2"></i>Detailed Explanation
            </button>
            <button class="bg-lime-600 text-white px-6 py-3 rounded-lg hover:bg-lime-700 transition duration-200 flex items-center" onclick="toggleExplanation('beginner-exceptions')">
                <i class="fas fa-child mr-2"></i>Beginner Friendly
            </button>
        </div>
        <div id="detailed-exceptions" class="hidden mt-4 p-6 bg-amber-50 rounded-xl border-l-4 border-amber-500">
            <h3 class="text-xl font-semibold mb-3 text-amber-800">Technical Details</h3>
            <p class="mb-2"><strong>Exception Hierarchy:</strong> All exceptions extend Throwable. RuntimeException and its subclasses are unchecked.</p>
            <p class="mb-2"><strong>Try Block:</strong> Contains code that might throw exceptions. Should be as specific as possible.</p>
            <p class="mb-2"><strong>Catch Block:</strong> Handles specific exception types. Order matters - more specific exceptions first.</p>
            <p class="mb-2"><strong>Finally Block:</strong> Always executes. Used for cleanup operations like closing files or database connections.</p>
            <p class="mb-2"><strong>Throws Keyword:</strong> Declares that a method can throw checked exceptions. Caller must handle them.</p>
            <p><strong>Throw Keyword:</strong> Manually throws an exception. Can throw existing or custom exceptions.</p>
        </div>
        <div id="beginner-exceptions" class="hidden mt-4 p-6 bg-lime-50 rounded-xl border-l-4 border-lime-500">
            <h3 class="text-xl font-semibold mb-3 text-lime-800">Think of it like this...</h3>
            <p class="mb-3"><strong>Exceptions</strong> are like traffic accidents on your programming journey - unexpected problems that can crash your program if not handled.</p>
            <p class="mb-3"><strong>Try-Catch</strong> is like having a spare tire and tools in your car - you prepare for potential problems and know how to fix them.</p>
            <p class="mb-3"><strong>Finally</strong> is like always putting your seatbelt on - no matter what happens, this safety measure is always taken.</p>
            <p class="mb-3"><strong>Throwing exceptions</strong> is like calling for help when you can't fix something yourself - you pass the problem to someone else who can handle it.</p>
            <p class="mb-3"><strong>Custom exceptions</strong> are like creating specific warning signs for your neighborhood - instead of generic "danger," you have "slippery when wet" or "construction zone."</p>
            <p><strong>Checked vs Unchecked</strong> is like the difference between expected roadwork (checked - you plan for it) and sudden tire blowouts (unchecked - surprise problems).</p>
        </div>
    `
};

export { exceptionHandlingSection };