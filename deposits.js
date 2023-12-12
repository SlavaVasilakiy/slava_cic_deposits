function calculateMonthlyInterest(principal, annualRate, months) {
	// Годовой процент в месяц
	const monthlyRate = annualRate / 12 / 100;

	// Расчет будущей суммы
	const futureValue = principal * Math.pow(1 + monthlyRate, months);

	// Расчет процентов
	const interest = futureValue - principal;

	return {
		futureValue,
		interest,
	};
}

module.exports = {
	calculateMonthlyInterest,
};
