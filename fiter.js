// fiter 
// check age
// const arr = [34,45,67,96,12,45,16]

// function checkAge(age){
//     return age >= 18;

// }
// function canVote (){
//     var filtered = arr.filter(checkAge);
//     console.log(filtered);
// }
// canVote();


// arr.forEach((element, index
//      ) => {
//         console.log(element,Index)
//      });

// function checkAge(age){
//     return age <= 18;

// }
// function canVote (){
//     var filtered = arr.filter(checkAge);
//     console.log(filtered);
// }
// canVote();


// reduce method
// it runs a function on each array element to reduce it or produce a single value(ie function is run individually ..and it works from the left to the right)
// the total is the first value , while the amount is the second value

const prices = [123.03, 55.3, 200.90, 240.30];
const sum = prices.reduce((total, amount) => total + amount);
console.log("the sum is",sum);

// how to double the array element using th 
// getting the average using the reduced function
// the index is refering how many times the function is being executed on the  array
const average = prices.reduce((total,amount,index,array) =>{
total = total + amount;
if (index === array.length -1 ){
    return total / array.length;
} 
 else{
    return total;
}

})
console.log("the average is",average)

// the push method
const doubleElement = prices.reduce((total, amount) =>
{
    total.push(amount * 2);
    return total;
},[]);

