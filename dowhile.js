//LOOP: do/while

var i = 0;
var isSuccess = false;

do{
    i++;
    console.log('nap the lan ' + i)

    //Thanh cong
    if(true){
        isSuccess = true;
    }//in ra lan 1

    // if(false){
    //     isSuccess = true;
    // }//in ra lan 1-2-3-4-5

}while(!isSuccess && i < 5);  

//Break && continue in LOOP
