interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "joon",
  age: 27,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hi, ${person.name}. You are ${person.age} years old. And gender is ${person.gender}`;
};

console.log(sayHi(person));

export {};
