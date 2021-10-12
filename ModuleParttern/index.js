const required = (param) => {
  throw new Error(param + " is required");
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
    changeName(newName) {
      private._name = newName;
    },
    readName() {
      return private._name;
    },
  };

  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });
  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });

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
