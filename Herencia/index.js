class Student {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
    this.courses = [];
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    newCourse.isFree
      ? console.error("Este curso no es gratis")
      : this.courses.push(newCourse);
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    newCourse.isLag
      ? this.courses.push(newCourse)
      : console.error("Este curso no está disponible");
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.courses.push(newCourse);
  }
}

// intancias

const Miguel = new FreeStudent({
  name: "Miguel Vásquez",
  age: 19,
});
const Jimena = new BasicStudent({
  name: "Jimena Vargas",
  age: 18,
});
const Juan = new ExpertStudent({
  name: "Juan Vásquez",
  age: 18,
});

class Course {
  constructor({ name, classes = [], isFree = false, isLag = false }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.isLag = isLag;
  }
}
// Estancias
const cursoBasico = new Course({
  name: "programacion basica",
  isFree: true,
});
const java = new Course({
  name: "java basico",
});
const ingles = new Course({
  name: "Ingles conversacional",
  isLag: true,
});
