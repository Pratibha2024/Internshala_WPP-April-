// Ques-> Write a javascript program to extract the first half of a even string.

function firstHalfStr(str){
    if (str.length % 2 !== 0){
        return "The string length is not even";
    }

    const midpoint = str.length / 2;
    return str.slice(0, midpoint);
}
const inputstr = "javascript";
console.log(firstHalfStr(inputstr));