const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

console.log(
  "First name: " +
    person.firstName +
    ", lastname: " +
    person.lastName +
    ", age: " +
    person.age +
    ", eyecolor: " +
    person.eyeColor
);
console.log("access age: ", person["age"]);
console.log("access first name: ", person["firstName"]);
console.log("access last name: ", person["lastName"]);
console.log("access eye color", person["eyeColor"]);
