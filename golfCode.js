/*
Strokes    Return
1          "All-in-One"
<= par-2   "Eagle"
par-1      "Birdie"
par        "Par"
par+1      "Bogey"
par+2      "Double Bogey"
>=par+3    "Go-Home"
*/
names = ["All-in-One", "Eagle" ,"Birdie", "Par", "Bogey", "Double Bogey", "Go-Home"];
function golf(strokes, par){

    if (strokes == 1){
        return names[0];
    }
    else if (strokes <= par-2){
        return names[1];
    }
    else if (strokes == par-1){
        return names[2];
    }
    else if (strokes == par){
        return names[3];
    }
    else if (strokes == par+1){
        return names[4];
    }
    else if (strokes == par+2){
        return names[5];
    }
    else {
        return names[6];
    }
}

console.log(golf(8,10));