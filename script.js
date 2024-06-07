const form = document.getElementById('interest-form');
const incomeCadenceSelect = document.getElementById('income-cadence');
const incomeAmountInput = document.getElementById('income-amount');
const currentAmountInput = document.getElementById('current-amount');
const savingsInput = document.getElementById('savings'); 
const interestRateSelect = document.getElementById('interest-rate');
const yearsInput = document.getElementById('years');
const totalSavedSpan = document.getElementById('total-saved');
const interestEarnedSpan = document.getElementById('interest-earned');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const incomeCadence = incomeCadenceSelect.value;
  const incomeAmount = parseFloat(incomeAmountInput.value);
  const currentAmount = parseFloat(currentAmountInput.value);
  const savingsAmount = parseFloat(savingsInput.value); // get absolute amount
  const interestRate = parseFloat(interestRateSelect.value)/100.0;
  const years = parseInt(yearsInput.value);
  const compoundingFrequency = document.getElementById('compounding-frequency').value;
  let total = currentAmount ;
  let totalInterest = 0;
  let monthlyIncome = savingsAmount
  switch (incomeCadence) {
    case "weekly":
      monthlyIncome *= 4;
      break;
    case "bi-weekly":
      monthlyIncome *= 2;
      break;
  }

  const months = years * 12
  const monthsPerInterestPeriod = 12/compoundingFrequency
  let monthsPassed = 0
  let accruedInterest = 0
  for (let i = 0; i < months; i++) {
    monthsPassed++
    accruedInterest += total * (interestRate / 12.0)

    if (monthsPassed >= monthsPerInterestPeriod) {
      total += accruedInterest
      totalInterest += accruedInterest
      accruedInterest = 0
      monthsPassed = 0
    }
    total += monthlyIncome
  }

  totalSavedSpan.textContent = total.toFixed(2);
  interestEarnedSpan.textContent = totalInterest.toFixed(2);
});
