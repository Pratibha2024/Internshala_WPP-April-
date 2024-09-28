// Ques-> Write a javascript program to count the number of vowels in a given string.

function countVowel(str){
    const vowels =  /[aeiou]/gi;    // 'g' for global search, 'i' for case insensitive
    const matches = str.match(vowels);

    return matches ? matches.length : 0;

}
console.log(countVowel("hellO"));

