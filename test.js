function b1(callback) {
    console.log("starting");
    callback();
}

function b2(callback) {
    setTimeout(() => {
        console.log("doing");
        callback();
    }, 800);
}

function b3(callback) {
    setTimeout(() => {
        console.log("end");
        callback();
    }, 500);
}

function b4(callback) {
    setTimeout(() => {
        console.log("end done");
        callback();
    }, 300);
}

b1(() => {
    b2(() => {
        b3(() => {
            b4(() => {
                console.log(" done");
            });
        });
    });
});



// let a = 4;
// let b =6;
// function sum(){
//     return a + b;
// }


function b1() {
    console.log("starting");
    return Promise.resolve();
}

function b2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("doing");
            resolve();
        }, 800);
    });
}

function b3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("end done");
            resolve();
        }, 500);
    });
}

function b4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("b4 done");
            resolve();
        }, 300);
    });
}

b1()
    .then(b2)
    .then(b3)
    .then(b4)
    .then(() => {
        console.log("All done");
    });



async function runTask(){
    let r2 = await b2();
    let r3 = await b3();
    let r4 = await b4();
}
runTask().then(() => {
    b5()
})


function demo(){
    console.log("show mesage")
}
// chuyển sang arrow function  ====>
let demo = (mesage) => {
        console.log("show mesage")
}

demo();

function sum(a, b){
    return a + b;
}
// =====>
const sum = (a, b) => a + b;

const arr = [1, 2, 3, 4, 5];

let arr3 = [...arr]
const arr2 = Array.from(arr);
console.log(arr2);
