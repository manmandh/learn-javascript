var fullName = new String('Hoa \'Trash\'')

console.log(fullName.length)

var firstName = 'Marry'
var lastName = 'Ryan'

console.log(`My name is ${firstName} ${lastName}`)

var myString = 'Hoc JS tai JS JS JS JSTrash'
console.log(myString.indexOf('tai'))
// console.log(myString.lastIndexOf('tai', 7))
// console.log(myString.search('tai', 7))
console.log(myString.slice(4,6))
console.log(myString.replace('JS', 'JavaScript'))//ghi de phan tu dau tien
console.log(myString.replace(/JS/g, 'JavaScript'))
//trim-xoa space
//toUppercase, toLowercase, split method
//search ko ho tro `7`, chi lay index dau tien