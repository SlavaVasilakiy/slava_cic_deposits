# Slava's CIC Deposits Library

Привет, это библиотека для работы с депозитами!

## Установка

Для установки библиотеки, выполните следующую команду:

```bash
npm install slava_cic_deposits
```

## Использование

Пример использования библиотеки в расчете процентов по депозиту:

```javascript
const { calculateMonthlyInterest } = require('slava_cic_deposits');

const principal = 1000;
const annualRate = 5;
const months = 12;

const result = calculateMonthlyInterest(principal, annualRate, months);

console.log(`Сумма через ${months} месяцев: ${result.futureValue.toFixed(2)}`);
console.log(`Начисленные проценты: ${result.interest.toFixed(2)}`);
```

## API

`calculateMonthlyInterest(principal, annualRate, months)`<br>
Рассчитывает будущую сумму и начисленные проценты для депозита.

`principal`: Сумма вклада.<br>
`annualRate`: Годовой процент.<br>
`months`: Срок в месяцах.<br>

Возвращает объект с полями:<br>

`futureValue`: Будущая сумма депозита.<br>
`interest`: Начисленные проценты.<br>
