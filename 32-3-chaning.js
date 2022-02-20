//32-3 (advanced) Array Destructuring, nested object Optional chaining


// declare variable based on the name of an object property.
//name the variable according to property name
const myObject = {x:2, y:3, z:4};
const {x,b} = myObject;
console.log(b);

//error handling
//==========================================================
//if we confront the error:
//con not read property "q" of undefined.
//the question mark define, it finds out the property which in not in the array or object. the unlisted property value come up with the value "undefined".
console.log("myObject.p", myObject?.p?.q);

//destructuring array
//==========================================================
//the first two variable will take first two value of the array. other variable will not be taken.
//this the way you can access the value more quickly.
const [p, q]= [45, 47, 91,66];

//more example
const [best, faltu] = ["momotaj", "porohi"];
console.log(best, faltu);

//similarly for object. but previously we made it more shortcut 
const {sky, color,money} = {sky: "blue", slil: "matti", color:"red", money:599};
console.log(sky);

//chaining 
const company = {
    name: "GP", 
    ceo:{id:1 , name:"ajmol", food:"fuchka"} ,
    web:{ 
        work: "website development", 
        employee: 22, 
        framework: "react",
        tech: {
            first:"html", 
            second: "css", 
            third:"js"}
        }
}

console.log(company.web.tech.second);

//when the code find out the "?" mark which is not included in the object, output will come up with undefined, to check the unknown properly the "?" is used.
console.log(company?.web?.notech?.second)