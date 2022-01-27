const word = "kin";
let wordArray = Array.from(word);
wordArray.fill("i",0,1);
wordArray.fill("n",1,2);
wordArray.fill("k",2,3);
let result = wordArray.join("");
console.log(`word:${word}`);
console.log(`new word:${result}`);
console.log("hence this word is an anagram!!!");
