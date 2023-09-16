const result = document.querySelector('#result')



setInterval(() => {
     let date = new Date();
     result.innerHTML = date.toLocaleTimeString()
}, 1000)