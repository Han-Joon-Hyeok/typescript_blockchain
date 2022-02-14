const name = "joon";
const age = 27;
const gender = "male"

const sayHi = (name, age, gender?) => {
    console.log(`Hi, ${name}. You are ${age} years old. And gender is ${gender}`)
}

sayHi(name, age);

export {};