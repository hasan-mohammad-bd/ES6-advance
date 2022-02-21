//32-1 Module Introduction and Basic ES6 Recap

//let and const
//const can't be changed.
const hubby = "omor sani";
//let cant be changed.
let phone = "iphone 15";
phone = "samsung galaxy s25"

//default parameter //spread operator
function maxNumber(array=[]){
    const max = Math.max(...array);
    return max;
}

const biggest = maxNumber([23,45]);
console.log(biggest);

//template string
//back tick instead of quotation
const myNotes = `I am mojnu. ${hubby} I dont have a laili.`
console.log(myNotes);

//arrow function
const square = x => x * x;
console.log(square(8));


