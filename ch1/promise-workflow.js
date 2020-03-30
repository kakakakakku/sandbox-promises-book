function asyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async Hello World");
        }, 2000);
    });
}

asyncFunction().then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error);
});
