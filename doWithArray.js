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
