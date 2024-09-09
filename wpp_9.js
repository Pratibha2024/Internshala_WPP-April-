// Ques-> Write a javascript program to find the closest value to 100 from two numerical values.

function closestValue_100(val1 , val2){

    if(val1 != val2){
        const x = Math.abs(val1 - 100);
        const y = Math.abs(val2 - 100);
    
    if(x < y){
        return val1;
    }
    else if(y < x) {
        return val2;
    }
    }
    else {
        return false;
    }
}
console.log(closestValue_100(90,60));