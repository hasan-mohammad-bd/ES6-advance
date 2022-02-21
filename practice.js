//destracting object.

const phone = { 
    brand:"samsung",
    price:3000,
    color: "black",
    made: "china"
}


const {brand, price , color, made} = phone;

console.log(price);
console.log(brand);

const myCompany = {
    CEO : {
        PersonName: "Hasan Mohammad",
        profation: {
            firstOperation:"leading",
            secondOperation:"monitoring",
            thirdOperation:"editing"
    },
        hight: "5.9",
        wight: 90},
    Manager: "Mohammad",
    employee: "Rohoman" 
}

//not a shortcut
const firstOperation = myCompany.CEO.profation.firstOperation;
console.log(firstOperation);

//shortcut
const {firstOperation, secondOperation} = myCompany.CEO.profation;

//array destructuring 
const arrayArBap = ["hello", "hi", "how are you", "whats up"]
//no need to write exact variable //must be write const before stating the expression.
const [he, hi] = [12, 45];
console.log(he, hi);

//
//Map
const array2 = [12,23,45,45,32,65,9,7];
const array = ["hasan","is","good","or" ,"boy"]

// const mautilpley = array.map(x => x * 2);
// console.log(mautilpley);

//map
// const array2 = []
// for(const theLength of array){
//     array2.push(theLength.length);
    
// }
// console.log(array2);
// const lengthe = array.map(x => x.length);
// console.log(lengthe);

const theLength = array.map(x => x.length);
console.log(theLength);

const theBigNumber = array.filter(x => x.length > 4)
console.log(theBigNumber);

const theFind = array.find(x => x.length*2 == 4)
console.log(theFind);