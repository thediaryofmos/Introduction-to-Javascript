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