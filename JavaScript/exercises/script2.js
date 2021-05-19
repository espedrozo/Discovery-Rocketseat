// /*
//     Sistema de gastos familiar
//     Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//      - receitas: []
//      - despesas: []

//     Agora, crie uma função que irá calcular o total de receitas e despesas
//     e irá mostrar uma mensagem se a família está com saldo positivo ou negativo,
//     seguido do valor do saldo.
        
//         Receitas - Despesas
// */


// let cashFamily = {
//     incomes: [1050.47, 500.55, 1500.98, 5000],
//     expenses: [2500.50, 2050.82, 50, 100],
// }

// console.log(cashFamily.incomes);
// console.log(cashFamily.expenses);

// function calculateBalance() {

//     let incomes = 0;
//     let expenses = 0;

//     for(i = 0; i < cashFamily.incomes.length; i++) {
//         console.log(cashFamily.incomes[i]);
//         incomes += cashFamily.incomes[i];
//         console.log(cashFamily.expenses[i]);
//     }
//     console.log("################### " + incomes);

//     for(i = 0; i < cashFamily.expenses.length; i++) {
//         console.log(cashFamily.expenses[i]);
//         expenses += cashFamily.expenses[i];
//         console.log(cashFamily.expenses[i]);
//     }

//     let balance = incomes - expenses;
//     if(balance > 0) {
//         return "Positive Balance: " + balance.toFixed(2);
//     } else {
//         return "Negative Balance: " + balance.toFixed(2);
//     }
// }

// console.log("RESULT -> " + calculateBalance());



// or



let family = {
    incomes: [1200, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
};

//uma função para iterar e calcular a soma
function sum(array) {
    let total = 0;
    //for.....of
    for(let value of array) {
        total += value;
    }
    return total;
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);

    const total = calculateIncomes - calculateExpenses;
    const itsOk = total >= 0;
    let balanceText = "negativo";
    if(itsOk) {
        balanceText = "positivo";
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`);
}

calculateBalance()