const obj = {
  a: "a",
  b: "b",
  c: {
    e: "e",
    d: "d",
  },
};

const obj2 = {};

for (prop in obj) {
  obj2[prop] = obj[prop];
}
// solo funciona en un nivel de deep
console.log(obj, obj2);

const obj3 = Object.assign({}, obj);
const obj4 = Object.create(obj); // crea una instancia
console.log(obj3);

// omiten métodos
