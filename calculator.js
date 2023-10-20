let calculation = localStorage.getItem('calculation') || '';


function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function back() {
  calculation = calculation.substring(0, calculation.length - 1);
  console.log(calculation);
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
document.querySelector('.calculation')
.innerHTML = calculation;
}

document.body.addEventListener('keydown', (event) => {
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
    calculation = eval(calculation);
    displayCalculation();
  } else if (event.key === 'Enter') {
    calculation = eval(calculation);
    displayCalculation();
  } else if (event.key === 'Backspace') {
    back();
  } else if (event.key === 'c') {
    calculation = '';
    localStorage.setItem('calculation', calculation);
    displayCalculation();
  } 
});