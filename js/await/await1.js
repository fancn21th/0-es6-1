const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const runAsync = async (callback) => {
    await delay(1000)
    callback('1s')
    await delay(1000)
    callback('2s')
    await delay(1000)
    callback('3s')
}

runAsync((time)=> console.log(time))