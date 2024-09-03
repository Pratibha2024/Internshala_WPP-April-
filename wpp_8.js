// Ques-> Write a program to check whether a string starts with "JAVA" return True if it does not then return False.

function startWithJava(str){
    if(str.length < 4){
        console.log("string not valid");
        return;
    }
    const start = str.substring(0,4);
    if(start =='Java'){
        return true;
    }
    else{
        return false;
    }
}
console.log(startWithJava("Javascript"));