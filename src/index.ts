const name = "joon";
const age = 27;
const gender = "female";

const sayHi = (name: string, age: number, gender: string): void => {
  console.log(`Hi, ${name}. You are ${age} years old. And gender is ${gender}`);
};

sayHi(name, age, gender);

export {};
