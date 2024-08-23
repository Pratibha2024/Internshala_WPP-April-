// Ques -> Write a js program to remove a char at the specified position in the given string and
//         return the modified string.

function removeChar(str, position) {
    if(position < 0 || position >= str.length) {
        console.log("Position out of bound");
        return str;
    }
    return str.slice(0, position) + str.slice(position + 1);
}
const result = removeChar("Pratibha" ,2);
console.log("result: ",result);

