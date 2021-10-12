const required = (param) => {
  throw new Error(param + " is required");
};

const createLearningPath = ({ name = required("name"), courses = [] }) => {
  const private = {
    _name: name,
    _courses: courses,
  };
  const public = {
    get courses() {
      return private._courses;
    },
  };
  return public;
};

const createStudent = ({
  name = required("name"),
  edad,
  email = required("email"),
  socialMedia,
}) => {
  const private = {
    _name: name,
  };
  const public = {
    edad: edad || null,
    socialMedia: {
      twitter: socialMedia.twitter,
      facebook: socialMedia.facebook,
      instagram: socialMedia.instagram,
    },
    email: email,
    get name() {
      return this.name;
    },
    set name(newName) {
      !newName.length
        ? console.error("El nombre debe ser mayor a un caracter")
        : (this.name = newName);
    },
  };

  return public;
};

const juan = createStudent({
  name: "Miguel",
  edad: 20,
  socialMedia: {
    twitter: "quarzizus",
    instagram: "quarzizus44",
    facebook: "quarzizus",
  },
  email: "angel@",
});

console.log(juan);
