const { calculateMonthlyInterest } = require('./deposits');

const principal = 1000; // Сумма вклада
const annualRate = 5; // Годовой процент
const months = 12; // Срок в месяцах

const result = calculateMonthlyInterest(principal, annualRate, months);

console.log(`Сумма через ${months} месяцев: ${result.futureValue.toFixed(2)}`);
console.log(`Начисленные проценты: ${result.interest.toFixed(2)}`);
