/*  for : condition true
    for/in : key
    for/of : value
    while : when condition true
    do/while : at least 1 time, then  when condition true
*/


function getTotal(order){
    let total = 0;
    for(const key in order ){
        total+=order[key].price;
    }
    return total;
}

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
// Expected results:
getTotal(orders) // Output: 8700000


//Loop: for/in
var myInf = {
    name: 'Dat Ng Trash',
    age: 20,
    address: 'Quang Binh province'
};

for(var key in myInf){
    console.log(key);
    console.log(myInf[key])
}

console.log(Object.keys(myInf))
console.log('Hello')

// for(var key of myInf){
//     console.log(key); 
// error
// }

for(var key of Object.keys(myInf)){
    console.log(key);
}//name, age, address

for(var value of Object.values(myInf)){
    console.log(value);
}

var languages = [
    'Physics',
    'Maths',
    'Literature',
    'English'
]

for(var key in languages){
    console.log(languages[key]);
}

var myString = "TranThiCamHoa"
console.log(myString[1])

for(var key in myString){
    
    // console.log(myString[0]) 
    // n T

    // console.log(key) 
    //number (0->12)

    console.log(myString[key])
    //text: ...
}

//LOOP: for/of
for(var key of myString){
    console.log(key)//text:.. === for in myString[key]
}