function showDialog(){
    alert('Hello Hoa')
}//ko thuc thi khi dinh nghia

showDialog()//se thuc thi khi dc goi
//call

// function writeLog(){
//     console.log('Day la 1 dong log')
// }

// writeLog()

function writeLog(message, message2){
    // if(message){
    //     console.log(message)
    // }
    // if(message2){
    //     console.log(message2)
    // }

    // console.log(arguments)
    var myString = ''
    for(var param of arguments){
        myString+=`${param} - `
    }
    console.log(myString)
}

writeLog('Tui la bo Hoa','Tui khong phai bo Hoa')

function sum(a,b){
    //return a+b;
    return 'a' + 'b';
}

var result = sum(2,8)
console.log(result)

function showMessage(){
    console.log('Message 1')
}

function showMessage(){
    // var fullName = 'Hoa Tran'
    // console.log(fullName)
    function showMessage2(){
        console.log('Message 2')
    }
    showMessage2()
    //console.log('Message 2')

    //pham vi cua function2 va bien chi trong cai function
}
showMessage()
//neu trung ten, thi ghi de phia truoc, chi co KQ message 2

//disMessage2() -> uncaught
function disMessage(){
    console.log('Declaration function')
}

//expresssion function
var disMessage2 = function(){
    console.log('Expression function')
}

//call
disMessage()
//hoisting: thang expression function ko the goi trc khi dinh nghia, declaration thi co

//expression
// setTimeout(function autoLogin(){

// });

// var myObject = {
//     myFunction: function(){

//     }
// }

