const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true){
            resolve('successful')
        }else{
            reject('fail')
        }
    }, 2000)
})

p.then(data => {
    console.log(data)
})

p.catch(error => {
    console.log(error)
})