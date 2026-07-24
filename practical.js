// Task 1: Program to print welcome message for the "Student Record System"
console.log("Welcome to the Student Record System");

// Task 2: Declare and Update Variables 
let systemName = "Student Record Management";
let totalStudents = 150;
console.log("System Name:", systemName);
console.log("Total Students:", totalStudents);

// Task 3: Identify Datatypes
let studentAge = 20;            
let studentName = "Alice";      
let isEnrolled = true;         

console.log("Type of studentAge:", typeof studentAge);
console.log("Type of studentName:", typeof studentName);
console.log("Type of isEnrolled:", typeof isEnrolled);

// Task 4: Perform a Calculation 
let marks1 = 85;
let marks2 = 90;
let marks3 = 78;
let averageMarks = (marks1 + marks2 + marks3) / 3;
console.log("Average Marks of 3 students:", averageMarks);

// Task 5: Classify a Record
let marks = 45;
if (marks >= 50) {
    console.log("Student passed.");
} else {
    console.log("Student failed.");
}

// Task 6: Iterate Over Records
let students = [
    { name: "Alice", marks: 85, id: 101, grade: "A", active: true },
    { name: "Bob", marks: 42, id: 102, grade: "E", active: true },
    { name: "Charlie", marks: 95, id: 103, grade: "O", active: false },
    { name: "Diana", marks: 65, id: 104, grade: "B", active: true }
];

console.log("--- Printing All Students ---");
for (let i = 0; i < students.length; i++) {
    console.log(`Name: ${students[i].name}, Marks: ${students[i].marks}`);
}

// Task 7: Skip or Stop Early
console.log("--- Filtering Marks (Using break/continue) ---");
for (let i = 0; i < students.length; i++) {
    // Skip students who have marks below 50
    if (students[i].marks < 50) {
        continue; 
    }
    console.log(`${students[i].name} passed with ${students[i].marks}`);
}

// Task 8: Add & Find
// Add a new student using push()
students.push({ name: "Ethan", marks: 88, id: 105, grade: "A", active: true });

// Find the student with the highest marks
let highestStudent = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].marks > highestStudent.marks) {
        highestStudent = students[i];
    }
}
console.log("Student with the highest marks:", highestStudent.name, "with", highestStudent.marks);

// Task 9: Remove & Sort
// Remove an entry from the array using pop()
let removedStudent = students.pop(); 
console.log("Removed Student:", removedStudent.name);

// Sort students by marks in ascending order
students.sort((a, b) => a.marks - b.marks);
console.log("Sorted Students by Marks:", students);

// Task 10: Create and Print an Object
let singleStudent = {
    name: "Fiona",
    age: 21,
    course: "Computer Science",
    gpa: 3.8,
    graduated: false
};

console.log("--- Printing Object Properties Individually ---");
console.log("Name:", singleStudent.name);
console.log("Age:", singleStudent.age);
console.log("Course:", singleStudent.course);
console.log("GPA:", singleStudent.gpa);
console.log("Graduated:", singleStudent.graduated);

