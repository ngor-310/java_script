// ==========================================
// 1. DATA STORAGE & INITIAL VARIABLES
// ==========================================
let totalIncome = 0;
let totalExpenses = 0;
let remainingBalance = 0;
let transactions = [];

// DOM Elements Selection
const startBtn = document.getElementById('start-btn');
const totalIncomeEl = document.getElementById('total-income');
const totalExpensesEl = document.getElementById('total-expenses');
const balanceEl = document.getElementById('balance');
const form = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeSelect = document.getElementById('type');
const transactionList = document.getElementById('transaction-list');

// ==========================================
// 2. REUSABLE CALCULATION FUNCTIONS
// ==========================================

/**
 * Calculates remaining balance given total income and total expenses.
 * @param {number} income 
 * @param {number} expenses 
 * @returns {number}
 */
function calculateBalance(income, expenses) {
    return income - expenses;
}

/**
 * Updates global summary variables and recalculates current balance.
 * @param {number} income 
 * @param {number} expenses 
 */
function processBudget(income, expenses) {
    totalIncome = income;
    totalExpenses = expenses;
    remainingBalance = calculateBalance(totalIncome, totalExpenses);

    displayConsoleResults("Prompt Budget Calculation");
    updateUI();
}

// ==========================================
// 3. USER INPUT VIA PROMPTS
// ==========================================

function collectUserInputPrompts() {
    console.log("--- Starting Budget Input Collection ---");

    const incomeInput = prompt("Enter your total income ($):");
    const parsedIncome = parseFloat(incomeInput);

    const expenseInput = prompt("Enter your total expenses ($):");
    const parsedExpenses = parseFloat(expenseInput);

    // Input Validation
    if (isNaN(parsedIncome) || isNaN(parsedExpenses)) {
        alert("Invalid input! Please enter valid numeric values for income and expenses.");
        console.error("Input Error: User provided non-numeric data.");
        return;
    }

    processBudget(parsedIncome, parsedExpenses);
}

// ==========================================
// 4. DISPLAY RESULTS IN BROWSER CONSOLE & UI
// ==========================================

/**
 * Clearly prints calculation results to the browser console.
 * @param {string} source 
 */
function displayConsoleResults(source) {
    console.clear();
    console.log(`========================================`);
    console.log(`       SPENDWISE BUDGET SUMMARY         `);
    console.log(`Source: ${source}`);
    console.log(`========================================`);
    console.log(`Total Income:     $${totalIncome.toFixed(2)}`);
    console.log(`Total Expenses:   $${totalExpenses.toFixed(2)}`);
    console.log(`----------------------------------------`);
    console.log(`Remaining Balance:$${remainingBalance.toFixed(2)}`);
    
    if (remainingBalance > 0) {
        console.log(`Status: You are within budget! Great job saving.`);
    } else if (remainingBalance === 0) {
        console.log(`Status: You have broken even.`);
    } else {
        console.log(`Status: Warning! You are over budget.`);
    }
    console.log(`========================================`);
}

/**
 * Updates DOM elements to render financial summary on screen.
 */
function updateUI() {
    totalIncomeEl.textContent = `$${totalIncome.toFixed(2)}`;
    totalExpensesEl.textContent = `$${totalExpenses.toFixed(2)}`;
    balanceEl.textContent = `$${remainingBalance.toFixed(2)}`;
}

// ==========================================
// 5. DYNAMIC FORM SUBMISSION HANDLER
// ==========================================

function handleFormSubmit(e) {
    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = typeSelect.value;

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid description and positive amount.');
        return;
    }

    if (type === 'income') {
        totalIncome += amount;
    } else {
        totalExpenses += amount;
    }

    remainingBalance = calculateBalance(totalIncome, totalExpenses);

    // Store transaction object
    const transaction = {
        id: Date.now(),
        description: description,
        amount: amount,
        type: type
    };
    transactions.push(transaction);

    // Update Transaction List UI
    const li = document.createElement('li');
    li.classList.add(type);
    const sign = type === 'income' ? '+' : '-';
    li.innerHTML = `
        <span>${description}</span>
        <span>${sign}$${amount.toFixed(2)}</span>
    `;
    transactionList.appendChild(li);

    // Reset Form & Update
    descriptionInput.value = '';
    amountInput.value = '';
    
    displayConsoleResults("Form Transaction Added");
    updateUI();
}

// ==========================================
// 6. EVENT LISTENERS
// ==========================================
startBtn.addEventListener('click', collectUserInputPrompts);
form.addEventListener('submit', handleFormSubmit);

console.log("SpendWise JavaScript initialized successfully.");
