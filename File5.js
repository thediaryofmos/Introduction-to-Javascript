//WHILE Loop
var myArray = []
var i = 0;
while (i<5){
    myArray.push(i);
    i++;
    //console.log(myArray);
}

//For loop
var ourArray = [];
//for(var i =10; i>0; i-=2) Decrementing even
for (var i = 0; i<11; i+=2){
    ourArray.push(i);
}

//Iterat through an array length using for loop
var a = [9,10,11,12];
var b = 0;
for (var i = 0; i<a.length; i++){
    b += a[i];   
}

//NESTED For Loop
function multiply(arr){
    var product = 1;
    for(var i = 0; i < arr.length; i++){
        for(var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }

    }

    return product;
}
answer = multiply([[1,2], [1,4,8], [1,5,9,7]]);
//console.log(answer);


//do while Loop (First runs then check the condition at th end)
var myArray = []
var i = 0;
do {
    myArray.push(i);
    i++;
    //console.log(myArray);
} while (i<5)


//Generate Random
function random(){
    return Math.random();
}
//console.log(random());
var RandomBetween0and19 = Math.floor(Math.random() * 20); //Random Whole Numbers 

//Random Whole Numbers Between a specific range
function random(max, min){
    return Math.floor(Math.random() * (max - min)) + min;
}
//console.log(random(50, 15));

//Parseint Function converts str to integer
function parsey(str){
    return parseInt(str);
}
//console.log(parsey("500"));


//parseInt converting binary string to integer
function parsey(str){
    return parseInt(str, 2);
}
//console.log(parsey("001001101001"));

//Ternary Oprator
//condition ? statment-if-True: statement-if-false
function chkEqual(a,b){
    return(a==b)? true : false;
}
//chkEqual(5, 5);

//Multiple Conditions Ternary Operator
function chkSign(num){
    return num > 0 ? "positive": num < 0 ? "negative": "zero";
}
//console.log(chkSign(0))


//
//Difference btween let and var keyword
//
var cat = "Meow";
var cat = "Purr"
//var can be declared twice
let cat1 = 1;
//let cat1 = 2; //declaring with let twice will give an error
cat1 = 4; //This will not give an error, onl re-declaring will
"use strict"; //It will catch common coding mistakes
//var is declard globally or in whole function if declared inside a function
//while
// lt is only limitd to th block-scope (i.e if let is initialized inside an if-statement,
// that variable value will only exist in if-statement)
const SENTENCE = 3.14; //can't reassign a const, immutabl


//MUTATE an array declared with const
const S =[2,3,4] 
//S = [3,5,7] //will give an error
S[0]= 3; S[1] = 5; S[2]=7;  //Assigning like that will not give an error

//Prevent Data Mutation
