// Ques-> Write a js program to produce a new string that has a first 3 characters in lower case from a given string.
//        If the string length is less than 3 convert all the characters to uppercase.

function transformString(input){
    if(input.length < 3){
        return input.toUpperCase();
    }
    else {
        let firstThree = input.substring(0,3).toLowerCase();
        let restString = input.substring(3);
        let totalString = firstThree + restString;
        return totalString;
    }
}
console.log(transformString("HELLO"));
