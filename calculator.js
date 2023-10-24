let calculation = localStorage.getItem('calculation') || '';


function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function back() {
  console.log(calculation);
  calculation = calculation.substring(0, calculation.length - 1);
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
document.querySelector('.calculation')
.innerHTML = calculation;
}

document.body.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (isNaN(event.key) === false) {
    updateCalculation(event.key);
  } else if (event.key === '+') {
    updateCalculation(' + ');
    console.log(event.key);
  } else if (event.key === '-') {
    updateCalculation(' - ');
  } else if (event.key === '*') {
    updateCalculation(' * ');
  } else if (event.key === '/') {
    updateCalculation(' / ');
  } else if (event.key === '.') {
    updateCalculation('.');
  } else if (event.key === '=') {
    calculation = eval(calculation).toString();
    displayCalculation();
  } else if (event.key === 'Enter') {
    calculation = eval(calculation).toString();
    displayCalculation();
  } else if (event.key === 'Backspace') {
    back();
  } else if (event.key === 'c') {
    calculation = '';
    localStorage.setItem('calculation', calculation);
    displayCalculation();
  } 
});