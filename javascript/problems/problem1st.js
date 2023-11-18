// 1. write a js program to check two no. and returns true if one of the no. is 100 or if the sum of two no. is
function check(param1, param2) {
    console.log("No1.", param1)
    console.log("No2.", param2)
}
check(20, 30)


const mack = (num1,num2) => {
    if(num1 === 100 || num2 === 100 ) {
        return true
    }
    else if(num1 + num2 === 100) {
        return true
    }
    else {
        return false
    }
}
console.log(mack(60,40))


// 2. write a js progrem to get the extention of a file name 
const file = (FileName) => FileName.slice(FileName.lastIndexOf(`.`))

console.log(file("product.HTML"))


// 3. Write a js program to get the current date
// Expected output  =>   // mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
const setTime = (date = new Date()) => {
    let day = date.getDate();
    let Month = date.getMonth();
    let year = date.getFullYear();
        console.log(day,Month,year)
    // return `${Month}-${day}-${year}`
    // return `${Month}/${day}/${year}`
    // return `${day}-${Month}-${year}`
         return `${day}/${Month}/${year}`
}
console.log(setTime())


// 4.write a js program to create a new string adding "New!" in front of a given stirng. If the given string brgins with "New!" already then returns the original string
const newStr = (strii) => {
  return  strii.indexOf("New") == 0 ? strii : `New ${strii}`
}

console.log(newStr( "Original"))

// 5. program to find maximum no. inside an array 
let arr = [10,20,40,90,70,99,]
    let largest = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }
    }
    console.log("largest",largest)

// 6. find first name of people whose age is less than 33 
const arr1 = [
    {
        firstName : "Harsh", lastName : "Panchal", age : 37
    },
    {
        firstName : "Aditya", lastName : "Panchal", age : 32
    },
    {
        firstName : "Uday", lastName : "Panchal", age : 24
    },
    {
        firstName : "Sachin", lastName : "Panchal", age : 30
    },
    {
        firstName : "Aryan", lastName : "panchal",age : 18
    },
    {
        firstName : "Khushi", lastName : "panchal",age : 10 
    }
]
let result = arr1.filter(item => item.age<33).map(item1 => item1.firstName)
console.log(result)


// 7. write a js program to 
const character = (str) => str.length > 3 ? str.slice(0,8) + str.slice(-3) : str
console.log(character("harsh Panchal"))


// 8. write a js program to half cut the any name and to substring

const halfCut = (str) => str.substring(0, str.length / 2)
console.log(halfCut("projects"))


// 9. write a js program to find out which one is nearest tohundered(given to value)

const nearestValue = (num1,num2) => (100 - num1) > (100 - num2) ? num2:num1
console.log(nearestValue(90,40));


//10. write a js program to find te no. of even digit in an array of intiger

const array1 = [1,23,30,46,5,6,7,8,14,18,32,99];
const evenDigit = (arr) => arr.filter(num => num % 2 == 0)
console.log(evenDigit(array1))


// 11.Write a javascript program to get the largest even number from an array of integers using Math.max.

const aaray = [12,14,16,13,50,80,66]
const largestEven = (arr) => Math.max(...arr.filter(num => num % 2 == 0))
console.log(largestEven(aaray))

// 12.Write a javascript program to replace the first digit in a string (should contain at least digit) with $ character.

const name = "1st 3class eat food 2hotel in 2nd floor"
console.log(name.replace(/[0-9]/g, '$'))

// 13.Write a javascript program to given year report if is a lipear
const year = (num) => num % 4 == 0
console.log(year(2016))

// 14.write a javascript program to gernate a ramdom hexa decimal color code 
const colorName = () => Math.floor(Math.random() * 16).toString(16)
const randomColor = () => "#" + Array.from({length: 6}).map(colorName).join("")
console.log(randomColor())

// 15.wtire a js function that return a passed string with letters in alphabetical order 
const sortName = (str) => str.split("").sort((str1 , str2) => str1 > str2 ? 1 : -1).join("")
console.log(sortName("uday"))

// 16.write a js prpgram that accept a string as a peramiter and counts the no. of vowels with in the string.
const numberName = (str) => {
    const arr2 = ["a","e","i","o","u"]
    return str.split("").filter(item => arr2.indexOf(item.toLowerCase())!= -1).length
}
console.log(numberName("I am good person"))

// 17.write a javascript progrem to Combination method
const combinate = (str) => {
    const arr = []
    for(let i=0; i<str.length; i++)
        for(let j=i+1; j<str.length; j++) {
            arr.push(str.slice(i,j))
    }
    return arr
}
console.log(combinate("Uday"))

// 18.write a javascript program to calculate the factoeile of a given no. 
const factoeile = (num) => {
    if(num == 0 || num == 1) {
        return 1;
    }else{
        return num * factoeile(num -1)
    }

}
console.log(factoeile(8))

// 19.write a js program to convert a string two title case (capital letter of each word)
const capitalWord = (str) => str.split(" ").map(item => item.slice(0,1).toUpperCase() + item.slice(1)).join(" ")
console.log(capitalWord("this is the basic string"))

// 20. write a js function to a number which length is 6.
const woreds = ['spray','limit','contact','examination','presant'];
console.result = woreds.filter((word) => word.length > 6);
console.log(result)