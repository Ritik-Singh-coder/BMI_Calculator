const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
e.preventDefault();


    const Height = parseInt(document.querySelector('#height').value);
    const Weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    result.style.fontWeight = 'bold';


    if(Height === "" || Height < 0 || isNaN(Height)){
         result.innerHTML = `Please Enter a valid ${Height}`;   


    }
    if(Weight === "" || Weight < 0 || isNaN(Weight)){
        result.innerHTML = `Please Enter a valid ${Weight}`;       
  }
  else{
    const bmi = (Weight/((Height*Height)/10000)).toFixed(2);
    result.innerHTML = `<p>${bmi}</p>`;
  }

});




