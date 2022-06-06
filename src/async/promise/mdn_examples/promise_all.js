const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo');
});

// promise3 equals to:
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('bar');
    }, 1000);
}).then(res => {
    console.log(res);
})
// bar

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    });
// expected output: Array [3, 42, "foo"]
