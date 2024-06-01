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

one.addEventListener("click", ()=>{
    if (display.textContent === "0") {
        display.textContent = ""
        display.textContent += "1"
        displayFormula.textContent += "1"
        }

    else if (display !== null) {

        display.textContent += "1";
        displayFormula.textContent += "1";
        audio.play();
    }
        }
    );
two.addEventListener("click", ()=>{
    if (display.textContent === "0") {
        display.textContent = ""
    };
    display.textContent += "2";
    audio.play();}
);
three.addEventListener("click", ()=>{
    if (display.textContent === "0") {
        display.textContent = ""
    };
    display.textContent += "3";
    
    audio.play();
    }



);
four.addEventListener("click", ()=>{
    if (display.textContent === "0") {
        display.textContent = ""
    };
    display.textContent += "4";
    audio.play()}
);
five.addEventListener("click", ()=>{
    if (display.textContent === "0") {
        display.textContent = ""
    };
    display.textContent += "5";
    audio.play()}
);
six.addEventListener("click", ()=>{
    if (display.textContent === "0") {
        display.textContent = ""
    };
    display.textContent += "6";
    audio.play()
    }
);
seven.addEventListener("click", ()=>{
    if (display.textContent === "0") {
        display.textContent = ""
    };
    display.textContent += "7";
    audio.play() 
    }
);
eight.addEventListener("click", ()=>{
    if (display.textContent === "0") {
        display.textContent = ""
    };
    display.textContent += "8";
    audio.play()
}
)
nine.addEventListener("click", ()=>{
    if (display.textContent === "0") {
        display.textContent = ""
    };
    display.textContent += "9";
    audio.play()}
);
zero.addEventListener("click", ()=>{
    if (display.textContent === "0") {
        display.textContent = ""
    };
    display.textContent += "0";
    audio.play()
    }
);

//for operator buttons (add,subtract,multiply,divide),
// if display ="", firstNumber = display,
// and put the clicked operator
//BUG: pressing equal more than once adds firstNumber each time;

addBtn.addEventListener("click", ()=> {
    if (operator === undefined) { //beginning of equation, bug: when i try 1 + 1 + 1,
        // the second + hits !firstNumber, so display = '' 
        firstNumber = parseInt(display.textContent); //sets first number  
        operator = add; // sets operator
        display.textContent = '';
        console.log('hello')
    }
   
    
    else if (sum !== undefined) { // this is to make 1 + 1 = 2, + 1 = 3 to work
        firstNumber = sum;
        secondNumber = null;
        operator = add;
        display.textContent = '';
        console.log("hi");
    }

    
    else {
        
        secondNumber = parseInt(display.textContent);
        operator = add;
        sum = operate(firstNumber, operator, secondNumber);
        firstNumber = sum;
        display.textContent = '';
        
    }
})

subtractBtn.addEventListener("click", () => {
    if (!firstNumber) {
        firstNumber = parseInt(display.textContent);
        operator = subtract;
        display.textContent = '';

    }
    else if(sum !== null) {
        firstNumber = sum;
        secondNumber = null;
        operator = subtract;
        display.textContent = '';

    }

    else {
        secondNumber = parseInt(display.textContent);
        sum = operate(firstNumber, operator, secondNumber);
        display.textContent = sum;
    }
}) 

//for equal button, firstNumber and secondNumber has to exist
equalBtn.addEventListener('click', () => {
    
   secondNumber = parseInt(display.textContent);
    sum = operate(firstNumber, operator, secondNumber);
    display.textContent = sum;
    
    
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
