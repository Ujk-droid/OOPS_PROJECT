import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    console.log("Welcome");
    const ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        }
    ]);
    if (ans.select === "staff") {
        console.log("You approach the staff room. Please feel free to ask any questions.");
    }
    else if (ans.select === "student") {
        const ansStudent = await inquirer.prompt([
            {
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with."
            }
        ]);
        let student = persons.students.find(val => val.name === ansStudent.student);
        if (!student) {
            student = new Student(ansStudent.student);
            persons.addStudent(student);
            console.log(`Hello, I am ${student.name}. Nice to meet you!`);
            console.log("New student list:");
            console.log(persons.students);
        }
        else {
            console.log(`Hello, I am ${student.name}. Nice to see you again!`);
            console.log("Existing student list:");
            console.log(persons.students);
        }
    }
    else if (ans.select === "exit") {
        console.log("Exiting the program...");
    }
};
programStart(persons);
