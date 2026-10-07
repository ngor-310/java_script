# SpendWise - JavaScript Foundation

## Project Description
SpendWise is a financial web application that allows users to process budget information using JavaScript concepts like variables, input collection, arithmetic calculations, and structured console logging.

## JavaScript Implementation Details

### 1. Variables & Data Types
Key application variables store budgeting data:
* `totalIncome` (Number): Holds the overall income amount.
* `totalExpenses` (Number): Holds total logged expenses.
* `remainingBalance` (Number): Stores calculated net savings/deficit.
* `transactions` (Array): Collection holding detailed transaction objects.

### 2. Collecting User Input
User input is collected through interactive `prompt()` popups when clicking **"Start Budget Calculation (Prompts)"**, as well as through HTML form inputs (`input.value`). All string inputs are converted into numbers using `parseFloat()`.

### 3. Calculations
Budget calculations are performed using arithmetic subtraction:
* `remainingBalance = calculateBalance(totalIncome, totalExpenses);`

### 4. Reusable Functions
* `calculateBalance(income, expenses)`: Pure function returning the difference between income and expenses.
* `processBudget(income, expenses)`: Manages state updates and executes calculations.
* `displayConsoleResults(source)`: Formats and prints clearly labeled budgeting reports in the browser developer console.
* `updateUI()`: Synchronizes application state with DOM nodes on screen.

### 5. Console Output Display
Calculated results are logged directly to the browser console (`F12` -> `Console`) with structured headers, numerical values formatted to two decimal places (`.toFixed(2)`), and conditional budget status alerts.
