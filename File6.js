//Arrow Functions
var magic = () => newDate(); //This Arrow function returns newDate to magic


//Arrow Function with Parameters
var myConcat = (arr1, arr2 = [5, 6]) => arr1.concat(arr2);
//console.log(myConcat([1,2,3], [4,7,9]));


//Write Higher Order Arrow Functions
const realNo = [4, 5.6, -9.8, 3.14, 42, -0.6, 78]
const squareList = (arr) =>{
    const squarIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squarIntegers;
}
const squarIntegers = squareList(realNo);
//console.log(squarIntegers);


//Rest Operator with Function
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a+b , 0);
    };
}) ();
//console.log(sum(1,2,3,4,5))


//Spread Operator
const arr1 = ["Jan", "Feb", "Mar", "April", "May"];
let arr2;
(function(){
    arr2 = [...arr1]; //Spread Operator copies array1 to array 2 rather than only giving adress of array 1 to array 2
    arr1[0] = "potato"
}) ();
//console.log(arr2)  //Answer without Sprad Operator [ 'potato', 'Feb', 'Mar', 'April', 'May' ]


//Destruction Assignment to Assign Variabls from Objects
var voxel = {x:3.1, y:7.4 , z: 6.54};
var x = voxel.x; // x =3.1 
var y = voxel.y; // y =7.4 
var z = voxel.z; // z =6.54 
const {x:a, y:b, z:c} = voxel // a = 3.1, b=7.4, c = 6.54   => Destructuring will make copying easier
//Example 2
const Avg_Temperature = {
    today: 50,
    tomorrow:70
};
function calc_temp(avgtemp){
    const {tomorrow : tomorrow_temp} = avgtemp;   //Destructuring Happening here
    return tomorrow_temp;
}
//console.log(calc_temp(Avg_Temperature));


//Destructuring Assignment with Nested Objects
const Local_Forcast = {
    today:{min : 22, max : 38},
    tomorrow: {min : 19, max : 27}
};
function getMaxOfTomorrow(tomorrow){
    const {tomorrow:{max : maxoftomorrow}} = tomorrow ;
    return maxoftomorrow;
}
//console.log(getMaxOfTomorrow(Local_Forcast));


//Destructuring Assignment to assign variabls from Arrays
let [z1,x1, , y1] = [1,2,3,4,5,6];
//console.log(z1,x1,y1);
[z1, x1] = [x1, z1];  //Destructuring to swap values
//console.log(z1, x1);


//Destructuring Assignment with Rest Operator
const source = [1,2,3,4,5,6,7,8,9];
function removeFirstTwo(list){
    const[ , , ...arr] = list;
    return arr;
}
//console.log(removeFirstTwo(source));


//Destructuring Assignment to pass object as function's Parameter
const stats = {
    max: 54,
    std:4.56,
    mean:5.9,
    min: 2.7
};
const half = (function(){
    return function half({max , min}){     //Here we are using destructuring and only passing max and min value from stats
        return (max+min)/2.0;
    };
})();
//console.log(half(stats));