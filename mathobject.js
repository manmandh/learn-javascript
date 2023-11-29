/* PI, round, abs, ceil, floor, random, min, max */

console.log(Math.PI)

console.log(Math.abs(1,49)) //1

var random = Math.floor(Math.random() * 5)

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',  
    '50 coin'
];

console.log(bonus[random])

if(random < 5){
    console.log('Cuong hoa thanh cong')
}