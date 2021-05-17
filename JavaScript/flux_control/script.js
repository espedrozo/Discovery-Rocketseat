// if, else

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('febre alta')
} else if(mediumTemperature) {
    console.log('febre moderada')
} else {
    console.log('saudável')
};


// switch

// switch(expression) {
//     case 'a':
//         //code
//         console.log('a')
//         break
//     case 'b':
//         //code
//         console.log('b')
//         break
//     default:
//         console.log('default');
//         break
// }

function calculate(number1, operator, number2)
let result
switch(expression) {
    case '+':
        //code
        result = number1 + number2;
        break
    case '_':
        //code
        result= number1 - number2;
        break
    case '*':
        result = number1 * number2;
        break
    case '/':
        result = number1 / number2;
        break
    default:
        console.log('não implementado');
        break
}