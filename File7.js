//Creating Strings using Template Literals
const person = {
    name : "Lufi Dono",
    age: 26
};
//Multi-line Tempelate Literals
const gretings = `Hello, My name is ${person.name}!
I am ${person.age} years old.`;
//console.log(gretings);


//Write concise Object Literals using Simple Fields
const createperson = (name, age, gender) => ({name, age, gender});
//console.log(createperson("Roronoa Zoro", 32, "M"))


//Write Concise Declarative Function
const bicycle = {
    gears:2,
    setgear(newGear){
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setgear(3);
//console.log(bicycle.gear);


//Use Class Object to Define a Constructr Function
class SpaceShuttle { 
 constructor (targetplanet){
    this.targetplanet = targetplanet;
 }
}
var Zeus = new SpaceShuttle("Jupiter");
console.log(Zeus.targetplanet)


