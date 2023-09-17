// valid hexadecimal color codes is from #000000 (black) to #FFFFFF (white). 

// Function to generate a random hexadecimal color code
const randomColor = () => {
     const hex = '0123456789ABCDEF'; // Valid hexadecimal characters
     let color = '#'; // Initialize color with #
     for (let i = 0; i < 6; i++) {
          color += hex[Math.floor(Math.random() * 16)]; // Randomly select characters from hex
     }
     return color;
}

// Function to change the background color of the body
const ChangeColor = function () {
     document.body.style.backgroundColor = randomColor();
}

let IntervalId; // Initialize an interval ID variable

// Function to start changing the background color at regular intervals
const startChangeColor = function () {
     if (!IntervalId) { // Check if the interval is not already running
          IntervalId = setInterval(ChangeColor, 1000); // Start the interval with ChangeColor function
     }
}

// Function to stop changing the background color
const stopChangeColor = function () {
     clearInterval(IntervalId); // Clear the interval
     IntervalId = null; // Set interval ID to null to indicate it's stopped
}

// Event listeners for start and stop buttons
document.querySelector('#start').addEventListener('click', startChangeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);
