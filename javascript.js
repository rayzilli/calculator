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
        let screenValue = document.getElementById("display").innerHTML += buttonValue;
       }
  
}

let total = [];
let number1 = ""; 
displayWindow("0");

//set up eventlistener for numbers
const numbers = document.querySelectorAll(".number");
numbers.forEach((e) =>{
    e.addEventListener('click', () =>{
        if (document.querySelector("#display").innerText === "0"){
           displayWindow("clear");
        }
        number1 = number1 + e.value; 
        displayWindow(e.value);
        console.log(e.id);
    });
});

//set up event Listener for operators
const operatorValue = document.querySelectorAll(".operator");
operatorValue.forEach((e)=>{
    e.addEventListener('click',()=>{
        total.push(number1);
        total.push(e.id);
        number1 = "";
        // displayWindow(e.id);
        displayWindow("clear");
    
    })

});

//event listener for equals
const equals = document.getElementById("=");
equals.addEventListener('click', (e) =>{
     
     displayWindow("clear");
     if (total.length <=1 ){
        console.log("wrong buddy");
     }

     else if(total.length <= 3){
        //answer if 2 numbers are used
        total.push(number1);
        let firstNumber = operate(total[0],total[1],total[2])
        displayWindow(firstNumber);
        total.pop();
     }
     else {
        //answer if more than 2 numbers are used
     total.push(number1); 
     let newTotal = operate(total[0],total[1],total[2]);
     console.log("total of first 2 numbers= " +newTotal);
     let firstNumber = total.slice(3, total.length);
     console.log(firstNumber);
     for (let i = 0; i =firstNumber.length/2; i++){
        console.log(firstNumber.length/2);
        newTotal = operate(newTotal, firstNumber[0], firstNumber[(1)]);
        console.log("newtotal " + newTotal);
        firstNumber = firstNumber.slice(2,firstNumber.length);
     }
     total.pop(); 
      displayWindow(newTotal);

    }  
   
})

const clear = document.getElementById("clear");
clear.addEventListener('click',()=>{
    console.log("clear");
    document.getElementById("display").innerHTML = "0";
    total = [];
    number1 = ""; 
})

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener('click', ()=>{
    document.getElementById("display").innerHTML = "";
    total.pop();
}) 







// newTotal = operate(newTotal, total[i],total[(i++)]);
//      newTotal = operate(newTotal, total[3],total[4]);
//      newTotal = operate(newTotal, total[5],total[6]);
//      newTotal = operate(newTotal, total[7],total[8]);




// const buttons = document.getElementsByClassName("btn");

// for (let i= 0; i<buttons.length; i++){
//     buttons[i].addEventListener('click', (e)=> {
//         let buttonValue = e.target.id;
//         displayWindow(buttonValue);
//     });
// }


// console.log(operate(9, "+", 4));
// console.log(operate(9, "-", 4));
// console.log(operate(9, "*", 4));
// console.log(operate(9, "/", 4));


// console.log(add(2,8));
// console.log(subtract(2,8));
// console.log(multiply(2,8));
// console.log(divide(2,8));
// console.log(divide(100,5));

