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




//Operadores aritiméticos
//multiplicação *
//console.log(3.2 * 5.5);

//divisão /
//console.log(12 / 2);

//soma +
//console.log(34 + 10);

//subtração -
//console.log(30 - 22);

//resto da divisão %
//let remainder = 11 % 9   resto é = 2
//console.log(remainder)

//incremento ++
// let increment = 0;
// increment++;
// console.log(++increment); = 1
// console.log(increment); = 1


//decremento --
//let decrement = 0
//decrement--
//console.log(decrement);



//exponencial **
//console.log(2**3);


//GROUPING OPERATOR ( ) ----- entra a questão de precedencia, onde o que está no pareteses será calculado antes.




//Operadores de comparação
//compara valores e retorna boolean

/* 
    let one = 1;
    let two = 2;

    == igual a
    console.log(two == 1) --------- false
    console.log(one == "1") --------true

    != diferente de
    console.log(one != two) ---------true
    console.log(one != 1)------------false
    console.log(one != "1")----------false



    //Operadores de comparação estritamente igual/diferente
    //compara valores e retorna boolean

    /* 
    let one = 1;
    let two = 2;

    === estritamente igual a
    console.log(one === 1) --------- true
    console.log(one === "1") --------false

    !== estritamente diferente de
    console.log(two !== "2") ---------true
    console.log(two !== 2)------------false
*/

//operadores de comparação menor e maior e igual
// <  >  <=  >=




/*
    Operadores de atribuição
    assignment
    x = 1

    addition assignment
    x = x + 1
    x += 1

    subtraction assignment
    x = x - 1

    multiplication assignment
    x = x * 1
    x *= 1

    division assignment
    x = x / 1
    x /= 1

    remainder, exponetiation
    x %= 1
    x**= 1





    LOGICAL OPERATORS

    AND &&

    OR ||

    NOT !



    OPERADOR CONDICIONAL (TERNÁRIO)

    condição então VALO1 se não VALOR2
    condition ? value1 : value2

    let pao = true
    let queijo = true
    const breakfast = pao && queijo ? "café top" : "café ruim"
    console.log(breakfast) ----------- café top




    OPERADOR DE STRING
    comparison
    "a" == "a"

    concatenation
    "a" + "b"    ---------- ab
    "alpha" += "bet" -------alphabet





    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN

    todos são falsy, vai dar um booleano false
    console.log(0 ? "verdadeiro" : "falso") ---- falso





    TRUTHY - confiável
    Quando o valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

    todos serão true
    console.log(Infinity ? "verdadeiro" : "falso") ----- verdadeiro





    OPERATOR PRECEDENCE

    grouping                     ()
    negação e incremento         !  ++  --
    multiplicação e divisão      *  /
    adição e subtração           +  -
    relacional                   <  <=  >  >=
    igualdade                    ==  !=  ===  !==
    AND                          &&
    OR                           ||
    condicional                  ?:
    assignment                   =  +=  -=  *= %=

*/