// OOP Basics Section Plugin
const oopBasicsSection = {
    id: 'oop-basics',
    title: 'Object-Oriented Programming Basics',
    icon: 'fas fa-cube',
    color: 'rose',
    subsections: [
        { id: 'classes-objects', title: 'Classes and Objects', anchor: 'oop-basics' },
        { id: 'constructors', title: 'Constructors', anchor: 'constructors-section' },
        { id: 'encapsulation', title: 'Encapsulation', anchor: 'encapsulation-section' },
        { id: 'inheritance', title: 'Inheritance', anchor: 'inheritance-section' },
        { id: 'polymorphism', title: 'Polymorphism', anchor: 'polymorphism-section' },
        { id: 'detailed-explanation', title: 'Detailed Explanation', anchor: 'detailed-oop' },
        { id: 'beginner-explanation', title: 'Beginner Friendly', anchor: 'beginner-oop' }
    ],
    content: `
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects rather than functions and logic. Objects are like real-world entities that have properties (data) and behaviors (methods).</p>

        <div class="mb-8 p-6 bg-rose-50 rounded-xl" id="classes-objects-section">
            <h3 class="text-2xl font-semibold mb-4 text-rose-800"><i class="fas fa-cubes mr-2"></i>Classes and Objects</h3>
            <p class="mb-4 text-gray-700">A class is a blueprint/template, and an object is an instance of that class:</p>

            <h4 class="text-lg font-semibold mb-2">Defining a Class and Creating Objects:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">// Class definition (blueprint)\\npublic class Car {\\n    // Properties (fields)\\n    String color;\\n    String model;\\n    int year;\\n    \\n    // Behavior (method)\\n    void drive() {\\n        System.out.println(\\"The \\" + color + \\" \\" + model + \\" is driving.\\");\\n    }\\n}\\n\\n// Creating objects (instances)\\npublic class Main {\\n    public static void main(String[] args) {\\n        // Create first car object\\n        Car myCar = new Car();\\n        myCar.color = \\"Red\\";\\n        myCar.model = \\"Toyota Camry\\";\\n        myCar.year = 2020;\\n        \\n        // Create second car object\\n        Car yourCar = new Car();\\n        yourCar.color = \\"Blue\\";\\n        yourCar.model = \\"Honda Civic\\";\\n        yourCar.year = 2019;\\n        \\n        // Use objects\\n        myCar.drive();   // \\"The Red Toyota Camry is driving.\\"\\n        yourCar.drive(); // \\"The Blue Honda Civic is driving.\\"\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>// Class definition (blueprint)
public class Car {
    // Properties (fields)
    String color;
    String model;
    int year;

    // Behavior (method)
    void drive() {
        System.out.println("The " + color + " " + model + " is driving.");
    }
}

// Creating objects (instances)
public class Main {
    public static void main(String[] args) {
        // Create first car object
        Car myCar = new Car();
        myCar.color = "Red";
        myCar.model = "Toyota Camry";
        myCar.year = 2020;

        // Create second car object
        Car yourCar = new Car();
        yourCar.color = "Blue";
        yourCar.model = "Honda Civic";
        yourCar.year = 2019;

        // Use objects
        myCar.drive();   // "The Red Toyota Camry is driving."
        yourCar.drive(); // "The Blue Honda Civic is driving."
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-pink-50 rounded-xl" id="constructors-section">
            <h3 class="text-2xl font-semibold mb-4 text-pink-800"><i class="fas fa-wrench mr-2"></i>Constructors</h3>
            <p class="mb-4 text-gray-700">Constructors are special methods that initialize objects when they're created:</p>

            <h4 class="text-lg font-semibold mb-2">Default and Parameterized Constructors:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">public class Student {\\n    String name;\\n    int age;\\n    String major;\\n    \\n    // Default constructor\\n    public Student() {\\n        this.name = \\"Unknown\\";\\n        this.age = 18;\\n        this.major = \\"Undeclared\\";\\n    }\\n    \\n    // Parameterized constructor\\n    public Student(String name, int age, String major) {\\n        this.name = name;\\n        this.age = age;\\n        this.major = major;\\n    }\\n    \\n    void displayInfo() {\\n        System.out.println(name + \\" is \\" + age + \\" years old, majoring in \\" + major);\\n    }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // Using default constructor\\n        Student student1 = new Student();\\n        student1.displayInfo(); // \\"Unknown is 18 years old, majoring in Undeclared\\"\\n        \\n        // Using parameterized constructor\\n        Student student2 = new Student(\\"Alice\\", 20, \\"Computer Science\\");\\n        student2.displayInfo(); // \\"Alice is 20 years old, majoring in Computer Science\\"\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public class Student {
    String name;
    int age;
    String major;

    // Default constructor
    public Student() {
        this.name = "Unknown";
        this.age = 18;
        this.major = "Undeclared";
    }

    // Parameterized constructor
    public Student(String name, int age, String major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }

    void displayInfo() {
        System.out.println(name + " is " + age + " years old, majoring in " + major);
    }
}

public class Main {
    public static void main(String[] args) {
        // Using default constructor
        Student student1 = new Student();
        student1.displayInfo(); // "Unknown is 18 years old, majoring in Undeclared"

        // Using parameterized constructor
        Student student2 = new Student("Alice", 20, "Computer Science");
        student2.displayInfo(); // "Alice is 20 years old, majoring in Computer Science"
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-purple-50 rounded-xl" id="encapsulation-section">
            <h3 class="text-2xl font-semibold mb-4 text-purple-800"><i class="fas fa-shield-alt mr-2"></i>Encapsulation</h3>
            <p class="mb-4 text-gray-700">Encapsulation hides internal details and protects data using access modifiers:</p>

            <h4 class="text-lg font-semibold mb-2">Access Modifiers and Getters/Setters:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">public class BankAccount {\\n    // Private fields (encapsulated)\\n    private String accountNumber;\\n    private double balance;\\n    \\n    // Constructor\\n    public BankAccount(String accountNumber, double initialBalance) {\\n        this.accountNumber = accountNumber;\\n        this.balance = initialBalance;\\n    }\\n    \\n    // Public getter methods\\n    public String getAccountNumber() {\\n        return accountNumber;\\n    }\\n    \\n    public double getBalance() {\\n        return balance;\\n    }\\n    \\n    // Public setter method with validation\\n    public void deposit(double amount) {\\n        if (amount > 0) {\\n            balance += amount;\\n            System.out.println(\\"Deposited: $ \\" + amount);\\n        }\\n    }\\n    \\n    public void withdraw(double amount) {\\n        if (amount > 0 && amount <= balance) {\\n            balance -= amount;\\n            System.out.println(\\"Withdrew: $ \\" + amount);\\n        } else {\\n            System.out.println(\\"Invalid withdrawal amount\\");\\n        }\\n    }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        BankAccount account = new BankAccount(\\"12345\\", 1000.0);\\n        \\n        System.out.println(\\"Account: \\" + account.getAccountNumber());\\n        System.out.println(\\"Balance: $ \\" + account.getBalance());\\n        \\n        account.deposit(500);\\n        account.withdraw(200);\\n        \\n        System.out.println(\\"Final Balance: $ \\" + account.getBalance());\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>public class BankAccount {
    // Private fields (encapsulated)
    private String accountNumber;
    private double balance;

    // Constructor
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    // Public getter methods
    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    // Public setter method with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew: $" + amount);
        } else {
            System.out.println("Invalid withdrawal amount");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("12345", 1000.0);

        System.out.println("Account: " + account.getAccountNumber());
        System.out.println("Balance: $" + account.getBalance());

        account.deposit(500);
        account.withdraw(200);

        System.out.println("Final Balance: $" + account.getBalance());
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-indigo-50 rounded-xl" id="inheritance-section">
            <h3 class="text-2xl font-semibold mb-4 text-indigo-800"><i class="fas fa-sitemap mr-2"></i>Inheritance</h3>
            <p class="mb-4 text-gray-700">Inheritance allows a class to inherit properties and methods from another class:</p>

            <h4 class="text-lg font-semibold mb-2">Parent and Child Classes:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">// Parent class (superclass)\\npublic class Animal {\\n    protected String name;\\n    \\n    public Animal(String name) {\\n        this.name = name;\\n    }\\n    \\n    public void eat() {\\n        System.out.println(name + \\" is eating.\\");\\n    }\\n    \\n    public void sleep() {\\n        System.out.println(name + \\" is sleeping.\\");\\n    }\\n}\\n\\n// Child class (subclass) - inherits from Animal\\npublic class Dog extends Animal {\\n    private String breed;\\n    \\n    public Dog(String name, String breed) {\\n        super(name); // Call parent constructor\\n        this.breed = breed;\\n    }\\n    \\n    // Override parent method\\n    @Override\\n    public void eat() {\\n        System.out.println(name + \\" is eating dog food.\\");\\n    }\\n    \\n    // New method specific to Dog\\n    public void bark() {\\n        System.out.println(name + \\" says woof!\\");\\n    }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        Dog myDog = new Dog(\\"Buddy\\", \\"Golden Retriever\\");\\n        \\n        myDog.eat();   // Inherited and overridden\\n        myDog.sleep(); // Inherited\\n        myDog.bark();  // Dog-specific\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>// Parent class (superclass)
public class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }

    public void sleep() {
        System.out.println(name + " is sleeping.");
    }
}

// Child class (subclass) - inherits from Animal
public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }

    // Override parent method
    @Override
    public void eat() {
        System.out.println(name + " is eating dog food.");
    }

    // New method specific to Dog
    public void bark() {
        System.out.println(name + " says woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy", "Golden Retriever");

        myDog.eat();   // Inherited and overridden
        myDog.sleep(); // Inherited
        myDog.bark();  // Dog-specific
    }
}</code></pre>
            </div>
        </div>

        <div class="mb-8 p-6 bg-green-50 rounded-xl" id="polymorphism-section">
            <h3 class="text-2xl font-semibold mb-4 text-green-800"><i class="fas fa-magic mr-2"></i>Polymorphism</h3>
            <p class="mb-4 text-gray-700">Polymorphism allows objects to be treated as their parent type while behaving according to their actual type:</p>

            <h4 class="text-lg font-semibold mb-2">Method Overriding and Polymorphism:</h4>
            <div class="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto relative group">
                <button class="copy-btn absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-code">// Parent class\\npublic class Shape {\\n    public void draw() {\\n        System.out.println(\\"Drawing a shape\\");\\n    }\\n}\\n\\n// Child classes\\npublic class Circle extends Shape {\\n    @Override\\n    public void draw() {\\n        System.out.println(\\"Drawing a circle\\");\\n    }\\n}\\n\\npublic class Rectangle extends Shape {\\n    @Override\\n    public void draw() {\\n        System.out.println(\\"Drawing a rectangle\\");\\n    }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        // Polymorphism: Shape references can hold different types\\n        Shape shape1 = new Circle();\\n        Shape shape2 = new Rectangle();\\n        Shape shape3 = new Shape();\\n        \\n        // Same method call, different behavior\\n        shape1.draw(); // \\"Drawing a circle\\"\\n        shape2.draw(); // \\"Drawing a rectangle\\"\\n        shape3.draw(); // \\"Drawing a shape\\"\\n        \\n        // Array of shapes (polymorphism)\\n        Shape[] shapes = {new Circle(), new Rectangle(), new Shape()};\\n        for (Shape shape : shapes) {\\n            shape.draw();\\n        }\\n    }\\n}"><i class="fas fa-copy"></i> Copy</button>
                <pre class="language-java"><code>// Parent class
public class Shape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

// Child classes
public class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

public class Rectangle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle");
    }
}

public class Main {
    public static void main(String[] args) {
        // Polymorphism: Shape references can hold different types
        Shape shape1 = new Circle();
        Shape shape2 = new Rectangle();
        Shape shape3 = new Shape();

        // Same method call, different behavior
        shape1.draw(); // "Drawing a circle"
        shape2.draw(); // "Drawing a rectangle"
        shape3.draw(); // "Drawing a shape"

        // Array of shapes (polymorphism)
        Shape[] shapes = {new Circle(), new Rectangle(), new Shape()};
        for (Shape shape : shapes) {
            shape.draw();
        }
    }
}</code></pre>
            </div>
        </div>

        <div class="flex space-x-4 mb-4">
            <button class="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition duration-200 flex items-center" onclick="toggleExplanation('detailed-oop')">
                <i class="fas fa-info-circle mr-2"></i>Detailed Explanation
            </button>
            <button class="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-200 flex items-center" onclick="toggleExplanation('beginner-oop')">
                <i class="fas fa-child mr-2"></i>Beginner Friendly
            </button>
        </div>
        <div id="detailed-oop" class="hidden mt-4 p-6 bg-rose-50 rounded-xl border-l-4 border-rose-500">
            <h3 class="text-xl font-semibold mb-3 text-rose-800">Technical Details</h3>
            <p class="mb-2"><strong>Classes:</strong> Blueprints defining properties (fields) and behaviors (methods). Use PascalCase naming.</p>
            <p class="mb-2"><strong>Objects:</strong> Instances created using 'new' keyword. Each object has its own state.</p>
            <p class="mb-2"><strong>Constructors:</strong> Special methods for object initialization. Same name as class, no return type.</p>
            <p class="mb-2"><strong>Encapsulation:</strong> Data hiding using private fields and public getters/setters.</p>
            <p class="mb-2"><strong>Inheritance:</strong> 'extends' keyword creates parent-child relationship. Child inherits parent's members.</p>
            <p><strong>Polymorphism:</strong> "Many forms" - same method name, different implementations. Achieved through method overriding.</p>
        </div>
        <div id="beginner-oop" class="hidden mt-4 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
            <h3 class="text-xl font-semibold mb-3 text-orange-800">Think of it like this...</h3>
            <p class="mb-3"><strong>Classes and Objects</strong> are like cookie cutters and cookies. The cutter (class) is the blueprint, cookies (objects) are what you actually eat.</p>
            <p class="mb-3"><strong>Constructors</strong> are like the setup instructions when you buy a new toy - they prepare everything so you can start playing immediately.</p>
            <p class="mb-3"><strong>Encapsulation</strong> is like a gift box - you can't see what's inside (private data), but you can use the ribbon (public methods) to access it.</p>
            <p class="mb-3"><strong>Inheritance</strong> is like family traits - children inherit characteristics from parents but can also have their own unique features.</p>
            <p class="mb-3"><strong>Polymorphism</strong> is like different animals making different sounds when you say "speak" - cats meow, dogs bark, but you can treat them all as "pets".</p>
            <p><strong>Method overriding</strong> is like customizing a family recipe - you inherit grandma's cake recipe but add your own special ingredients.</p>
        </div>
    `
};

export { oopBasicsSection };