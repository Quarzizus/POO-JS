const required = (param) => {
  throw new Error(param + " is required");
};

const createStudent = ({
  name = required("name"),
  edad,
  email = required("email"),
  socialMedia,
}) => {
  return {
    name: name,
    edad: edad || null,
    socialMedia: {
      twitter: socialMedia.twitter,
      facebook: socialMedia.facebook,
      instagram: socialMedia.instagram,
    },
    email: email,
  };
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
