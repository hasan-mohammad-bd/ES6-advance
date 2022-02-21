//32-4 Array map to do one line loop magic


// old way
// function doubleOld(number){
//     return number * 2;
// } 

const numbers = [4,5,9,10];
const output2 = [];

const doubleIt = number => number * 2;

for(const number of numbers){
    const result = doubleIt(number)
    output2.push(result);
}




//map
//above work in shortcut;
//===========================================================
//1. loop through each element
//2. for each element call the provided function.
//3. result for each element will be stored in an array.

const output = numbers.map(doubleIt);
console.log(output2);
//or

const output3 = numbers.map(number => number * 2)
console.log(output3);

//or
const output4 = numbers.map(x => x * 2)
console.log(output4);

//or
const squares = numbers.map(x=> x * x);
console.log(squares);

