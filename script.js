var state = {
    balance: 500,
    income: 0,
    expense: 0,
    transactions: [
        {name: 'Salary', amount: 0, type: "income"},
        {name: 'Grocery', amount: 0, type: "expense"},
        {name: 'Guitar', amount: 0, type: "expense"},
    ]
}

var balanceEl = document.querySelector('#balance-amount');

function init(){
    balanceEl.innerHTML = `$${state.balance}`;
}

init();