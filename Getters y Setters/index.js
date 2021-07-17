class Course {
  constructor({ name, classes = [] }) {
    // _variable -> convención para privado
    this._name = name;
    this.classes = classes;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    newName.length <= 4
      ? console.error("Atención, está siendo hackeado")
      : (this._name = newName);
  }
}

const cursito = new Course({
  name: "Avanzado de react",
  classes: [1, 2, 3, 4, 5, 6, 7],
});
