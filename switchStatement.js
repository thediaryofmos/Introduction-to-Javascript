function caseInSwitch(val){
var answer = " "
switch (val) {
    case 1:
        answer = "alpha";
        break;
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
    case 4:
        answer = "delta";
        break;
    default:   //default case
        answer = "Try again";
        break;
}
return answer; 
}

//console.log(caseInSwitch (8));

//Identical Options in SWITCH Statement
function identicalInSwitch(val){
    var answer = " "
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
        default:   //default case
            answer = "Try again";
            break;
    }
    return answer; 
    }
    