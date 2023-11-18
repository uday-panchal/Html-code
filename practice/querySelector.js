// const itemlist = document.querySelector('.items');
// itemlist.parentNode.style.backgroundColor ='blue';
// itemlist.parentNode.parentNode.style.backgroundColor ='red';
// console.log(itemlist.parentNode.style);


// const ul = document.querySelector('.items');
// ul.remove()

const header = document.querySelector('.header');
header.style.borderBottom = '2px solid black'


const inputText = document.querySelector(".inputText");
inputText.value = 'Hello World'

const submit = document.querySelector('input[type="submit"]')
submit.value= "SEND"


// const list = document.querySelector('.item:last-child');
// list.style.color = 'blue'

const list2 = document.querySelector('.item:nth-child(2)');
list2.style.color = 'red'

const allList = document.querySelectorAll('.items');
allList[0].style.backgroundColor = 'green'

const odd = document.querySelectorAll('.items:nth-child(odd)');

for(let i=0; i<odd.length; i++) {
    odd[i].style.color = 'pink'
}


const itemlist = document.querySelector('.items');
// itemlist.children[1].style.color = 'black'

itemlist.firstElementChild.textContent = 'Harsh'
itemlist.lastElementChild.textContent = 'Uday'
console.log(itemlist.firstChild);


// const inputText = document.querySelector('.inputText');
// console.log(inputText.nextElementSibling)


const submitbtn = document.querySelector('.submit');
console.log(submitbtn.previousElementSibling)

const newDiv = document.createElement('div');
newDiv.className = "hello_div";
newDiv.id = "hello_id";
newDiv.setAttribute('title', 'this is a title of dov');
console.log(newDiv)

let newDivText = document.createTextNode("hello world");
newDiv.appendChild(newDivText);
console.log(newDiv)