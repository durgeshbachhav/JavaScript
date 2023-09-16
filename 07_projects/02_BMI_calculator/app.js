// bmi formula = bmi = (weight / ((height * height) / 10000));
const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
     e.preventDefault();
     
     const height = document.querySelector('#height').value;
     const weight = document.querySelector('#weight').value;
     const results = document.querySelector('#results')
     const category = document.querySelector('#category')

     if(weight <= 0 || weight === "" || isNaN(weight)){
          results.innerHTML = 'please enter valid weight'
     }
     else if(height <= 0 || height === "" || isNaN(height)){
          results.innerHTML = 'please enter valid height'
     }else{
          const bmi= (weight / ((height * height) / 10000)).toFixed(2);
          results.innerHTML = `<span>${bmi}</span>`
          
          if(bmi <= 18.6){
               category.innerHTML = 'lowerweight'
          }else if (bmi >18.6 && bmi <=24.9){
               category.innerHTML = 'normal weight'
          }else{
               category.innerHTML ='overweight';
          }
     }




})