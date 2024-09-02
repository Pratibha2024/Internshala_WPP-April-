// Ques -> Write js program to check whether a positive number is multiple of 3 or 7.

function multiple(x) {
    if(x <= 0){
        console.log("please enter positive number");
        return;
    }
    if( x % 3 === 0 || x % 7 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(multiple(28));
