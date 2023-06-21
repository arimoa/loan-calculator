var amountEl = document.getElementById("amount");
var rateEl = document.getElementById("rate");
var monthsEl = document.getElementById("months");
var resultEl = document.getElementById("final-result");
var amount, rate, months, result;

amountEl.addEventListener("input", (e) => {
  amount = e.target.value;

  if (amount > 0) {
    result = (amount * (1 + rate / 100)) / months;
  } else {
    window.alert("Loan amount can not be lower than 1$");
    amount = 1;
    e.target.value = 1;
    result = (amount * (1 + rate / 100)) / months;
  }
  if (monthsEl.value !== " " && rateEl.value !== "") {
    resultEl.innerHTML = result.toFixed(2) + " $";
  }
});

rateEl.addEventListener("input", (e) => {
  rate = e.target.value;

  if (rate <= 100 && rate >= 0) {
    result = (amount * (1 + rate / 100)) / months;
  } else {
    window.alert("percentage can not be lower than 0% or higher than 100%");
    rate = 0;
    e.target.value = 0;
    result = (amount * (1 + rate / 100)) / months;
  }
  if (amountEl.value !== " " && months.value !== "") {
    resultEl.innerHTML = result.toFixed(2) + " $";
  }
});

monthsEl.addEventListener("input", (e) => {
  months = e.target.value;

  if (months >= 1) {
    result = (amount * (1 + rate / 100)) / months;
  } else {
    window.alert("months can not be lower than 1");
    months = 1;
    e.target.value = 1;
    result = (amount * (1 + rate / 100)) / months;
  }
  if (amountEl.value !== " " && rateEl.value !== "") {
    resultEl.innerHTML = result.toFixed(2) + " $";
  }
});
