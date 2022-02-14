class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const joon = new Human("joon", 27, "male");

const sayHi = (person: Human): string => {
  return `Hi, ${person.name}. You are ${person.age} years old. And gender is ${person.gender}`;
};

console.log(sayHi(joon));

export {};
