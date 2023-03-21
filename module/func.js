const {odd , even} =require ('./var.js');
//! var 파일에있는 odd 와 even 받아오기

function checkOddOrEven(num) {
  if (num % 2 ){
    return checkOddOrEven;
  }
  return even;
}
//! 모듈 내보내기
module.exports = checkOddOrEven;