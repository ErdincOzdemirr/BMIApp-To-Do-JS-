//BMI Calculator
document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // cm to meters

  if (!isNaN(weight) && !isNaN(height)) {
    const bmi = weight / (height * height);
    const resultElement = document.getElementById("result");

    if (bmi < 18.5) {
      resultElement.textContent = `BMI: ${bmi.toFixed(2)} Below ideal weight`;
      resultElement.style.color = "red";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      resultElement.textContent = `BMI: ${bmi.toFixed(2)} ideal weight`;
      resultElement.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
      resultElement.textContent = `BMI: ${bmi.toFixed(2)} normal weight`;
      resultElement.style.color = "blue";
    } else if (bmi >= 30 && bmi < 39.9) {
      resultElement.textContent = `BMI: ${bmi.toFixed(
        2
      )} much above the ideal weight (obese)`;
      resultElement.style.color = "orange";
    } else {
      resultElement.textContent = `BMI: ${bmi.toFixed(
        2
      )} Excessively above ideal weight (morbidly obese)`;
      resultElement.style.color = "red";
    }
  }
});
