const tipBtn = document.querySelector('#tip');
const calcBtn = document.querySelector('#calculate');

tipBtn.addEventListener('click', showTipOptions);
calcBtn.addEventListener('click', calculateBill);

function showTipOptions(e) {
  const tipOptions = document.querySelector('#tipOptions');

  tipOptions.classList.remove('hideTips');

  e.preventDefault();
}

function calculateBill(e) {
  const enteredBill = document.querySelector('#bill').value.trim();
  const enteredNumPeople = document.querySelector('#numPeople').value.trim();
  const selectedTip = Number(document.querySelector('#tipOptions').value);
  const results = document.querySelector('.resultsContainer');

  if (enteredBill === "" || enteredNumPeople === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please provide both a bill amount and a number of people.",
    });
  } else {

    const bill = Number(enteredBill);
    const numPeople = Number(enteredNumPeople);

    if (isNaN(bill) || isNaN(numPeople)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Only numeric values are accepted.",
      });
    } else if (bill < 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "A bill should be higher than 0.",
      });
    } else if (numPeople < 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The amount of people cannot be less than 1.",
      });
    } else {

      let billPerPerson = bill / numPeople;
      let tipPerPerson = bill * selectedTip / numPeople;
      let totalPerPerson = billPerPerson + tipPerPerson;

      results.classList.remove('hideResults');
    
      document.querySelector('#resultBill').textContent = billPerPerson.toFixed(2);
      document.querySelector('#resultTip').textContent = tipPerPerson.toFixed(2);
      document.querySelector('#resultTotal').textContent = totalPerPerson.toFixed(2);

    } 
  }

  e.preventDefault();
}