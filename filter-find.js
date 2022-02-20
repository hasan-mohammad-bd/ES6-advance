//filter: filter out the specific value according to the condition. 
const numbers = [12,14,12,34,5,99,55,2,19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
console.log(bigNumbers);
console.log(smallNumbers);

//more example
const products = [
    {name: "water bottle", price: 50, color: "yellow"}, 
    {name: "mobile phone", price: 15000, color: "black"},
    {name: "smart watch", price: 3000, color: 39},
    {name: "water glass", price: 3, color: "white", color:"pink"}
]

const expensive = products.filter(product => product.price > 100);
console.log(expensive);

const blacks = products.filter(product => product.color == "black")
console.log(blacks);

//map vs filter 
//===========================================================
//map: map will extract all items in the array . 
//filter: filter will filter out only which maintain the condition. filter gives an array


//find
//================================
//find only give the item on return a array. 
//find only give first element and skip rest of the other element.
//===========================================================
const blackItem = products.find(product => product.color == "black");
console.log(blackItem);

//map vs filter vs find
//===========================================================
//map: gives a full array extracting all element of an array.

//filter: gives a array maintaining the condition. if the condition is not match , the filter will give empty array.

//find: gives first element maintaining the condition. if the condition dont match with the element, the answer will be undefined.
