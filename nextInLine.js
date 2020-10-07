function nextInLine(arr, item){
    arr.push(item);
    return(arr.shift());
}

var testarr = [1,2,3,4,5];

console.log("BEFORE: "+ JSON.stringify(testarr));
console.log(nextInLine(testarr, 6));
console.log("AFTER: "+ JSON.stringify(testarr));
