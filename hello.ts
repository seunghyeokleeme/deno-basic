import Person, { sayHello } from "./person.ts";

const tester: Person = {
  firstName: "yoon",
  lastName: "Kim",
};

console.log(sayHello(tester));
