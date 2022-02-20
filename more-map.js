//find out the length of the array
const friend = ["Tom Hanks", "Tom Cri", "Tom Brady"];

const fLengths = friend.map(friend => friend.length);
console.log(fLengths);

//mor example
const products = [
    {name: "water bottle", price: 50, color: "yellow"}, 
    {name: "mobile phone", price: 15000, color: "black"},
    {name: "smart watch", price: 3000, color: 39},
    {name: "water glass", price: 3, color: "white", color:"pink"}
]

const productNames = products.map(product => product.name);
console.log(productNames);

const productPrices = products.map(product => product.price);
console.log(productPrices);

//to console.log all product of an object
products.map(product => console.log(product));

//forEach 
//================================
//forEach just do the job as map. but dont put it's value in a new array.
products.forEach(product => console.log(product));



