/* Method: forEach(), every(), some(), find(), filter(), map(), reduce()*/
var courses = [
    {
        id: 1,
        name: 'English',
        coin: 20
    },
    {
        id: 2,
        name: 'Javascript',
        coin: 30
    },
    {
        id: 3,
        name: 'PHP',
        coin: 10
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 50
    },
    {
        id: 5,
        name: 'TypeScript',
        coin: 0
    },
    {
        id: 6,
        name: 'ReactJS',
        coin: 20
    }
]

courses.forEach(function(course, index){
    console.log(index, course);
}); 

//call back 
var isFree = courses.every((course) => {
    return course.coin === 0;
});
console.log(isFree);

var course = courses.find((course) => {
    return course.name === 'PHP';
});
console.log(course);
//every: dung thi no tra ve gtri tiep theo
//some: 1 trong all: ngung su ktr khi kq dung

var course2 = courses.filter((course2) =>{
    return course2.name === 'ReactJS';
});
console.log(course2);


courses.map((course) => (
    course.coin += 10
));

console.log(courses);

var number = [20,30,10,50,0,10];

var totalCoin = number.reduce(function(total, number){
    return total + number;
})

console.log(totalCoin);

//Flat - "Lam phang mang tu Depth Arr"
var depthArray = [1,2, [3,4], 5, 6, [7,8,9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

//Lay ra cac khoa hoc dua vao 1 mang moi
var topics = [
    {
        topic: "Frontend",
        courses:[
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "JavaScript"
            }
        ]
    },
    {
        topic: "Backend",
        courses:[
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "Node.JS"
            }
        ]
    }
];

var newCourses = topics.reduce(function(courses, topic){
    return courses.concat(topic.courses)
}, []);

console.log(newCourses);

var htmls  = newCourses.map(function(course){
    return `
        <div>
            <h2> ${course.title} </h2>
            <p>ID: ${course.id} </p>
        </div>
    `;
})

console.log(htmls);

Array.prototype.reduce2 = function(callback,  result){
    let i = 0;
    if(arguments.length < 2){
        i = 1;
        result = this[0];

    }
    for(; i<this.length; i++){
        result = callback(result, this[i], i, this)
    }
    return result;
}

const numbers = [1,2,3,4,5];

const result = numbers.reduce((total, number) => {
    return total + number;
}, 10)

const result2 = numbers.reduce2((total, number, index, array) => {
    console.log(total, number, index, total);
    return total + number;
}, 10)

console.log(result2);

// console.log(result);

//include methos
var title = 'Res web design';


console.log(title.includes('web design'));//true
console.log(title.includes('web design', 7));//false


var courses = ['JavaScript', 'PHP', 'Dart'];

//3 + (-1) = vi tri so 2
console.log(courses.includes('JavaScript', -1));//false