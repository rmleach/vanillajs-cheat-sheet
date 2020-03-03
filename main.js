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

const todos = [{
    id: 1,
    text: 'Take out trash',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true,
  },
  {
    id: 3,
    text: 'Dentist Appt',
    isCompleted: false,
  }
];


// console.log(todos[1].text);
// console.log(todos);

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

//Why use for vs while loops?

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

// const todoText = todos.map(function(todo){
//   return todo.text
// });

// const todoComplete = todos.filter(function(todo){
//   return todo.isCompleted === true
// }).map(function(todo) {
//   return todo.text
// })

console.log(todoComplete)