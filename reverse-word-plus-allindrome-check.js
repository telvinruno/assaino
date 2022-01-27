 //prompting user to input word.
 let string = prompt('Enter any word');
 //simple function to reverse the input string
 function reverseString(x){
    let newArray = Array.from(x);
    let reverseArray = newArray.reverse();
    let reversedWord = reverseArray.join("");
    console.log(`The reverse is: ${reversedWord}`);
    
    
}

//pallindrome check
let reverse = reverseString(string);
let isPallindrome = string.localeCompare(reverse);
console.log(isPallindrome);

if(isPallindrome == 1){
    
    console.log(`The word ${string} is a pallindrome`);
}else{
    console.log(`${string} is not a pallindrome`);
}
