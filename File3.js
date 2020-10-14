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
//console.log(testGreater(10, "11"));

//AND Operator
function testGreater(val, b){
    if (val >= b && val <50){
        return "Greater than B but less than 50";
    }
    return "Condition Failed";
}
//console.log(testGreater(50, "5"));

//OR Operator
function testGreater(val){
    if (val >= 100 || val <50){
        return "Condition fulfilled";
    }
    return "Condition Failed";
}
//console.log(testGreater(100));

//Else Statement and elseif statement
function testGreater(val){
    if (val >= 100 || val <50){
        return "Condition fulfilled";
    }
    
    else if (val == 60) {
        return "Safe Number pressed";
    }

    else {
        return "Condition Failed";
    }
}
//console.log(testGreater(60));


//return boolean from function
function isLess(a, b){
/*
    if (a>b){
        return false;
    }
    else{
        return true;
    }
    */
   return a<b;
}
//console.log(isLess(15,20))


//RETURN EARLY PATTERN FROM FUNCTION
function abTest(a, b){
    if (a < 0 || b<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}
console.log(abTest(1,1))