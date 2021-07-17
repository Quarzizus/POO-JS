class Student {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
    this.courses = [];
  }
  aprobar(course) {
    this.courses.push(course);
  }
}

const miguel = new Student({ age: 20, name: "Miguel" });
console.log(miguel);
