let clear = document.querySelector("#clear-btn");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current")

//numbers
numbers.forEach( (number) => number.addEventListener("click",function(e){
       handleNumber(e.target.textContent)
     })) 

     let currentValue = '';

function handleNumber(num){
  if(currentValue.length<=12){
    
    currentValue += num;
    currentScreen.textContent = currentValue 
 

  }
}


//operators
let operator = '';
let previousValue = '';
operators.forEach((op) => op.addEventListener("click",function (e){
handleOperator(e.target.textContent)
}))

function handleOperator(op){
     operator = op;
     previousValue = currentValue;
     currentValue = ''
     previousScreen.textContent = previousValue + "" + operator;
     currentScreen.textContent = currentValue;
    
}

//cleart the screen:
clear.addEventListener("click",function (){
    previousValue = ''
    currentValue = ''
    operator = ''
    previousScreen.textContent = previousValue
    currentScreen.textContent = currentValue;

})

//for doing calculation:
equal.addEventListener("click",function(){

    if(currentValue != '' && previousValue !=''){
    calculate();
    previousValue = previousValue.toString()
    currentValue = currentValue.toString()
    
    previousScreen.textContent = ''
    
    currentScreen.textContent = currentValue;

}
});

function calculate(){
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)
    if(operator === "+"){
       currentValue += previousValue;
     }
     else if (operator === "-"){
        currentValue -= previousValue;
     }  else if (operator === "X"){
        currentValue *= previousValue;
     }  else{
        currentValue /= previousValue;
     }

}





decimal.addEventListener("click",function(){
    if(!currentValue.includes(".")){
        currentValue += '.';
        currentScreen.textContent = currentValue
    }
})
