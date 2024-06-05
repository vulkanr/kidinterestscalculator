const form = document.getElementById('interest-form');
const incomeInput = document.getElementById('income');
const savingsRange = document.getElementById('savings-percent');
const savingsValue = document.getElementById('savings-percent-value');
const interestRateSelect = document.getElementById('interest-rate');
const yearsInput = document.getElementById('years');
const totalSavedSpan = document.getElementById('total-saved');
const interestEarnedSpan = document.getElementById('interest-earned');

savingsRange.addEventListener('input', function() {
  savingsValue.textContent = this.value + '%';
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const income = parseFloat(incomeInput.value);
  const savingsPercent = parseFloat(savingsRange.value) / 100;
  const interestRate = parseFloat(interestRateSelect.value);
  const years = parseInt(yearsInput.value);

  let total = income * savingsPercent;
  let interestEarned = 0;

  for (let i = 1; i <= years; i++) {
    interestEarned += total * interestRate;
    total += interestEarned + (income * savingsPercent);
  }

  totalSavedSpan.textContent = total.toFixed(2);
  interestEarnedSpan.textContent = interest

