let total = "";
let number1 = ""; 
let operator = "";
displayWindow("0");
let isEqual = false; 


function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
     return num1 * num2;
}

function divide(num1, num2){
      return num1 / num2;
}


function operate(num1, operator, num2){
    switch(operator){
   case "+":
     let addition = add(Number(num1), Number(num2));
     return addition
   case "-":
    let subtraction = subtract(num1,num2);
    return subtraction; 
   case "x":
    let multiplication = multiply(num1, num2)

    console.log(multiplication);
    return multiplication;
   case "/":
    let division = divide(Number(num1),Number(num2));
    return division; 
    }

}

function displayWindow(buttonValue){
    if(buttonValue === "clear"){
        document.getElementById("display").innerHTML = "";

    }
    else {
        let screenValue = document.getElementById("display").innerHTML + buttonValue;
        document.getElementById("display").innerHTML = screenValue;
       }
  
}


//set up eventlistener for numbers
const numbers = document.querySelectorAll(".number");
numbers.forEach((e) =>{
    e.addEventListener('click', () =>{
        displayWindow("clear");
        number1 = number1 + e.value; 
        displayWindow(number1);
    });
});

//set up event Listener for operators
const operatorValue = document.querySelectorAll(".operator");
operatorValue.forEach((e)=>{
    e.addEventListener('click',()=>{
        if(isEqual){
            number1 = "";
            isEqual = true; 
            operator = e.id;
        }
        
      else if (total == ""){
        total = number1;
        number1 = "";
        operator = e.id;
        // displayWindow("clear");
        // displayWindow(total);
      }
      else{
        total = operate(total,operator,number1);
        number1 = "";
        operator = e.id; 
        displayWindow("clear");
        displayWindow(total);   
        console.log(total);
        console.log(number1);  
      }
    })

});

//event listener for equals
const equals = document.getElementById("=");
equals.addEventListener('click', (e) =>{
    isEqual = true;
    if(total == "" & number1 == 0){
        displayWindow ("clear");
        displayWindow("0");
    }
    else{
    total = operate(total,operator,number1);
    displayWindow("clear");
    displayWindow(total);  
    }
   
})

const clear = document.getElementById("clear");
clear.addEventListener('click',()=>{
    total = "";
    number1 = ""; 
    operator = "";
    displayWindow("0");
    isEqual = false;


})

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener('click', ()=>{
    number1 = number1.slice(0,-1);
    displayWindow("clear");
    displayWindow(number1);   
}) 








