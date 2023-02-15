// arrays are special variable which can have one value is used like this []
// const cars =  [
//    "camery", "benx"," matic", 7
// ]

// second method
// const car = []
// car[0] = "banz";
// car[1] = "banz";
// car[2] = "banz";

// access a value to array we have to have an index number ,..
// 0 is element or the first element in array
// accessing an array
// console.log(cars[1]);
// the .dot length is always add one more of the actual index
// car[0] = " camery";
// car[1] = " volvo";
// car[2] = "hummer";
// accessing the arrays
// car[4] = "jet"
// console.log(cars.length);
// return the last element of an array
// console.log(cars.length -1)
// to know if a variable is an array we use the (array.isarray(x));


const fruits = ["mangoes", "orange", "berry", "apple", "utara"]

// method that convert array to a string
// let convertToString = fruits.toString();
// console.log(convertToString)


// using push to add to an element of an array
fruits.push("banana");
// remove an element frm the array 
// fruits.pop()
// unshift add a new element to the array at the begining
// merginig two arrays
const names = ["emeka", "john", "ifeanyi"];
const mergeArray = fruits.concat(names);
console.log(mergeArray);

let fruition = fruits.length
for (let i = 0; i < fruition; i++) {
  console.log(fruits[i]);

}
// using the splice method defined the position where the new elements suppose to be added the first value is the value where it will start counting from  the second is the initial value the picking the text you want to 



// sorting the elements randomly
const newArray = [12, 30, 56, 867, 790];
// console.log(newArray);
// newArray.s
// ort(function (a, b) {
//   return a - b;
// })
//  newArray.sort(function(){
//    return 0.5 - Math.random();
//  })
// console.log(newArray)

// finding the highest value in a set of number 
// function arrayMax(arr){
//   return Math.max.apply(null,arr);

// }
// console.log(Math.max.apply(null,newArray))

// second method
// const newArray = [12, 30, 56, 867, 790];
function findMax(arr){
  let len = arr.length;
  let max = Infinity;
  while (len--){
    if(arr[len] < max){
      max = arr[len];
    }
  }
  return max
}
console.log(findMax(newArray))
//  maximum
function findMax(arr){
  let len = arr.length;
  let max = 0;
  while (len--){
    if(arr[len] > max){
      max = arr[len];
    }
  }
  return max
}
console.log(findMax(newArray))


// arrays iteration using forloop
// finding the index of an Array
const arr = [40,302,45,387,23,87];
const arr1 = [
  { names: "okore", age: 26, height: "127cm"}
    
 
];
arr1,forEach((user) => {
  console.log(`my name is ${(user.names)} and i am ${age} years old`)
})
// structure we have ...
// arr1,forEach(({names, age}) => {
//   console.log(`my name is ${names} and i am ${age} years old`)

//  the row each loop help to a set of an elements
arr.forEach((data, index)  =>  {
  console.log(data, index);
});
