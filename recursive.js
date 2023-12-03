var arr = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(new Set([1,2,3,1,2,3]))

console.log(new Set(arr))
console.log([...new Set(arr)]);

// function recursive(number){
//     number--;
//     if(number<=0){
//         //Stop
//         return;
//     }
//     recursive();
// }
// recursive(10);    

function countDown(number){
    if(number > 0){
        console.log(number)
        return countDown(number - 1);
    }
    return number;
}

countDown(10);

function loop(start, end, cb){
    if(start <= end){
        cb(start);
        return loop(start + 1, end, cb)
    }
}

var arr = ['Javascript', 'PHP', 'Ruby'];

loop(0, arr.length - 1, function(index){
    console.log('Index: ', index);
    console.log(arr[index]);
})

//giai thua
function giaiThua(n){
    if(n>0){
        return n * giaiThua(n-1);
    }
    return 1;
};
function loop(start, end, cb){
    if(start <= end){
        cb(start);
        return loop(start + 1, end, cb)
    }
}


console.log('Giai thua la: '+ giaiThua(6));



