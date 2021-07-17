class LearningPath {
  constructor({ name, courses }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de desarrollo web",
  courses: ["programación basica", "javascript avanzado"],
});
const escuelaData = new LearningPath({
  name: "Escuela de data sciense",
  courses: ["ciencia de datos", "python basico"],
});
const escuelaDiseño = new LearningPath({
  name: "Escuela de diseño",
  courses: ["fundamentos diseño", "teoria del color"],
});

class Student {
  constructor({
    name,
    username,
    email,
    twitter = undefined,
    LearningPaths = [],
  }) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.twitter = twitter;
    this.LearningPaths = LearningPaths;
  }
}

class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}
