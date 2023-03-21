const {odd , even} =require ('./var.js');
const checkNumber = require ('./func.js');

function checkStringOddOrEven(str){
  if (str.lenght %2) {
    //홀수이면 
    return odd;
  }
  return even;
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
console.log(checkNumber(11));
console.log(checkNumber(12));
