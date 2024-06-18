let display = document.getElementById('display')
let displayValue = '';

document.querySelector('.buttons').addEventListener('click',function(event){
    let target = event.target;
    
    if(target.classList.contains('number')){
        appendNumber(target.textContent);
    }
    else if(target.classList.contains('operator')){
        appendOperator(target.dataset.operator);
    }
    else if(target.classList.contains('clear')){
        clearDisplay(target.textContent);
    }
    else if(target.classList.contains('delete')){
        deleteLast(target.textContent)
    }
    else if(target.classList.contains('equal')){
        calculate(target.textContent)
    }


function appendNumber(number){
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    display.textContent = displayValue;
}
})

function appendOperator(operator){
    if(displayValue === '')return;
    displayValue +=`${operator}`;
    display.textContent = displayValue;
}

function clearDisplay(){
    displayValue = ''
    display.textContent = '0'
}

function deleteLast(){
    displayValue = displayValue.slice(0,-1)
    if(displayValue === ''){
        display.textContent = ''
    }
    else{
        display.textContent = displayValue
    }
}

function calculate(){
    try {
        displayValue = eval(displayValue.replace(/x/g,'*').replace(/÷/g,'/'))
        display.textContent = displayValue;
        displayValue = displayValue.toString();
    } catch{
        display.textContent  = ''
        displayValue = ''
    }
}