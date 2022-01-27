let string = prompt('Enter any word');
 
 function reverseString(x){
    let newArray = Array.from(x);
    let reverseArray = newArray.reverse();
    let reversedWord = reverseArray.join("");
    console.log(reversedWord);
    
    
}
reverseString(string);
