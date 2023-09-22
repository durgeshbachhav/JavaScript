

const btn = document.querySelector('#submit').addEventListener('click',(e)=>{
     e.preventDefault();
     const input = document.querySelector('#input').value


const result = document.querySelector('.result')
const newLi = document.createElement('li')
newLi.innerHTML=`${input}`
result.append(newLi)

document.querySelector('#input').value = ''
newLi.addEventListener('click',(e)=>{
     newLi.remove()
})

})
