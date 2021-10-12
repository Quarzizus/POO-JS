const obj = {
  a: "a",
  b: "b",
  c: {
    e: "e",
    d: "d",
  },
};

const isObj = (subject) => {
  return typeof subject == "object";
};
const isArray = (subject) => {
  return Array.isArray(subject);
};

const deepCopy = (subject) => {
  let copySubject;
  const subjectIsObject = isObj(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return copySubject;
  }
  for (key in subject) {
    const keyIsObject = isObj(subject[key]);
    if (keyIsObject) {
      copySubject[key] = deepCopy(key);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject;
};

deepCopy(obj);
