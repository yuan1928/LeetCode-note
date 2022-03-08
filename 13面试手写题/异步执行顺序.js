async function async1() {
    console.log('async1 start')//2
    await async2()
    console.log('async1 end')//* -> 6
}

async function async2() {
    console.log('async2')//3
}

console.log('script start')//1

setTimeout(function () {
    console.log('settimeout')//* -> 8
})

async1()

new Promise(function (resolve) {
    console.log('promise1')//4
    resolve()
}).then(function () {
    console.log('promise2')//* -> 7
})

console.log('script end')//5

//-----------------------------------------------------------------------------------------

console.log('script start');//1

setTimeout(function () {
    setTimeout(() => console.log('setTimeout'), 0);
}, 0);//7

const p = new Promise((resolve, a) => {
    console.log('script middle'); //2
    a('1');
})
    .then(undefined,(res)=>(new Promise((resolve,reject)=>{resolve(res)})))

foo = async function() {
    p.then(r=>console.log(r))//5
}

foo()
console.log(2);//3

p.then(function (res) {
    setTimeout(() => console.log(res), 0);//6
})

console.log('script end');//4