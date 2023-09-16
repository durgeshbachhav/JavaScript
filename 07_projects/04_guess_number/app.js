// const random = Math.round(Math.random() *100 + 1 )
let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#submit')
const numSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true
if (playGame) {
     submit.addEventListener('click', (e) => {
          e.preventDefault();
          const guess = parseInt(userInput.value)
          console.log(guess);
          validateGuess(guess)
     })
}

function validateGuess(guess) {
     if (guess < 1) {
          alert('please enter a number greater than 1')
     }
     else if (guess > 100) {
          alert('please enter a number less than 100')
     }
     else if (isNaN(guess)) {
          alert('please enter a valid number')
     } else {
          prevGuess.push(guess);
          if (numGuess === 11) {
               displayGuess(guess)
               displayMsg(`Game Over. Random Number was ${randomNumber}`)
               endGame();
          } else {
               displayGuess(guess)
               checkGuess(guess)
          }
     }
}

function checkGuess(guess) {
     if (guess === randomNumber) {
          displayMsg(`${prevGuess[i]} is correct!`)
          endGame()
     } else if (guess < randomNumber) {
          displayMsg(`Number is TOOO Low`)
     } else if (guess > randomNumber) {
          displayMsg(`Number is TOOO High`)
     }
}

function displayGuess(guess) {
     userInput.value = ''
     numSlot.innerHTML += `${guess} , `
     numGuess++;
     remaining.innerHTML = `${11-numGuess}`

}

function displayMsg(msg) {
     lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function newGame() {
     const newGameBtn = document.querySelector('#newGame')

     newGameBtn.addEventListener('click',(e)=>{
          randomNumber =  parseInt(Math.random() * 100 + 1);
          prevGuess = [];
          numGuess = 1;
          numSlot.innerHTML = ''
          remaining.innerHTML = `${11-numGuess}`
          userInput.removeAttribute('disabled')
          startOver.removeChild(p)
          playGame = true;

     })

     
}

function endGame() {
     userInput.value = ''
     userInput.setAttribute('disabled','')
     p.classList.add('button')
     p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
     startOver.appendChild(p);
     playGame = false
     newGame()
}