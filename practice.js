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


