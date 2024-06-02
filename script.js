//targets the display

//operators

const add = (num1, num2) => num1 + num2; //add function

const subtract = (num1, num2) => num1 - num2; //subtract function

const multiply = (num1, num2) => num1 * num2; //multiply function

const divide = (num1, num2) => num1 / num2; //divide function

//declare 3 variables for number 1, operator, number 2
let firstNumber;
let operator;
let secondNumber;      
let sum;

//create a function operate, with 3 params, num1, operator, num2
/*const formula = {
    number1: firstNumber,
    operator: operator,
    number2: secondNumber
} */
function operate(firstNumber, operator, SecondNumber) {
    return operator(firstNumber,SecondNumber)
}

// i click any number, multiple number as a string, then later convert to int
// next i click operator, first it will add the number above to num1

//buttons
const display = document.querySelector("#display");
display.textContent = "0";
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const clearBtn = document.querySelector("#clear");
const negativeBtn = document.querySelector("#plusminus");
const percentageBtn = document.querySelector("#percentage");
const decimalBtn = document.querySelector("#decimal");
const equalBtn = document.querySelector("#equal")
const displayFormula = document.querySelector('#formula');



const audio = new Audio("pick-92276.mp3");
let clearDisplay = true;// we need to clear display every time an operator is added
//this way, display still shows firstNumber,


//num buttons
one.addEventListener("click", ()=>{
    if (clearDisplay === true) {
        display.textContent = ""
        display.textContent += "1"
        clearDisplay = false;  //change to false, so we can add more numbers after. 
    }

    else {
        display.textContent += "1";
    }
}
    );
two.addEventListener("click", ()=>{
    if (clearDisplay === true) {
        display.textContent = ""
        display.textContent += "2"
        clearDisplay = false;   
    }

    else {
        display.textContent += "2";
    }}
);
three.addEventListener("click", ()=>{
    if (clearDisplay === true) {
        display.textContent = ""
        display.textContent += "3"
        clearDisplay = false;   
    }

    else {
        display.textContent += "3";
    }
    }



);
four.addEventListener("click", ()=>{
    if (clearDisplay === true) {
        display.textContent = ""
        display.textContent += "4"
        clearDisplay = false;   
    }

    else {
        display.textContent += "4";
    }}
);
five.addEventListener("click", ()=>{
    if (clearDisplay === true) {
        display.textContent = ""
        display.textContent += "5"
        clearDisplay = false;   
    }

    else {
        display.textContent += "5";
    }}
);
six.addEventListener("click", ()=>{
    if (clearDisplay === true) {
        display.textContent = ""
        display.textContent += "6"
        clearDisplay = false;   
    }

    else {
        display.textContent += "6";
    }
    }
);
seven.addEventListener("click", ()=>{
    if (clearDisplay === true) {
        display.textContent = ""
        display.textContent += "7"
        clearDisplay = false;   
    }

    else {
        display.textContent += "7";
    }
    }

);
eight.addEventListener("click", ()=>{
    if (clearDisplay === true) {
        display.textContent = ""
        display.textContent += "8"
        clearDisplay = false;   
    }

    else {
        display.textContent += "8";
    }
}
)
nine.addEventListener("click", ()=>{
    if (clearDisplay === true) {
        display.textContent = ""
        display.textContent += "9"
        clearDisplay = false;   
    }

    else {
        display.textContent += "9";
    }}
);
zero.addEventListener("click", ()=>{
    if (clearDisplay === true) {
        display.textContent = ""
        display.textContent += "0"
        clearDisplay = false;   
    }

    else {
        display.textContent += "0";
    }
    }
);

decimalBtn.addEventListener("click", ()=> {
    if (clearDisplay === true) {
        display.textContent = "";
        display.textContent += ".";
        clearDisplay = false;
        
    }
    else {display.textContent += "."}
})

//for operator buttons (add,subtract,multiply,divide),
// if display ="", firstNumber = display,
// and put the clicked operator
//BUG: pressing equal more than once adds firstNumber each time;

addBtn.addEventListener("click", ()=> {
    if (!operator) { //if operator doesnt exist, set firstNumber to display,operator to add, and next number input clears the display first.
        firstNumber = parseFloat(display.textContent);
        operator = add;
        clearDisplay = true;//clearDisplay sets back to true, so that we can add secondNumber
    }
   
    
    
    
    else {
        
        secondNumber = parseFloat(display.textContent);
        //if operator already exists, add secondNumber to complete the formula
        console.log("ho")
        sum = operate(firstNumber, operator, secondNumber);
        firstNumber = sum;
        display.textContent = sum;
        clearDisplay = true;
        secondNumber = undefined;

    }
})

subtractBtn.addEventListener("click", () => {
    if (!operator) { 
        firstNumber = parseFloat(display.textContent);
        operator = subtract;
        clearDisplay = true;
    }
   
    
    
    
    else {
        
        secondNumber = parseFloat(display.textContent);
        
        console.log("ho")
        sum = operate(firstNumber, operator, secondNumber);
        firstNumber = sum;
        display.textContent = sum;
        clearDisplay = true;
        secondNumber = undefined;

    }
}) 
multiplyBtn.addEventListener("click", () => {
    if (!operator) { 
        firstNumber = parseFloat(display.textContent);
        operator = multiply;
        clearDisplay = true;
    }
   
    
    
    
    else {
        
        secondNumber = parseFloat(display.textContent);
        
        console.log("ho")
        sum = operate(firstNumber, operator, secondNumber);
        firstNumber = sum;
        display.textContent = sum;
        clearDisplay = true;
        secondNumber = undefined;

    }
});

divideBtn.addEventListener("click", () => {
    if (!operator) { 
        firstNumber = parseFloat(display.textContent);
        operator = divide;
        clearDisplay = true;
    }
   
    
    
    
    else {
        
        secondNumber = parseFloat(display.textContent);
        
        console.log("ho")
        sum = operate(firstNumber, operator, secondNumber);
        firstNumber = sum;
        display.textContent = sum;
        clearDisplay = true;
        secondNumber = undefined;

    }
})
percentageBtn.addEventListener("click", () => {
    firstNumber = parseFloat(display.textContent);
    sum = firstNumber / 100;
    display.textContent = sum;
    firstNumber = sum;
    operator = undefined;
    secondNumber = undefined;
    clearDisplay = true;
})
negativeBtn.addEventListener("click", () => {
    firstNumber = parseFloat(display.textContent);
    sum = firstNumber - (firstNumber * 2);
    display.textContent = sum;
    firstNumber = sum;
    operator = undefined;
    secondNumber = undefined;
    cleraDisplay = true;
})
//for equal button, firstNumber and secondNumber has to exist
equalBtn.addEventListener('click', () => {
    
   secondNumber = parseFloat(display.textContent);
   
    sum = operate(firstNumber, operator, secondNumber);
    display.textContent = sum;
    firstNumber = sum;
    operator = undefined;//we remove operator so that the loop works.
    secondNumber = undefined;
    clearDisplay = true;
    
    
})
//for clear button just display = "";
clearBtn.addEventListener("click", ()=>{
    display.textContent ="0";
    displayFormula.textContent = '';
    firstNumber = undefined;//this works, total reset, so add can work as if page is refreshed
    secondNumber = undefined;
    sum = undefined;
    operator = undefined;
});
