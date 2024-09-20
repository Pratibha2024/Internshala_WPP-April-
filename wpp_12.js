// Ques-> Write a javascript program to reverse a given string.

function reverseString(str){
    return str.split('').reverse().join('');
}
const inputstring = "Hello User";
const reversedString = reverseString(inputstring);
console.log(reversedString);