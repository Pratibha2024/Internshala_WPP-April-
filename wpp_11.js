// Ques-> Write a javascript program to check whether three given numbers are increasing in strict or in soft mode.
//        Note: Strict mode -> 10,15,31 : Soft mode -> 24,22,31 or 22,22,31

function increasingMode (x, y, z){
    if(x < y && y < z){
        return "Strict mode";
    }
    else if(x <= y && y <= z){
        return "Soft mode";
    }
    else{
        return "Neither mode";
    }
}
console.log(increasingMode(10 ,15, 30));
