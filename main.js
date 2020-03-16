/* VAR, LET, CONST
var is origninal and global scope. Better to use let and const. What is difference between let and var?*/

// let age = 30;
// age = 31

// console.log(age);

// const age = 30;
// age = 31

// console.log(age);

//STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL

// const name = 'Ryan';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null; //why is this an object?
// const y = undefined;
// let z; //also undefined

// console.log(typeof z)

// // CONCATENATION
// const hi = 'My name is ' + name + ' and I am ' + age;
// // TEMPLATE STRING
// const hello = `My name is ${name} and I am ${age} years old`;

// console.log(hi);
// console.log(hello);

//STRING METHODS
// const s = "Hello World";

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0, 5).toLowerCase());
// console.log(s.split(''));

// const tags = 'technology, computers, it, code'
// console.log(tags.split(', '))

/*ARRAYS
variables that hold mulitple values*/

/*using constructor
const numbers = new Array(1,2,3,4,5);
console.log(numbers);*/

/* using variable declaration
const fruits = ['apples', 'oranges', 'pears']*/

// fruits[3] = 'grapes'

// fruits.push('mangoes');
// fruits.unshift('strawberries');
// fruits.pop();

// console.log(fruits[1]);
// console.log(fruits[3]);
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));

/* OBJECT LITERALS */

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '123 Main St.',
//     city: 'Boston',
//     state: 'MA'
//   }
// }

// person.email = 'john@gmail.com';

// console.log(person.firstName, person.lastName)
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// console.log(person)

/*Destructuring*/
// const {firstName, lastName, address: { city }} = person;
// console.log(firstName)

/* 
ARRAYS OF OBJECTS
modeling data

*/

// const todos = [{
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist Appt',
//     isCompleted: false,
//   }
// ];

// console.log(todos[1].text);
// console.log(todos);
//JSON Stringify-- how to make an object a JSON object"//
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

/* FOR LOOPS */

// for (let i = 0; i <= 10; i++) {
//   console.log(`For loop number: ${i}`);
// };

/* WHILE LOOPS */

// let i = 0;
// while (i <= 10) {
//   console.log(`While loop number: ${i}`);
//   i++;
// };

//Why use for vs while loops? you ocuold use both, but a while loop is better suited for iterations where a contiuous actious should happen until a condition is met

/* LOOPING THROUGH ARRAYS */

// for(let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text)
// }

//For of...
// for(let todo of todos){
//   console.log(todo.text)
// }

// forEach, map, filter

// todos.forEach(function(todo){
//   console.log(todo.text)
// });

// const todoText = todos.map(function (todo) {
//   return todo.text;
// });

// const todoComplete = todos.filter(function(todo){
//   return todo.isCompleted === true
// }).map(function(todo) {
//   return todo.text
// })

// console.log(todoComplete)

//CONDITIONALS//

// const x = 4;
// const y = 10;

// if (x === 10) {
//   console.log('x is 10')

// if (x > 5 || y > 10) {
//   console.log('x is 10')
// } else if (x > 10) {
//   console.log('x is greater than 10')
// } else {
//   console.log('x is less than 10')
// }

// if (x > 5 && y > 10) {
//   console.log('x is 10')
// } else if (x > 10) {
//   console.log('x is greater than 10')
// } else {
//   console.log('x is less than 10')
// }

//TERNARY OPERATORS//
// const x = 10;

// const color = x > 10 ? 'red' : 'blue';
// const color = 'green';

// console.log(color);

//SWITCHES//^v

// switch(color) {
//   case 'red':
//     console.log("color is red");
//     break;
//   case 'blue':
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is not red or blue");
//     break;
// }

//FUNCTIONS//

// function addNums(num1 = 1, num2 = 1){
//   console.log(num1 + num2)
// }

//ARROW FUNCTIONS =>

// const addNums = (num1 = 1, num2 = 1) => {
//   console.log(num1 + num2)
// }
// addNums(5, 4)
// addNums()

//or//

// const addNums = (num1 = 1, num2 = 1) =>
//   num1 + num2

// console.log(addNums(5, 4))

//OOP

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirthYear = function() {
//     return this.dob.getFullYear()
//   }
//   this.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

//Instantiate
// const person1 = new Person('John', 'Doe', '4-3-1988');
// const person2 = new Person('May', 'Doely', '3-3-1970');

// console.log(person1);
// console.log(person2);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

//PROTOTYPES Keeping Methods out of Objects

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe', '4-3-1988');
// const person2 = new Person('May', 'Doelya', '3-3-1970');

// console.log(person2.getFullName());

//ES6 Classes - same as prototypes but PRETTIER!
// class Person {
//   constructor(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person1 = new Person('John', 'Doe', '4-3-1988');
// const person2 = new Person('May', 'Doelya', '3-3-1970');

// console.log(person1);
// console.log(person2.getBirthYear())

// DOM MANIPULATION //

// Single Element //
// const form = document.getElementById('my-form');
// const cont = document.querySelector('.container');
// console.log(cont)
// Multiple Element //
// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))

// Looping through items //
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item.innerHTML));

// Manipulating Elements //
const ul = document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent= "hello";
// ul.children[1].innerText = 'Rayan';
// ul.lastElementChild.innerHTML = '<h1>HEYO</h1>';

// const btn = document.querySelector(".btn");

// btn.addEventListener("mouseover", e => {
//   btn.style.background = "red";
// });
// btn.addEventListener("mouseout", e => {
//   btn.style.background = "black";
// });

// btn.addEventListener("click", e => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>BUTTS</h1>";
// });

//APP//

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please Enter All Fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
  
    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
  }
}
