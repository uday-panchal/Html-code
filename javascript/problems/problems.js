// write a js program to check two no. and returns true if one of the no. is 100 or if the sum of two no. is 100

//  function check(param1,param2) {

//     console.log("no.1",param1)
//     console.log("no.2",param2)
// }
// check(20,30);


//  const check = (param1,param2) => {

//     if(param1 === 100 || param2 === 100) {
//         return true;
//     }
//     else if(param1+param2 === 100) {
//         return true
//     }
//     else{
//         return false;

//     }
// }
//  const result = check(70,30);
// console.log(result)


// write a js progrem to get the extention of a file name 
// const file = (fileName) => {
//     return fileName.slice(fileName.lastIndexOf(`.`))
// }
// // 2nd method se hai 
// const file1 = (fileName) => fileName.slice(fileName.lastIndexOf(`.`))

// const result =  file("problems.HTML")
// console.log(result)
// console.log(file("problems.HTML"))



// 3. Write a js orogram to get the current date
// Expected output
// mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
const setTime = (date = new Date()) => {
    let day = date.getDate()
        let Month = date.getMonth()+1
            let Year = date.getFullYear()
    console.log(day,Month,Year)
    return `${Month}-${day}-${Year}`
    // return `${Month}/${day}/${Year}`
    // return `${day}-${Month}-${Year}`
    // return `${day}/${Month}/${Year}`
}
console.log(setTime());


// write a js program to create a new string adding "New!" in front of a given stirng. If the given string brgins with "New!" 
// already then returns the original string

// const own = (da1) =>  {
//     return da1.indexOf("New") == 0 ? da1 : `New ${da1}`
// }
// // console.log(own("New orignal"))
// console.log(own("orignal"))



// const replace = (str) =>{
//     return str.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 1))
// }
// console.log(replace("UDAY"));


// program to find maximum no. inside an array 

// let arr = [1,2,30,4,5,90]
//     let largest = 0;
//     for(let i=0; i<arr.length; i++) {
//     if(arr[i] > largest)  {
//         largest = arr[i];
//     }
//     }
//     console.log("largest:", largest)



// find first name of people whose age is less than 33 
// const arr1 = [
//     {
//         FirstName : "john" , lastName : "devil" , age : 34 
//     },
//     {
//         FirstName : "uday" , lastName : "Panchal" , age : 32
//     },
//     {
//         FirstName : "seo" , lastName : "aerma" , age : 35
//     },
//     {
//         FirstName : "ashu" , lastName : "pal" , age : 38 
//     },
//     {
//         FirstName : "sahil" , lastName : "khan" , age : 31
//     }
// ]
// let result = arr1.filter(item => item.age<33).map(item1 => item1.FirstName)
// console.log(result)



// const character = (str) => str.length > 3 ? str.slice (0,3) + str.slice (-3) : str
// console.log(character("udaypanchal"))


const report = (str) => str.substring(0, str.length / 2)
console.log(report("helloworldhellowor"))


const addTwoFirst = (str1, str2) => str1.slice(1) + str2.slice(1)
console.log(addTwoFirst("john", "devil"))

// write a js program to find out which one is nearest tohundered(given to value)

const nearestValue = (num1, num2) => (100 - num1) > (100 - num2) ? num2 : num1
console.log(nearestValue(80, 50))


// write a js program to check a given string contains 2 to 4 occurences 2 to 4 of a specifies chraracter

const count = (str, char) => str.split('').filter(ch => ch == char).length
const occurance = (str, char) => count(str, char) >= 2 && count(str, char) <= 4
console.log(occurance("aditya", "a"))


// write a js program to find te no. of even digit in an array of intiger

const arry1 = [1, 2, 4, 5, 6, 8, 16]
const evenDigit = (arrrr) => arrrr.filter(num => num % 2 == 0)
console.log(evenDigit(arry1))


// Write a javascript program to get the largest even number from an array of integers using Math.max.

const arr = [1, 20, 4, 511, 60, 7, 80,]
const largestEven = (arrr2) => Math.max(...arr.filter(num => num % 2 == 0))
console.log(largestEven(arr))

// Write a javascript program to replace the first digit in a string (should contain at least digit) with $ character.

const naee = '1st 3class 2hotel '
console.log(naee.replace(/[0-9]/g, '$'))



// given year report if is a lipear  

// const year = (num) => num % 4 == 0
// console.log(year(2024))


// write a js program to compare two objects to determine if the 1st one contains the dame proerties as the second one 

const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = { a: 1, b: 2, c: 3 }
const checkobj = (a, b) => {
    return Object.keys(a).every(very => b[very])
}
console.log(checkobj(obj1, obj2))



// gernate a ramdom hexa decimal color code 

const colorname = () => Math.floor(Math.random() * 16).toString(16)
const randomcolor = () => "#" + Array.from({ length: 6 }).map(colorname).join("")
console.log(randomcolor())


// wtire a js function that return a passed string with letters in alphabetical order 

const sortName = (str) => str.split("").sort((str1, str2) => str1 > str2 ? 1 : -1).join("")
console.log(sortName("uday"))

// write a js prpgram that accept a string as a peramiter and counts the no. of vowels with in the string.

const numbername = (str) => {
    const arr2 = ['a','e','i','o','u']
    return str.split("").filter(item => arr2.indexOf(item.toLowerCase())!= -1).length
}
console.log(numbername("Uday"))

// const numbername = (str) => {
//     const vowelist = 'aeiouAEIOU'
//     let counter = 0;
//     for(let i=0; i<str.length; i++) {
//        if(vowelist.indexOf(str[i])!= -1) {
//         counter++
//        }

//     }
//     return counter
// }
// console.log(numbername("Aditya"))

// write a js function to get the uniqe character from string input aa,bb,cc,d output abcd

// const names = (str) => {
//     let uniqestr = ""
//     for(let i=0; i<str.length; i++) {
//         if(uniqestr.includes(str[i]) == false) {
//             uniqestr = uniqestr + str[i]
//         }
//     }

//     return uniqestr
// }
// console.log(names("aabbccd"))


// const names = (str) => {
//     const uniqeset = new Set();
//         for (const char of str) {
//             uniqeset.add(char)
//         }
//     return Array.from(uniqeset).join("")
// }
// console.log(names("aabbccd"))

// write a js function combination maethod 

const combinate = (str) => {
    const array = []
    for(let i=0; i<str.length; i++) 
                for(let j=i+1; j<str.length+1; j++) {
                    array.push(str.slice(i,j))
        }
    return array
}
console.log(combinate("Dog"))


// const carname = (str) => {
//    const rece = str.toLowerCase()
//    if(rece == str.split("").reverse().join("")) {
//     return true
//    }
//    else{
//     return false
//    }
// }
// console.log(carname("racecar"))

    // write a js program to calculate the factoeile of a given no. 
const factoeileno = (num) => {
    if(num == 0 || num == 1) {
        return 1;
    } else {
        return num * factoeileno(num -1)
    }
}
console.log(factoeileno(6))

    

// write a js function to check id if a given no. is prime 

const primenumber = (num) => {
    if (num == 1) {
        return "not prime"
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return "not prime"
            } else {
                return "prime"
            }
        }
    }


}
console.log(primenumber(3))

// write a js function that return the fibonacci seqnce upto a given no. of terms 
// output 0,1,1,2,3,,5,8,13,21

// const sequence = (num) => {
//     let n1 = 0;
//     let n2 = 1;
//     let nextTerm 
//     console.log(n1)
//     console.log(n2)
//     nextTerm = n1 + n2
//     for(let i=1; i<=num; i++) {
//         console.log(nextTerm)
//         n1 = n2;
//         n2 = nextTerm
//         nextTerm = n1 + n2
//     }
// }
// (sequence(7))

// write a js program to convert a string two title case (capital letter of each word)
// "this is the basic string"

const capitalWord = (str) => str.split(" ").map(item => item.slice(0,1).toUpperCase() + item.slice(1)).join(" ")
console.log(capitalWord('this is the basic string'))

//write a js function that takes an array of objects and a key, and returns a new array soted based on the values of that key in assending ordered

const arrayobj = [
    {
        name : "uday",
        age : 18
    },
    {
        name : "aditya",
        age : 23
    },
    {
        name : "sachin",
        age : 32
    }
]
function sortByKey(arr , key) {
    let sortedData;
    if( key == "name") {
        sortedData = arr.sort(function(a , b) {
            let x = a.name.toLowerCase()
            let y = b.name.toLowerCase()
                if(x > y) {
                    return 1;
                } else if( x < y ) {
                    return -1
                }
                return 0
        });
    }
    else{
        sortedData = arr.sort(function(a , b){
            return a.age - b.age
        });
    }
    return sortedData
}
console.log(sortByKey(arrayobj , "name"))
console.log(sortByKey(arrayobj , "age"))