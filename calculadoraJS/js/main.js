const number1 = document.querySelector('[id="number1"]');
const number2 = document.querySelector('[id="number2"]');

const btnPlus = document.querySelector('[id="btn-plus"]');
const btnTimes = document.querySelector('[id="btn-times"]');

const result = document.querySelector('[id="result-box"]');
const btnClear = document.querySelector('[id="btn-clear"]');


btnPlus.addEventListener('click', handleSomaClick);
btnTimes.addEventListener('click', handleMultClick);
btnClear.addEventListener('click', handleClearClick);

function handleClearClick(){
result.innerHTML="0";
   
}

function handleSomaClick(event){
event.preventDefault();
 soma =  Number(number1.value) + Number(number2.value); 
 result.innerHTML="";
 console.log(soma); 
 result.append(soma); 


const n1 = number1.value;
const n2 = number2.value;
 function isNumber(n1) {
    return !isNaN(parseFloat(n1)) && isFinite(n1);
}
    if (isNumber(n1) == true ){
        number1.classList.remove("input-error"); 
    }
    else(number1.classList.add("input-error"));

    function isNumber(n2) {
        return !isNaN(parseFloat(n2)) && isFinite(n2);
    }
        if (isNumber(n2) == true ){
            number2.classList.remove("input-error"); 
        }
        else(number2.classList.add("input-error"));

    }


function handleMultClick(event){
    event.preventDefault();
    multiplica = Number(number1.value) * Number(number2.value); 
    result.innerHTML="";
    result.append(multiplica); 

    const n1 = number1.value;
    const n2 = number2.value;
 function isNumber(n1) {
    return !isNaN(parseFloat(n1)) && isFinite(n1);
}
    if (isNumber(n1) == true ){
        number1.classList.remove("input-error"); 
    }
    else(number1.classList.add("input-error"));

    function isNumber(n2) {
        return !isNaN(parseFloat(n2)) && isFinite(n2);
    }
        if (isNumber(n2) == true ){
            number2.classList.remove("input-error"); 
        }
        else(number2.classList.add("input-error"));

    }
         





