

// Generate a random number between 1 and 100 (inclusive) and store it in 'randomNumber'
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select various HTML elements and store them in variables
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#submit');
const numSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

// Create arrays and variables to manage the game
let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Check if the game is ongoing
if (playGame) {
  // Add a click event listener to the 'submit' button
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    // Get the user's guess and validate it
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// Function to validate the user's guess
function validateGuess(guess) {
  if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Function to check the user's guess against the random number
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg(`${prevGuess[i]} is correct!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`Number is TOO Low`);
  } else if (guess > randomNumber) {
    displayMsg(`Number is TOO High`);
  }
}

// Function to display the user's guess
function displayGuess(guess) {
  userInput.value = '';
  numSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// Function to display messages
function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

// Function to start a new game
function newGame() {
  const newGameBtn = document.querySelector('#newGame');

  newGameBtn.addEventListener('click', (e) => {
    // Generate a new random number and reset game variables
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    numSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

// Function to end the game
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
