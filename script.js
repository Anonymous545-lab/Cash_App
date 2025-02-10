let total = 0;
const transactionHistory = [];

function addTransaction() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        total += amount;
        transactionHistory.push({ type: 'Add', amount: amount });
        updateUI();
    }
}

function removeTransaction() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        total -= amount;
        transactionHistory.push({ type: 'Remove', amount: amount });
        updateUI();
    }
}

function updateUI() {
    document.getElementById('total').innerText = total.toFixed(2);
    const historyElement = document.getElementById('transaction-history-list');
    historyElement.innerHTML = '';
    transactionHistory.forEach(transaction => {
        const li = document.createElement('li');
        li.innerText = `${transaction.type}: $${transaction.amount.toFixed(2)}`;
        historyElement.appendChild(li);
    });
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('cash-register');
});
