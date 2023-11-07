//object
var emailKey = 'email'
var myInfo = {
    name: 'Marry',
    age: 19,
    address: 'Da Nang',
    mykey: '123',
    [emailKey] : 'tui@gmail.com',
    getNameO: function(){
        return this.name//this = myInfor
    }
};
//myInfo.email = 'man@gmail.com'
myInfo['my-email'] = 'man@gmail.com'

console.log(myInfo)

console.log(myInfo['age'])

var myKey = 'address'

console.log(myInfo[myKey])

console.log(myInfo.getNameO())

//Function - Method
//Others - Attribute/Properties

//object constructor
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return  `${this.firstName} ${this.lastName}`
    }
}//chi la ban mo to, ko phai doi tuong

var author = new User('Marry', 'Ryan', 'Avatar')
var user = new User('Marry', 'Ryan2', 'Avatar')

author.tittle='Tui la ai'
user.comment ='dayla dau'
//k bi anh huong vs nhau

console.log(author)
console.log(user)

console.log(author.getName())
console.log(user.getName())

//object prototype => add duoc sau khi dc tao ra
User.prototype.classname = '22ITe'
User.prototype.getClassName = function(){
    return this.classname
}
console.log(user.classname)
console.log(user.getClassName())







