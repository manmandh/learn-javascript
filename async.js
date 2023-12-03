let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //reject('Promise resolved')
        //let a = true;
        let a = true;
        if(a){
            resolve('Done');
        }else{
            reject('Deny');
        }
    }, 4000)
})

async function asyncFunc(){
    let result = await promise.then(
        data => {
            //console.log('Resolved');
            console.log(data);
        }
    ).catch(
        error => {
            //console.log('Error');
            console.log(error);
        }
    ); 

    console.log('Hello Hoa');
    console.log('Hello World');
}

asyncFunc();