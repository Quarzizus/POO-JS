const juanita = {
  age: 15,
  email: "juanita@correo.com",
};

const miguel = juanita;
miguel.age = 19;

// cuando copiamos un objecto
// estamos en realidad apuntando a su
// mismo espacio en memorio y no creando
// una copia de este
