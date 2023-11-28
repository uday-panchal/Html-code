const words = ['spray','limit','contact','schools','present','admission'];
const result = words.filter((word) => word.length>6);
console.log(result)

const arr = [5,30,50,60];
const found = arr.find(element => element>10);
console.log(found);

const arr1 = [5,30,50,60];
const isBelowValue = (currvalue) => {
    return currvalue >30
}
const results = arr1.find(isBelowValue);
console.log(results)
const arr2 = [5,30,50,60];

const array0 = ['a','b','c','d'];
array0.forEach(element => console.log(element));

for (let i=1; i<=10; i++) {
    console.log(i)
}

// const found1 = myarr2.findLast((element) => element>45);
// console.log(found1);

// const myarr2 = [5,7,6,139,44];
// const isLargeNumber1 = (element) => element>13;
// console.log(myarr2.findLastIndex(isLargeNumber1));

// console.log(array.from('foo'))
// console.log(array.from[1,2,3],x => x+x)

// const latestarr = [1,4,19,16];
// const map = latestarr.map(x => x*2);
// console.log(map);


// const plants = ['broccoli','cauliflower','cabage','kale','tomato'];
// console.log(plants.pop());
// console.log(plants);


// const animals = ['pigs','dog','goat','horse'];
// const count = animals.push('cow');
// console.log(count);
// console.log(animals);


const arr4 = [1,2,3,4,5];
const even = (element) => element %2 ===0;
console.log(arr4.some(even))


const month = ['jan','march','april','june'];
month.splice (1,0,'feb');
console.log(month);

month.splice (4,1,'May')
console.log(month)


const element = ['Fire','Air','Water'];
console.log(element.join())
console.log(element.join(''))
console.log(element.join('-'))
console.log(element.join('.'))

const array4 = [1,2,3,,4,5]
const odd = (element) => element %2 !=0;
console.log(array4.some(odd));


const animales = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animales.slice(2));
console.log(animales.slice(2,4))
console.log(animales.slice(1,5))
console.log(animales.slice(-2))
console.log(animales.slice(2,-1))



// const aray1 = [1,2,3,4,5];
// const isPositivenumber = (element) => element>0;
// console.log(aray1.every(isPositivenumber));


// const array5 = [1,2,3,,4,5,6,7,9,13];
// const odde = (element) => element %2 !=0;
// console.log(array5.filter(odde));



// const array6 = [1,2,3,4,5];
// let sum = 0;
// // console.log(array6[1])
// for(let i=0; i<array6.length; i++) {
//     sum+= array6[i]   
// }
// console.log(sum);



// const arrr1 = [10,20,30,60,80,50]
// let largestno = 0;
// for(let i=0; i<arrr1.length; i++) {
//     if (arrr1[i] > largestno) {
//         largestno = arrr1[i];
//     }
// }
// console.log(largestno)

// const obj = {
//     name: 'abc'
// }

// const users = [
//     {firstName: "John", lastName: "Wick", age: 31},
//     {firstName: "Steve", lastName: "Smith", age: 33},
//     {firstName: "Virat", lastName: "Kohli", age: 34},
//     {firstName: "David", lastName: "Smith", age: 24},
//     {firstName: "Elon", lastName: "Musk", age: 33},
//     ];
//     let retiuren = users.filter(element => element.age<33).map(item => item.firstName);
//     console.log(retiuren);
//     // [{firstName: "John", lastName: "Wick", age: 31},{firstName: "David", lastName: "Smith", age: 24}].map(item => item.firstName)



//     let n = 4;
//     function square(num) {
//     // let ans = num*num;
//     let square4 = square(4)
//     return ans;
//     };
//     console.log(n)



//   const array1 = [1,2,3,4,5];
// const initialvalue = 0;
// const someWithInitalvalue = array1.reduce(
//     (accumulator, currentvalue) => accumulator+currentvalue,
// );
// console.log(someWithInitalvalue)


// function greet(name, callback) {
//     console.log('Hi' + ' ' +  name);    
//     callback();
    
// }
// function callMe () {
//     console.log('I am callback function');
// }
// greet('peter', callMe);


// setTimeout(() => {
//     console.log('Async Code');
//     }, 3000);


    // setInterval(() => {
    //     console.log('hey')
    //     }, 1000);
        
    
//    function a () {
//     console.log(b);
//    }
//    var b = 10;
//    a(); 


   
// //    function a () {
// //     var b = 20;
// //     c();
// //     function c() {
// //         console.log(b);
// //     }
// //    }
// //    a();



// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();


// function x() {
//     var x = 20;
//     function y() {
//         console.log(a)
//     }
//     return y;
// }
// let val = x();
// console.log(val);
// val()

// function x() {
//     var a = 10;
//     function y() {
//         console.log(a)
//     }
//     a = 30;
//     return y;
// }
// let val = x();
// console.log(val)
// val();


function x() {
    var a = 10;
    setTimeout(() => {
        console.log(a)
    }, 3000);
    console.log("Hello world")
}


x();


// function x() {
    // for (var i=1; i<=5; i++) {
//         for (let i=1; i<=5; i++) {
//         setTimeout (() => {
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("hii there");
// }
// x();


// function x() {
//     for(var i=1; i<=5; i++) {
//         function close(val) {
//             setTimeout(() => {
//                 console.log(val);
//             }, val*1000);
//         }
//         close(i)
//     }
//     console.log("harsh")
// }


// const second = () => {
//     console.log("hii there!");
// }
// const first = () => {
//     console.log("hello friends!");
//     second();
//     console.log("The End");
// }
// first()


const numberone = [1,2,3];
const numbertwo = [4,5,6];
const numbercombined = [...numberone, ...numbertwo];
console.log(numbercombined);


// var names = ["a","b","c","d"];
// function getNames(name1, name2, name3) {
// console.log(name1, name2, name3);
// };
// // getNames(names[0], names[1], names[2]);
// getNames(...names)



const cart = ["Shoes", "Pants", "Tshirts"];
const promise = createOrder(cart);
console.log('Create Order Promise: ', promise)

promise.then(function (orderId) {
    console.log(orderId)
})

// producer
// creating a promise
function createOrder(cart) {
    // promise contructor
    const pr = new Promise(function(resolve, reject) {
        // create order
        // validate cart
        // orderid
        if(!validateCart(cart)) {
            const err  = new Error("Cart is not valid");
            reject(err)
        }
        // logic for createOrder
        const orderId = "12345";
        if(orderId) {
            setTimeout(() => {
                resolve(orderId)
            }, 3000);
        }
    });
    return pr;
}

function validateCart(cart) {
    return true;
}