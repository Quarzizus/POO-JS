const miguel = {
  name: "Miguel",
  edad: 19,
  approveCourses: ["curso 1"],
  addCourse(newCourse) {
    this.approveCourses.push(newCourse);
  },
};

console.log(Object.keys(miguel));
console.log(Object.getOwnPropertyNames(miguel));
console.log(Object.entries(miguel));

console.log(
  Object.defineProperty(miguel, "sexy", {
    value: "más que sexy",
    enumerable: true, // enumerar (excepción con GOPN)
    writable: true, // editar
    configurable: true, // borrar
  })
);

console.log(Object.getOwnPropertyDescriptors(miguel));

Object.freeze(miguel); // ni editar ni eliminar
Object.seal(miguel); // ni eliminar
