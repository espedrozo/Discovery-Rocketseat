/* 
    Celsius em Fahrenheit e vice e versa

    Crie uma função que receba uma stirng em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

        C = (F - 32) * 5/9

        F = C * 9/5 + 32

*/


// function convertTemperature(number, convert) {
//     if(convert == "fahrenheit") {
//         let result = (number - 32) * 5/9;
//         return result + " graus celsius"
//     } else if(convert == "celsius") {
//         let result = number * 9/5 + 32;
//         return result + " graus fahrenheit"
//     }
// }

// console.log(convertTemperature(40, "celsius"));






function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C");
    const fahrenheitExists = degree.toUpperCase().includes("F");

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error ("Grau não identificado");
    }

    //fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
    let degreeSign = "C"

    //fluxo alternativo C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32;
        degreeSign = "F"
    }

    return formula(updatedDegree) + degreeSign;
}

try{
    console.log(transformDegree("50F"));
    console.log(transformDegree("10C"));
    transformDegree("50Z")

} catch(error) {
    console.log(error.message);
}
