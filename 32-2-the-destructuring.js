//32-2 Destructuring Object to extract values to variables


const fish = {id: 58, name: "King Hilsha",price: 9000, phone: "01444444444", address: "chadpur", dress: "silver"};

// to avoid to call the fish many times.
// const phone = fish.phone;

// const address = fish.address;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

//shortcut 
//this is called destructuring object. 
const {phone, price, dress, id} = fish;

console.log(phone, dress);

//object within object, to access this below way can be applied.
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
//not shortcut
// const work = company.web.work;
// const framework = company.web.framework;

//shortcut or de
const{work, framework} = company.web;
const {food} = company.ceo;
const{second,third} =company.web.tech

console.log(work, framework, food, second, third);
