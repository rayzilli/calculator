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
     let addition = add(num1, num2);
     return addition
   case "-":
    let subtraction = subtract(num1,num2);
    return subtraction; 
   case "*":
    let multiplication = multiply(num1, num2)
    return multiplication;
   case "/":
    let division = divide(num1,num2);
    return division; 
    }

}

const buttons = document.getElementsByClassName("btn");
console.log(buttons);

for (let i= 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', (e)=> {
        console.log("fucker");
        let buttonValue = e.target.id;
        console.log(buttonValue);
    });
}







// console.log(operate(9, "+", 4));
// console.log(operate(9, "-", 4));
// console.log(operate(9, "*", 4));
// console.log(operate(9, "/", 4));


// console.log(add(2,8));
// console.log(subtract(2,8));
// console.log(multiply(2,8));
// console.log(divide(2,8));
// console.log(divide(100,5));

