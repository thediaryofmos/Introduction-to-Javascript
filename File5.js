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