let sum = (a, b, callback) => {
    console.log('Sum of a + b is', a+b);
    callback(a, b);
}

let sub = (a, b, callback) => {
    console.log('Sub of a - b is', a-b);
    callback(a, b);
}

let mul = (a, b, callback) => {
    console.log('Sub of a - b is', a-b);
    callback(a, b);
}

let divide = (a, b, callback) => {
    console.log('Sub of a / b is', a/b);
    callback(a, b);
}

sum(5, 3, (a, b) => {
    sub(a, b, () => {
        mul(a, b, () => {
            divide(a, b, () => {
                console.log('all operations are completed');
            })
        })
    })

});