//  use the javascript programm to sort the following numbers[-3, 8, 7,6,5,-4,3,2]
const numbers = [-3, 8, 7,6,5,-4,3,2];
// numbers.sort(function (a,b){return b-a});
let highest = numbers[numbers.length-1];
console.log(numbers)

numbers.sort();
// console.log(numbers);

// ascending order
function compareFunction(a, b){
    return a-b;
}

function compareFunction(a, b){
return b-a
}


console.log(numbers)








// 4..// to filter out the specific values 
// const numbers = [3,-4, -9, 6, 9,-10];

// to get the negative values
// const neg = numbers.filter(function(number){
//     return number <1  ;
// }
// )
// console.log(neg);

// const neg = numbers.filter(function(number){
//     return number > 1;
// })
// console.log(neg);


// 3..javascript programm that return a past sorting
// let order = ("webmaster");

// function alpha_order(str){
//     return str.split("").sort().join(",")
// }console.log(alpha_order("webmaster"));


 
// 2..a javascript that sum a product an
const products = [
 {items : "milo",
    price : 3000},

    {items : "sugar",
    price : 600},
    {items : "cooking wine",
    price : 7000},
    {items : "cornflour",
    price : 4500},
   
]
   
let total = 0;

products.forEach(stock =>{
    total = total + stock.price
});
console.log(total);

// const totalprice = products.reduce((total, stock) => {
//     return total + stock.price
// },0);

// console.log(totalprice);









