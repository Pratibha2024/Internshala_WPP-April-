// Ques-> Write js program to create a string from given string.This is done by taking the last three char and adding
//        them at both the front and back.The string length must be 3 or more.

function lastThreeChar(strlength){
    if(strlength <= 3){
        console.log("string must be 3 character or more");
        return;
    }
    const lastchar = strlength.slice(-3);
    const newString = lastchar + strlength + lastchar;
    console.log("string is = ",newString);
}
lastThreeChar("xyabc");