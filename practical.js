// Task 1: Program to print welcome message for the "Student Record System"
console.log("Welcome to the Student Record System");

// Task 2: Declare and Update Variables 
let system_name = "Student Record Management";
let total_students = 150;
console.log("System Name:", system_name);
console.log("Total Students:", total_students);

// Task 3: Identify Datatypes
let student_age = 21;            
let student_name = "krupa";      
let is_enrolled = true;         

console.log("Type of student_age:", typeof student_age);
console.log("Type of student_name:", typeof student_name);
console.log("Type of is_enrolled:", typeof is_enrolled);

// Task 4: Perform a Calculation 
let marks1 = 85;
let marks2 = 90;
let marks3 = 78;
let avgMarks = (marks1 + marks2 + marks3) / 3;
console.log("Average Marks of 3 students:", avgMarks);

// Task 5: Classify a Record
let marks = 45;
if (marks >= 50) {
    console.log("Student passed.");
} else {
    console.log("Student failed.");
}

// Task 6: Iterate Over Records
let students = [
    { name: "Sarah", marks: 85, id: 101, grade: "A", active: true },
    { name: "Anosh", marks: 42, id: 102, grade: "E", active: true },
    { name: "Shreya", marks: 95, id: 103, grade: "O", active: false },
    { name: "Shanaya", marks: 65, id: 104, grade: "B", active: true }
];

console.log("Printing All Students:");
for (let i = 0; i < students.length; i++) {
    console.log(`Name: ${students[i].name}, Marks: ${students[i].marks}`);
}

// Task 7: Skip or Stop Early
console.log("Filtering Marks:");
for (let i = 0; i < students.length; i++) {
    if (students[i].marks < 50) {
        continue; 
    }
    console.log(`${students[i].name} passed with ${students[i].marks}`);
}

// Task 8: Add & Find
students.push({ name: "Evan", marks: 88, id: 105, grade: "A", active: true });

let highestStudent = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].marks > highestStudent.marks) {
        highestStudent = students[i];
    }
}
console.log("Student with the highest marks:", highestStudent.name, "with", highestStudent.marks);

// Task 9: Remove & Sort
let removedStudent = students.pop(); 
console.log("Removed Student:", removedStudent.name);

students.sort((a, b) => a.marks - b.marks);
console.log("Sorted Students by Marks:", students);

// Task 10: Create and Print an Object
let Student = {
    name: "Steeva",
    age: 21,
    course: "Computer Science",
    gpa: 3.8,
    graduated: false
};

console.log("Printing Object Properties Individually:");
console.log("Name:", Student.name);
console.log("Age:", Student.age);
console.log("Course:", Student.course);
console.log("GPA:", Student.gpa);
console.log("Graduated:", Student.graduated);

