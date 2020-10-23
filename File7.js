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
//console.log(Zeus.targetplanet)


//Getters and Setters

function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 *(temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatdTemp){
            this._temp = updatdTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

