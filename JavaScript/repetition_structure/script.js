//ESTRUTURA DE REPETIÇÃO
//FOR
// break faz parar a execução
// continue faz pular a execução do momento, no caso pula o 5 (i ===5)
// for(let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         //break
//         continue;
//     }
//     console.log(i);
// }


//WHILE
// let i = 0
// while(i <= 10) {
//     console.log(i)
//     i++;
// }

// let a = 135475
// while(a > 10) {
//     console.log(a)
//     a /= 35
// }




//FOR...OF
// let name = "Emanuel"
// let names = ["Ana", "Ellie", "Hannah"]

// for(let char of name) {
//     console.log(char);
// }

// for(let name of names) {
//     console.log(name);
// }




//FOR....IN

let person = {
    name: "Ellie",
    age: 20,
    weight: 58.1
}

for(let property in person) {
    console.log(property);
    console.log(person[property]);

}