// function createPhrases () {
//     console.log("Estudar é muito bom");
//     console.log("Paciência e Persistência");
//     console.log("Revisão é a mãe do aprendizado");
// };

// createPhrases();

// hoisting de functions só ocorre com function padrão nomeada
// ex: function sayMayName() {}
// se for criado var sayMayName = function(){} - função anônima, hoisting será só var sayMyName
// se for criado com const não terá nada de hoisting


// arrow function

// const sayMayName = (name) => {
//     console.log(name);
// };

// sayMayName("Emanuel");



// //callback function

// const sayMayName2 = (name) => {
//     console.log("antes da function callback");
//     name();
//     console.log("depois da function callback");
// };

// sayMayName2(
//     () => {
//         console.log("estou em uma callback")
//     }
// );



/*
Function constructor

    expressão new
    criar um novo objeto
    this. keyword
*/

// function Person(name) {
//     this.name = name;
//     this.walk = function() {
//         return this.name + " is walking"
//     };
// };

// const emanuel = new Person("Emanuel");
// const joao = new Person("João");
// console.log(emanuel);
// console.log(joao);
// console.log(emanuel.walk());
// console.log(joao.walk());


/* Prototype

    prototype-based laguage
    prototype chain
    __proto__

    "Emanuel".__proto__
    "Emanuel".length
    "Emanuel".splice()
    .....
    functions já prototipadas
*/


/*
    Type conversion (typecasting)-(nesse eu faço a troca e o js pode fazer tb) 
        console.log(Number("9") + 5) = 14 - eu peço explicitamente para mudar para número antes, então js soma

    vs 
    Type coersion-(nesse só o js faz a troca)
    console.log("9" + 5) = 95 - js concatena mudando para numero int


    - Alteração de um tipo de dado para outro tipo
*/

/*
    Manipular Strings e números
    
    -Mudar de string para num. e num. para string
        let string = "123"
        console.log(Number(string)); - de string para num.

        let number = 321
        console.log(String(number)); - de num. para string



    -Contar quantos caracteres tem uma palavra e quantos digitos tem um número
        
        let word = "Paralelepipedo"
        console.log(word.length);

        let number = 1234
        console.log(String(number).length);


    -Transformar num. quebrado com 2 casas decimais e trocar ponto por virgula

        let number = 2342.23423523234
        console.log(number.toFixed(2).repalce(".", ","));
        toFixed vai retornar uma string




    -Transformar letras maiusculas e minusculas
        
        let word = "Programar é muito bacana!"
        console.log(word.toLowerCase().ToUpperCase());
*/



/* 
    Separar um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
    Depois transformar o aray em um texto e onde eram espaços, colocar _

*/

    let phrase = "Eu quero viver o Amor!"
    let myArray = phrase.split(" ");
    console.log(myArray);

    let phraseWithUnderscore = myArray.join("_");
    console.log(phraseWithUnderscore.toUpperCase());

    console.log(phrase.includes("amor"));
    //includes é case sensitive



    //Array com constructor
    let otherArray = new Array('a', 'b', 'c');
    console.log(otherArray);
    //    let otherArray = new Array(10); - pode criar array com posições vazias, no caso 10 posições



    //manipulação de Array

    console.log([
        "a",
        {type: "array"},
        function() {return "olá"}
    ] [2]());
//chamando o elemento na posição [2] que é uma função e executando ela ()

console.log(["a", "b", "c"].length);
//array simples contando a quantidade de elementos





//string para arrays

let word = "manipulação"
console.log(Array.from(word));


let techs = ["html", "css", "js"];

//add no final do array
techs.push("nodejs");

//add no inicio do array
techs.unshift("sql");

//remover do final do array
//techs.pop();

//remover do inicio do array
//techs.shift()

//pegar somente alguns elementos do array
//console.log(techs.slice(1,3));
//(posição de início, posição final)


//remover 1 ou mais itens em qualquer posição do array
//techs.splice(1,1)
//(primeiro a posição/index, depois quantidade de elementos)


//encontrar posição de elementos
let index = techs.indexOf("css");
techs.splice(index, 1);


console.log(techs);