var course = {
    name: 'Javascript',
    coin: 250
}

// if(course.coin > 0){
//     console.log(`${course.coin} COINS`);
// } else{
//     console.log('Free');
// }

var result = course.coin > 0 ? `${course.coin} COINS` : 'Free'
console.log(result)
