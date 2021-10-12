const obj = {
  a: "a",
  b: "b",
  c: {
    e: "e",
    d: "d",
  },
};

const obj2 = JSON.stringify(obj); // obj -> string
console.log(obj2);

const obj3 = JSON.parse(obj2); // string -> obj
console.log(obj3);
