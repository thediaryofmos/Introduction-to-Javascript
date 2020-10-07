// inline comment
/* 
Multi line Comment
*/
//console.log("Hello World")

//Declare Variables
var number = 5;
var myName = "Beau"
myName = 8
let ourName =  "OSMESPY"
const pi = 3.14


//Store Values with Assignmnt Operator
var a;
var b = 2;
a = 7;
//console.log(b)
b = a;
//console.log(a)


//Uninitialized variables
var c = "I am a "
c = c + "String"
//console.log(c)


//Case Sensitivity
var axe = 5;
AXE = 10;
//console.log(axe)
//console.log(AXE)


//MATHS in JS
var sum = 10+10;
sum += 5; //Augmented Addition
//console.log(sum)
var difference = 30 - 15;
difference -= 5; //Augmented Subtraction
//console.log(difference)
var product = 8 * 10;
var product1 = 8.5 * 10.7;
product *= 0.5; //Augmented Multiplication
//console.log("The Product Is: " + product1)
var division = 88/10;
division /= 2;
//console.log(division)
sum+= 1;
sum++;
//console.log(sum)
difference--
//console.log(difference)
var remainder = 11 % 2;
//console.log("The remainder Is: ",remainder)

//Declaring String Variables
var myName = "OSMSPY";
var name = "I am a \" very good \"in my field\" \" researcher"; //Escaping Literal Quotes
var name = 'I am a "very good" researcher'; //Quoting Strings with Single Quotes

/*
Escap Sequences
\" Double quote
\' Single Quote
\\ Backslash
\n New line
\t Tab
\r Carriage Return
\b Backspace
\f Form Feed
*/

var capseq = "First Line\n\t\\Second Line\nThird Line";
//console.log(capseq)

var my_name = "My Name is "+ "Muhammad Osama Shahzad"; //Concatinating String with + 
var name = "My Name Is ";
name+= "Muhammad Osama Shahzad";  //Concatinating String with +=
//console.log(my_name)
name = "Muhammad Osama Shahzad";
var my_name = "Hello, my name is: "+ name; //Concatinating String with Variable
f_name = "Muhammad Osama";
l_name = "Shahzad"
full_name = "My full name is: "+f_name + " "+ l_name; //Appending Variabls to Strings
//console.log(full_name)
name_length = full_name.length; //Finding Length of String
var first_letter = l_name[0];   //First ltter of String
var last_letter = l_name[l_name.length-1];  //Last Letter of String

//Strings are immutabl so individual characters of strings can't be changed
// l_name[0] = "A" will give error

