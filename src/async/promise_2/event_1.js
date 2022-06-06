// https://www.jianshu.com/p/9dd4427f540e

setTimeout(() => console.log('start'),0)
new Promise((resolve,reject) => {
    console.log('start for loop');
    for(let i=0;i<10000;i++){
        i === 99 && resolve()
    }
}).then(() => console.log('execute then function'))
console.log('end');



