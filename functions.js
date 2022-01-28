//pushing the values into the array using a for-loop
const numbers =[];
for(let i=1 ;i <= 100; i++){
    numbers.push(i);
}//filter function
function filter (numbers,test){
    const testedArray=[];
    numbers.forEach(value =>{
        if (test(value)){
            testedArray.push(value);     }
        
    })
  return testedArray; 
}
//implementing the test
function test(value){
    return (value % 5 == 0);
}
//adding the final values
function add(){
    
    const sum = filter(numbers, test).reduce ((accumulator,value)=>{
        
        return accumulator + value;
    })
    return sum;
}
//calling the add function
const final = add();
console.log(final);