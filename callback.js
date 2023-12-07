//La ham
//Duoc truyen qua doi so
//Dc goi lai(trong ham nhan doi so)

function myFunction(param){
    if(typeof param === 'function'){
        param('Learn coding');
    }
}

function myCallback(value){
    console.log('Tui la Man co value', value);
}

myFunction(myCallback);

Array.prototype.map2 = function(callback){
   // console.log(this); 1.
    var output = [];
    var arrayLength = this.length;
    for(var i = 0; i < arrayLength; i++){
        var result = callback(this[i], i );
        output.push(result);
    }
    return output;
}


var courses = ['Javascript', 'php', 'ruby'];

var html = courses.map2(function(course){
    //console.log(index, course);
    return `<h2> ${course} </h2>`;
});

console.log(html.join(''));

// console.log(courses);
// 1. [mang chua courses]
var htmls = courses.map(function(course){
    // console.log(course);
    return `<h2> ${course} </h2>`;
});

console.log(htmls.join(' '));

/* Method: forEach(), every(), some(), find(), filter(), map(), reduce()*/

// var courses = [
//     'Hoa',
//     'Dat ngu vl',
//     'hello'
// ]

var courses = new Array(10, 12);
//sout ra 10 12
//dung push => sout ra javascript vs php

courses.push('Javascript', 'PHP');

courses.length = 10;
// for(var i = 0; i< courses; i++){
//     console.log(courses[i]);
// }

// console.log(courses);

for(var index in courses){
    console.log(courses[index]);
}

console.log("VE FOR REACH");
//FORREACH
Array.prototype.testMethod1 = 1;
Array.prototype.forEach2 = function(callback){
    for(var index in this){
        // var value = this.hasOwnProperty(index);
        // console.log('Index', index, value);
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}
//this=> duyet ko chi qua mang, qua luon prototype
//De ko lap qua prototype => this.hasOwnProperty(index);
var courses2 = [
    'JavaScript',
    'PHP',
    'Ruby'
];

// courses2.length = 30;
// var output = courses2.forEach(function(course, index, array){
//     console.log(course, index, array);
// })
// console.log(output); //undefined

var output = courses2.forEach2(function(course, index, array){
    console.log(course, index, array);
})

//Tsao 1 cai Array goi dc nhieu .join, concat => courses2 la arr, Array khoi tao constructor => dc ke thua lai
console.log("FILTER");
//Filter
Array.prototype.filter2 = function(callback){
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(result){
                output.push(this[index]);
            }
        }   
    }
    return output;
}
var courses3 = [
    {
        name: 'JavaScript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
]

// var filterCourse = courses3.filter(function(course, index, array){
//     //console.log(course);
//     return course.coin  > 700;
// });//array khac: value type and reference type
// console.log(filterCourse);

var filterCourse = courses3.filter2(function(course, index, array){
    //console.log(course, index, array);
    return course.coin  > 700;
});//array khac: value type and reference type
console.log(filterCourse);

console.log("SOME");
//SOME: true or false
Array.prototype.some2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return true;
            }
        }
    }
    return false;
};
var courses4 = [
    {
        name: 'JavaScript',
        coin: 680,
        isFinished: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinished: true,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinished: true,
    }
]


// var result = courses4.some(function(course, index, array){
//     return course.isFinished === true;
// })


var result = courses4.some2(function(course, index, array){
    return course.isFinished;
})

console.log(result);

console.log("EVERY");
//every: all element thoa man dk: true or false, neu la false, ngung vong lap tai thoi diem do
// var result2 = courses4.every(function(course, index, array){
//     return course.isFinished;
// })
// console.log(result2);
Array.prototype.every2 = function(callback){
    var output = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(!result){
                output = false;
                break;
            }
        }
    }
    return output;
}

var result = courses4.every2(function(course, index, array){
    // return course.isFinished;
    return course.coin > 680;
})

console.log(result);