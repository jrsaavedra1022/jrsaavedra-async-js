const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('Upss!');
        }
    });
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


// another example
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(()=>{
                resolve('True');
            }, 2000);
        }else{
            const error = new Error('upss!!');
            reject(error);
        }
    });
}


somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log("Hola..."))
    .catch(err => console.error(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("array of results", response)
    })
    .catch(err => console.error(err));