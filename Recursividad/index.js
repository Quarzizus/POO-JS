// const recursivo = () => {
//   if (/*Validacion*/ true) {
//     // llamados recursivos
//   } else {
//     // llamados normales
//   }
// };

const numeritos = [1, 4, 6, 6, 9, 7, 5, 3, 6, 5, 7];
let numerito = 0;
for (let i = 0; i < numeritos.length; i++) {
  numerito = numeritos[i];
  console.log(i, numerito);
}

function listarNumeros(lista, index) {
  if (index < lista.length) {
    console.log(lista[index]);
    listarNumeros(lista, index + 1);
  } else {
    console.log("finish");
  }
}

listarNumeros(numeritos, 0);
