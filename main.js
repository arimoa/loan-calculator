var amountEl = document.getElementById("amount");
var rateEl = document.getElementById("rate");
var monthsEl = document.getElementById("months");
var resultEl = document.getElementById("final-result");
var amount, rate, months, result;

amountEl.addEventListener("input", (e) => {
  amount = e.target.value;
  result = (amount * (1 + rate / 100)) / months;
  if (rateEl.value !== " " && monthsEl.value !== "") {
    resultEl.innerHTML = result.toFixed(2) + " $";
  }
});
rateEl.addEventListener("input", (e) => {
  rate = e.target.value;
  result = (amount * (1 + rate / 100)) / months;
  if (amountEl.value !== " " && monthsEl.value !== "") {
    resultEl.innerHTML = result.toFixed(2) + " $";
  }
});
monthsEl.addEventListener("input", (e) => {
  months = e.target.value;
  result = (amount * (1 + rate / 100)) / months;
  if ((amountEl.value !== " ") & (rateEl.value !== "")) {
    resultEl.innerHTML = result.toFixed(2) + " $";
  }
});
