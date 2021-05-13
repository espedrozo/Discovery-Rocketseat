// console.log("rocketseat starter");

// /*
//     crazes permitem add/interpolar cálculos dentro de uma string usando ${} - (`stirng ${1+1}`) = string 2
//     números:
//             inteiros = 33
//             reais/float = 12.5
//             NaN = Not a Number
//             Infinity = infinito

//     object:
//         propriedades/atributos
//         funcionalidades/métodos
// */
// console.log({
//     name: "Emanuel",
//     idade: 30,
//     andar: function() {
//         console.log('andar')
//     }
// });




// // Array
// console.log([
//     "leite",
//     "ovos",
//     2,
//     3,
// ]);



// /*
//     Data types
//         Primitive/primitive value
//         Structural
//         Structural Primitive


//     Primitivos
//         String
//         Number
//         Boolean
//         Undefined
//         Symbol
//         BigInt


//     Estruturais
//         Object
//             Array
//             Map
//             Set
//             Date
//             Standard built-in objects / objetos padrão já construídos na linguagem

//         Function


//     Primitivo Estrutural/Structural Root Primitive
//         null

// */

// Object
// const person = {
// 	name: 'John',
// 	age: 30,
// 	weight: 88.6,
// 	isAdmin: true,
// }

// console.log(`${person.name} tem ${person.age} anos`);



// Array
// const animals = [
//     'lion',
//     'monkey',
//     'cat',
//     {
//         //pode usar objeto dentro do array junto com as strings, mas pode dar problema, o melhor é separar
//         name: 'horse',
//         age: 5
//     }
// ];

// console.log(animals[2].name);



// //exercicios

// let weight;
// console.log(typeof weight);

// let person2 = {
//     name: "Emanuel",
//     age: 30,
//     stars: 10.9,
//     weight: 78.8,
//     isSubscribed: true,
// };
// console.log(`${person2.name} de idade ${person2.age} pesa ${person2.weight} kg`);

// let students = [];

// students = [
//     person2
// ];
// console.log(students);
// console.log(students[0]);

// const person3 = {
//     name: "Ellie",
//     age: 28,
//     weight: 59.8,
//     isSubscribed: true,
// };
// students[1] = person3;
// console.log(students);


// // Expressions and Operators

// // operator: Binary, Unary, Ternary

// let number = 1; //expression

// console.log(true ? 'alo' : 'nada');
// //operators - true/false, então, 'alo', se não, 'nada' - ternary



//new - left-hand-side expression - criar um novo objeto
let name = new String("Emanuel");
name.surName = "Savanhago"; //sobrenome
let age = new Number(30);
console.log(name, age);

let date = new Date("2021-05-20");
console.log(date.__proto__);




//operadores unários - typeof, delete

console.log(typeof "Emanuel");

const person = {
    name: "Emanuel",
    age: 30,
}
delete person.age;
console.log(person);