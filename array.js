var language = [
    'JavaScript', 
    'PHP',
    'Ruby',
    'Dart'
];
//danh tu dong va bat dau tu 0 
console.log(language)

var languages = new Array( 'JavaScript', 
                            'PHP',
                            'Ruby',
                            'Dart');
console.log(Array.isArray(languages))//true

console.log(Array.isArray({}))//false

console.log(Array.isArray([]))//true

console.log(languages[2])//Ruby

// JavaScrip Array Method
var languages = [
    'JavaScript', 
    'PHP',
    'Ruby',
]

console.log(languages.toString(''))//JavaScript,PHP,Ruby
console.log(languages.join(''))//JavaScriptPHPRuby

console.log(languages.pop())//Ruby
//pop xoa phan tu cuoi mang

console.log(languages)
//khi ko con phan tu de xoa => undefined

console.log(languages.push('Dart')) // 3
//push cuoi mang
console.log(languages)

//shift: xoa phan tu dau mang
//unshift 
//splicing
languages.splice(1, 1)//xoa php
languages.splice(1, 2)//xoa php va dart
console.log(languages)

languages.splice(1, 0, 'Dart2')
//(1,0,'Dart2') truyen start 0: xoa bao nhieu, 'Dart2' truyen vao = thay the

console.log('Result:' + languages)

//concat: dao nguoc
//slicing
console.log(languages.slice(-2,-1))
