// let x =10;
// console.log(x);

// let y = true;
// console.log(y);
// {
// let x =10;
// console.log(x);
// }
// {
// let x =10;
// }
// console.log(x)
// {
// var name ="uday"
// var number =10;
// console.log(number)
// }

// let a ="10ab"
// let b =10;
// let c = parseInt(a) + parseFloat(b);
// console.log("c" , c)

// var myName ="harsh"
// var myName;
// console.log(myName)


// let d="50"+3+6;
// console.log(d)


// var z = 10;
// console.log(z)

// for(let i=0;i<5; i++) {
//     console.log(i)
// }


// let i=0
// while(i<5) {
//     console.log(i)
// }

// const date = newDate();
// console.log(date.getMonth());

console.log(Math.round(5.95));

console.log(Math.floor(5.94));

console.log(Math.max(1,5,7,9,5));

console.log(Math.ceil(1.45));
console.log(Math.ceil(6));

// const date = new Date();
// console.log(date.getMonth());

const date = new Date("2021-03-25");
console.log(date.getFullYear());

const sentence =`the quick brown for jump`;
const index = 4;
console.log(`the character at index ${index} is ${sentence.charAt(index)}`);

const str1 = "Hello"
const str2 = "World"
console.log(str1.concat(' and ',str2));

const str3 = `cat are the best!`;
console.log(str3.endsWith('best!'));

// const sentence2 = `the quick brown for jump in the fox.`;
// const Word = 'fox';
// console.log(`the word ${Word} ${sentence2.includes(Word)? 'is':'is not'} in the sentence`);

const sentence2 = `the quick for the jump in the fox.`;
const word = 'jump';
console.log(`the word ${word} ${sentence2.includes(word)? 'is':'is not'} in the sentence`);

// const paragraph = `the quick fox the jump in the fox.`;
// const searchTerm = 'fox';
// const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// console.log(`the index of 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);

const paragraph = `the quick fox the jump in the fox over the lazy fox.`;
const searchTerm = 'fox';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`the index of the first "${searchTerm}" from the begning is ${indexOfFirst}`);
console.log(`the index of 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// console.log(`the index of 3rd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);

const paragraph1 = `the quick fox the jump in the fox over the lazy fox.`;
const searchTerm1 = 'fox';
console.log(`the index of the first "${searchTerm1}" from the end is ${paragraph1.lastIndexOf(searchTerm1)}`);

const paragraph2 = `The quick brown fox jumps over the lazy dog. It barked.`;
const regex = /[a-z]/g;
const found = paragraph2.match(regex);
console.log(found)

const p2 = `MR Blue has a blue house and a blue car`;
const regex1 = /blue/g;
console.log(p2.replace(regex1, 'green'));

const str = `The quick brown fox jumps over the lazy dog. It barked.`;
console.log(str.slice(4));

const newStar = `this is a string to in the sea beach.`;
// const words = newStar.split(' ') ;
// const words = newStar.split('');
const words = newStar.split();
console.log(words);

const mytar = `saturday your fun day.`;
console.log(mytar.startsWith('sat'));
console.log(mytar.startsWith('sat',3));


const a = `This is a String.`;
console.log(a.substring(1,3));
console.log(a.substring(2));

const newAt = `This is a String.`;
console.log(newAt.toLocaleLowerCase());
console.log(newAt.toLocaleUpperCase());

const strobj = new String('fool');
console.log(strobj);
console.log(strobj.toString());

const trin ="        Hello world              "                  
console.log(trin);
console.log(trin.trim());

const grem ="       hello world     "
console.log(grem);

const trem = new String('fool');
console.log(trem);
console.log(trem.valueOf());

const array1 =['a','b','c'];
const array2 =['d','e','f'];
const array3 = array1.concat(array2);
console.log(array3);


const myarr = ['a','b','c','d','e'];
console.log(myarr.copyWithin(0,3,4));
console.log(myarr.copyWithin(1,3));
console.log(myarr.copyWithin(-2,-3,-1));

const myarr2 = ['a','B','C'];
const iterator1 = myarr2.entries();
console.log(iterator1.next().value)

console.log(iterator1.next().value)
console.log(iterator1.next().value)

// const arr4 = ['1','2','30','32','20'];
// const result = arr4.every((currvalue) =>currvalue < 40 );
// console.log(result)

const arr4 = ['1','2','30','32','20'];
const isBelowValue =(currvalue) => {
    return currvalue <40;
}
const result = arr4.every(isBelowValue);
// const result = arr4.every((currvalue) => {
// return currvalue < 40;
// })
console.log(result)


const arry5 = [1,2,3,4,];
console.log(arry5.fill(0,2,4));
console.log(arry5.fill(5,1));
console.log(arry5.fill(6,2));
console.log(arry5.fill(6));


const woreds = ['spray','limit','contact','examination','presant'];
console.result = woreds.filter((word) => word.length > 6);
console.log(result)

const array0 = [5,30,50,40];
const foundu = array0.find(Element => Element>10);
console.log(found);

// const array0 = [5,30,50,40];