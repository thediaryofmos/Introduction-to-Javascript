//Building Objects
var ourDog = {
    "name" : "Duke",
    "legs" : 4,
    "tails": 1,
    "friends" : ["lizzie"],
    1 : "Osama",
    2 : "Shahzad"
};
var name = ourDog.name; //Dot Notation
var legs = ourDog.legs; //Dot Notation
var tails = ourDog["tails"]; //bracket notation
var friends = ourDog["friends"]
//Acessing object properties with Variables
var firstName = 1;
var name = ourDog[firstName]
console.log(name)