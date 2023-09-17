// Select the form element in the HTML document
const form = document.querySelector('form');

// Add an event listener for the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the values of height, weight, and result elements from the HTML
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const results = document.querySelector('#results');
  const category = document.querySelector('#category');

  // Check if weight is invalid (less than or equal to 0, empty, or not a number)
  if (weight <= 0 || weight === "" || isNaN(weight)) {
    results.innerHTML = 'Please enter valid weight';
  }
  // Check if height is invalid (less than or equal to 0, empty, or not a number)
  else if (height <= 0 || height === "" || isNaN(height)) {
    results.innerHTML = 'Please enter valid height';
  } else {
    // Calculate BMI using the formula: bmi = (weight / ((height * height) / 10000))
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Display the calculated BMI in the results element
    results.innerHTML = `<span>${bmi}</span>`;

    // Determine the BMI category and display it in the category element
    if (bmi <= 18.6) {
      category.innerHTML = 'Underweight';
    } else if (bmi > 18.6 && bmi <= 24.9) {
      category.innerHTML = 'Normal Weight';
    } else {
      category.innerHTML = 'Overweight';
    }
  }
});
