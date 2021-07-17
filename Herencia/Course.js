class Course {
  constructor({ name, classes = [], isFree = false, isLag = false }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.isLag = isLag;
  }
}

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
