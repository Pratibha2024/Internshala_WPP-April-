// Ques-> Write a javascript program to compute the sum of three element of given array of integers of length 3.

function sum_three(arr){
    if (arr.length !== 3){
        console.log("Array must contain three elements");
    }
    const sum = arr[0] + arr[1] + arr[2];
    return sum;
}
const num = [10, 20, 30];
const result = sum_three(num);
console.log("sum of array element is :",result);