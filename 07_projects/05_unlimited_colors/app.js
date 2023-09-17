// valid hexadecimal color codes is from #000000 (black) to #FFFFFF (white). 

// generate random color

const randomColor = () => {
     const hex = '0123456789ABCDEF'
     let color = '#'
     for (let i = 0; i < 6; i++) {
          color += hex[Math.floor(Math.random() * 16)]
     }
     return color
}

// how to generate random value
// console.log(Math.floor(Math.random()* 16));
let IntervalId;

const ChangeColor = function () {
     document.body.style.backgroundColor = randomColor();

}

const startChangeColor = function () {
     if (!IntervalId) {
          IntervalId = setInterval(ChangeColor, 1000);
     }
}

const stopChangeColor = function () {
     clearInterval(IntervalId)
     IntervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangeColor)
document.querySelector('#stop').addEventListener('click', stopChangeColor)