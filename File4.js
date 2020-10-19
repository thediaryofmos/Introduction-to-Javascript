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
//UPDATING Object Properties
ourDog.name = "Happy Duke";
//console.log(ourDog);

//Adding Object Properties
ourDog.bark = "Bow-wow";
ourDog[3] = "NUST";

//Delete Properties from Object
delete ourDog[3];


//Using Objects for look ups
function lookup(val){
    var result = " ";
    var lookup = {
        "alpha" : "Adams",
        "Bravo" : "Boston",
        "Charlie" : "Chicago",
        "Delta" : "Denvir",
    };
    result = lookup[val]
    return result;
}
//console.log(lookup("Bravo"))

//Testing Object for Properties
function checkObj(checkProp){
    if (ourDog.hasOwnProperty(checkProp)){
        return ourDog[checkProp];
    }
    else{
        return "Not Found";
    }
}
//console.log(checkObj("name"));

//Manipulating Complex Objects
myMusic = [
    {
        "artist" : "Atif Aslam",
        "title" : "Doorie",
        "release year" : 2007,
        "formats" : ["CD", "DVD", "LP"],
        "gold" : true

    },
]
//console.log(myMusic);


//Acessing Nested Objects
myLife = {
    "song" : {
        "artist" : "Atif Aslam",
        "title" : "Doorie",
        "release year" : 2007,
        "formats" : ["CD", "DVD", "LP"],
        "gold" : true,
        "myData": {
            "name" : "Osama Shahzad",
            "University" : "NUST",
        },

    },
}
//console.log(myLife.song.myData.name);


//Acessing Nested Array
myLife = [
    {
        "artist" : "Atif Aslam",
        "title" : "Doorie",
        "release year" : 2007,
        "formats" : ["CD", "DVD", "LP"],
        "gold" : true,
        "myData": {
            "name" : "Osama Shahzad",
            "University" : "NUST",
        },

    },
]
console.log(myLife[0].myData.University);
