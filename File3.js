//If-else statement
function bool(isItTrue){
    if (isItTrue){
        return "Its True", true;
    }
    return "Its False", false; //Boolean Function
}
//console.log(bool(false));

//Equality Operator "=="
function testEqual(val, b){
    if (val == b){
        return "Equal";
    }
    return "Not Equal";
}
//console.log(testEqual(10, "10"));
/*  Strict Equality/In-Equality Operator
3 === 3    True   3 == 3    True
3 === "3"  False  3 == "3" True
3 !== "3"  True   3 != "3" False
*/

//In-Equality Operator "=="
function testEqual(val, b){
    if (val != b){
        return "Not Equal";
    }
    return "Equal";
}
//console.log(testEqual(10, "10"));

//>, < and >=,<= Operators
function testGreater(val, b){
    if (val >= b){
        if (val == b){
            return "Equal"
        }
        return "Greater";
    }
    return "Less";
}
console.log(testGreater(10, "11"));