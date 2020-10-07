var ourArray = ["Osama", 25, "NUST"]; //defining array
var nested_array = [["Osama", 25, "NUST"], ["Wajahat", 27, "Bahria"]] //Nested Array
var data = nested_array[1]; //Accessing Array Data
//console.log(data);
nested_array[1][1] = 26; //Modifying Array Data
//console.log("Wajahat's age is: " + nested_array[1][1]);  //Printing Specific element from Nsted Array
var my_array = [[1, 2, 3], [6, 78, 96], [67, 69, 71] , 12, 15];
//console.log(my_array[2][2]); //Accessing Multi Dimensional Arrays


var ourArray = ["Osama", 25, "NUST"];
ourArray.push("Wajahat", 26, "Bahria");  //Pushing in an Array adds an element at the end of the array
ourArray.unshift("Masters");  //Unshift in an Array adds an element at the beginning of the array
//console.log(ourArray);
var a = ourArray.pop(); //remove last lement from the array and store it in a
var a = ourArray.shift(); //remove first lement from the array and store it in a
//console.log(a)

//Shooping List
var myList = [["Cereal",1], ["Crisps", 5], ["ChilliSauce", 1], ["filteredWater", 1] ];

//Reusable code with Functions and Passing Data to function
function my_func(a ,b){
console.log("Sum Is: ", a+b);
}
//my_func(2,4);
//my_func(5,8);

//Global Scope and Local scope
var global = 10; //Global variable that can be calld in any function
function my_func1(){
    var a1 = 5;  //Local Variable that can't be accessed outside this function
    a2 = 115; //Without var kyword, this variable is Global
    console.log("Sum Is: ", a1+global);
    var sum = a1+global;
    return sum //returning the sum
    }
var a = my_func1(); //sum is returned to a
//console.log(a1); Accessing Local Variable outside the function will give error.
//Possible to give same name to local and global variable, In th function, localvariable will be preffered.

//UNDEFINED VALUES RETURNED
function my_function(sum){
    console.log("Sum Is: ", sum+3);
    }
console.log(my_function(5)) //It will show undefined because the function is not returning anything


