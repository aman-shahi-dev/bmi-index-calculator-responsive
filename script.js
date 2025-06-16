const weight = document.getElementById('weightInput');
const height = document.getElementById('heightInput');
const result = document.getElementById('result');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');

calculateBtn.addEventListener('click', () => {
  const weightVal = Number(weight.value);
  const heightVal = Number(height.value);

  if (
    isNaN(weightVal) ||
    isNaN(heightVal) ||
    weightVal <= 0 ||
    heightVal <= 0 ||
    heightVal < 50 ||
    weightVal < 10
  ) {
    result.innerText = `BMI Index: Please enter valid numbers`;
    result.style.color = 'white';
  } else {
    const bmi = weightVal / ((heightVal / 100) ** 2);
    const category = getCategory(bmi);
    result.style.color = category.color;
    result.innerText = `BMI Index: ${bmi.toFixed(2)} (${category.label})`;
  }
});

resetBtn.addEventListener('click', () => {
  weight.value = '';
  height.value = '';
  result.innerText = `BMI Index: `;
  result.style.color = 'white';
});

function getCategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: 'green' };
  else if (bmi < 25) return { label: 'Normal', color: 'darkgreen' };
  else if (bmi < 30) return { label: 'Overweight', color: 'orange' };
  else return { label: 'Obese', color: 'red' };
}
