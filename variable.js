// var fullName = 'Tran Man Man';
// fullName = 'TMM';
//var name;
//var name = 'Man';

console.log(firstName); //in ra undefined
var firstName = 'Man';

console.log(greeter);
var greeter = 'say hello';

var greeter; //có giá trị là undefined
console.log(greeter);
greeter = 'say hello';

console.log('ABC');

var greeting = 'say Hi';
if (true) {
  var greeting = 'say Hello'; // biến greeting đã bị sửa từ say Hi thành say Hello
  console.log(greeting); // "say Hello "
}
console.log(greeting); // "say Hello" , bị sửa ròi

function showName() {
    let fullName = 'Tran Man Man';
    console.log(fullName); //in ra Tran Man Man
}
showName();
//console.log(fullName); //báo lỗi không tìm thấy biến

function test() {
    let a = 'man';
    function tast() {
      console.log(a); //vẫn có thể truy cập vì vẫn trong block chứa biến let
    }
    tast();
    console.log(a);
}
test();

// let name = 'Man';
// name = 'Tran';

let greeting2 = 'say Hi';
if (true) {
  let greeting2 = 'say Hello instead'; //biến greeting tạo mới khác với biến ở ngoài
  console.log(greeting2); // "say Hello instead"
}
console.log(greeting2); // "say Hi", không liên quan gì nhau hehhehe

let greeting3 = 'say Hi';
if (true) {
  greeting3 = 'say Hello'; // biến greeting này là biến ở ngoài, và vẫn có thể tiếp cận, vì thế giá trị greeting đã bị sửa từ say Hi thành say Hello
  console.log(greeting3); // "say Hello "
}
console.log(greeting3); // "say Hello" , bị sửa ròi

// const greeting4 = 'say Hi';
// greeting4 = 'say Hello instead'; // error: Assignment to constant variable.

const greeting5 = {
    message: 'say Hi',
    times: 4,
};
console.log(greeting5);