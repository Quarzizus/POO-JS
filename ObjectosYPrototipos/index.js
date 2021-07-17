// const jimena = {
//   name: "Jimena",
//   edad: 20,
//   cursosAprobados: ["curso basico de js", "curso de frontend developer"],
//   aprobar(curso) {
//     this.cursosAprobados.push(curso);
//   },
// };

function Student(name, edad, cursosAprobados) {
  this.name = name;
  this.edad = edad;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobar = function (curso) {
  this.cursosAprobados.push(curso);
};

const jimena = new Student("Jimena", 20, ["curso basico de js"]);

console.log(jimena);
