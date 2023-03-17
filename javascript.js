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

function displayWindow(buttonValue){
    if(buttonValue === "clear"){
        document.getElementById("display").innerHTML = "";
    }
    else if(buttonValue ==="="){
        console.log(screenValue)
    }
    else {
        let screenValue = document.getElementById("display").innerHTML += buttonValue;
        console.log(screenValue);
       }
  
}




// const buttons = document.getElementsByClassName("btn");

// for (let i= 0; i<buttons.length; i++){
//     buttons[i].addEventListener('click', (e)=> {
//         let buttonValue = e.target.id;
//         displayWindow(buttonValue);
//     });
// }

//set up eventlistener for numbers
const numbers = document.querySelectorAll(".number");
numbers.forEach((e) =>{
    e.addEventListener('click', () =>{
        displayWindow(e.id);
        console.log(e.id);
    });
});







// console.log(operate(9, "+", 4));
// console.log(operate(9, "-", 4));
// console.log(operate(9, "*", 4));
// console.log(operate(9, "/", 4));


// console.log(add(2,8));
// console.log(subtract(2,8));
// console.log(multiply(2,8));
// console.log(divide(2,8));
// console.log(divide(100,5));

