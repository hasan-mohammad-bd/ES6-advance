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
// const firstOperation = myCompany.CEO.profation.firstOperation;
// console.log(firstOperation);

// //shortcut
// const {firstOperation, secondOperation} = myCompany.CEO.profation;

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

const products = [
    {name: "water bottle", price: 50, color: "yellow"}, 
    {name: "mobile phone", price: 15000, color: "black"},
    {name: "smart watch", price: 3000, color: 39},
    {name: "water glass", price: 3, color: "white", color:"pink"}
]

// const productName = products.map(product => product.name);
// console.log(productName);
products.forEach(x => console.log(x.name));


class Company {
    name;
    address;
    designation = "Support Web Developer";
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, "start a support session");
    }
}


const amir = new Company("amir Khan", "indian company");
console.log(amir);

amir.startSession();


//practice
//with class we can create multiple object if necessary.
class Library {
    location = "bangladesh";
    size = "bigger";
    standard = "first Class";
    constructor(name, tableQuantity, chairQuantity,openingTime){
        this.name = name;
        this.tableQuantity = tableQuantity;
        this.chairQuantity = chairQuantity;
        this.openingTime = openingTime;
    
    }

    openingTimes(){
        console.log(this.name ,"open at:", this.openingTime);
    }
}

const haram = new Library("haram Library", 34, 100, "10:00 pm")
console.log(haram);

haram.openingTimes();
