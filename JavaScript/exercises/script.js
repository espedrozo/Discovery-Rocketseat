/* 
    Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

    - de 90 para cima - A
    - entre 80 - 89   - B
    - entre 70 - 79   - C
    - entre 60 - 69   - D
    - menor que 60    - F
*/


// 1
// let score = 84
// let A = score >= 90
// let B = score >= 80 && score <= 89
// let C = score >= 70 && score <= 79
// let D = score >= 60 && score <= 69
// let F = score < 60 && score >= 0

// function showGrade() {
//     if(A) {
//         console.log('Grade A');
//     } else if(B) {
//         console.log('Grade B');
//     } else if(C) {
//         console.log('Grade C');
//     } else if(D) {
//         console.log('Grade D');
//     } else {
//         console.log('Grade F');
//     }
// }

// showGrade();





// 2
// function showGrade(score) {
//     if(score >= 90) {
//         console.log('Congrats A');
//     } else if(score >= 80 && score <= 89) {
//         console.log('Your grade B');
//     } else if(score >= 70 && score <= 79) {
//         console.log('Your grade C');
//     } else if(score >= 60 && score <= 69) {
//         console.log('Your grade D');
//     } else {
//         console.log('Your grade F');
//     }
// }

// showGrade(97)




// 3
function getScore(score) {
    let A = score >= 90 && score <= 100
    let B = score >= 80 && score <= 89
    let C = score >= 70 && score <= 79
    let D = score >= 60 && score <= 69
    let F = score < 60 && score >= 0

    let scoreFinal;

    if(A) {
        scoreFinal = 'A'
    } else if(B) {
        scoreFinal = 'B'
    } else if(C) {
        scoreFinal = 'C'
    } else if(D) {
        scoreFinal = 'D'
    } else if(F) {
        scoreFinal = 'F'
    } else {
        scoreFinal = 'Invalid Grade'
    }

    return scoreFinal
};

console.log(getScore(101));
console.log(getScore(77));
console.log(getScore(-1));
console.log(getScore(60));
console.log(getScore(87));
console.log(getScore(93));
console.log(getScore(59));




