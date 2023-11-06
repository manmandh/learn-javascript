alert('Hi Javascript Basic')
var fullName = 'Tran Thi Cam Hoa'
var age = 26
alert(fullName)
alert(age)

console.error(fullName)

confirm('Accept you are enough age')
prompt('xac nhan du tuoi')
//prompt=alert+confirm

setTimeout(function() {
    alert('Thong bao')
}, 1000)//chi chay 1 lan

setInterval(function() {
    console.log('Tui la Man ' + Math.random())
}, 1000)//chay nhieu lan 1 giay


