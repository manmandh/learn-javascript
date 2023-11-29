//avoid way to create NEW key
var age = 19
var PI = 3.14
var otherNumber = new Number(9)

console.log(typeof otherNumber)//object

var result = 20/'ABC'
console.log(result)//represent type number not valid NaN
console.log(result === NaN)//false
console.log(isNaN(result))//true
console.log(typeof age.toString())//18-string den- xanh number
console.log(PI.toFixed(1))//1 so thap phan

function isNumber(value){
    return typeof value === 'number' && !isNaN(value)
}//de dam bao NaN k phai 1 so, vi phat sinh gay ra loi thanh true

console.log(isNumber(NaN))

