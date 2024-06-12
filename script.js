const forms = document.querySelector("form")
let height ;
let weight;
let results;

forms.addEventListener('submit' , function(e){
    e.preventDefault();
   height = parseInt(document.querySelector('#height').value)
   weight = parseInt(document.querySelector('#weight').value)
   results = document.querySelector('#results');

if(height== '' || height < 0 || isNaN(height)){
    results.innerHTML = `please enter a valid number ${height}`
}
else if(weight== '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please enter a valid number ${weight}`
}
else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = bmi;
}


})