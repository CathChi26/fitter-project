// object is a blue print of a class, ie properties must be included in it ,.
// example,object is defined with const, var etc...it can hace multiple values 
const person = {
    height : "123cm",
    color : "black",
  weight : "64",
   age : "24",
   firstname:"emeka",
   lastname: "james",
   fullname:function getFullname(){
    return this.firstname + " " + this.lastname
   }
}
// accessing properties of an object
// 1. objectname.propertyname
// console.log = (person.age);
// 2 objectname[propertyname
// console.log = (person['age']);
// object methods having a function inside AN OBJECT...
// the word this is used in the object.

console.log(person.fullname());