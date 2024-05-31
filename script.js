//targets the display
const display = document.querySelector("#display");

//operators

const add = (num1, num2) => num1 + num2; //add function

const subtract = (num1, num2) => num1 - num2; //subtract function

const multiply = (num1, num2) => num1 * num2; //multiply function

const divide = (num1, num2) => num1 / num2; //divide function

//declare 3 variables for number 1, operator, number 2
let firstNumber;
let operator;
let secondNumber;      

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
const displayContent = document.querySelector("#display");
displayContent.textContent = "0";
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



const audio = new Audio("pick-92276.mp3");

one.addEventListener("click", ()=>{
    if (displayContent.textContent === "0") {
        displayContent.textContent = ""
        displayContent.textContent += "1"
        }

    else if (displayContent !== null) {
        displayContent.textContent = "";
        displayContent.textContent += "1";
        audio.play();
    }
        }
    );
two.addEventListener("click", ()=>{
    if (displayContent.textContent === "0") {
        displayContent.textContent = ""
    };
    displayContent.textContent += "2";
    audio.play();}
);
three.addEventListener("click", ()=>{
    if (displayContent.textContent === "0") {
        displayContent.textContent = ""
    };
    displayContent.textContent += "3";
    
    audio.play();
    }



);
four.addEventListener("click", ()=>{
    if (displayContent.textContent === "0") {
        displayContent.textContent = ""
    };
    displayContent.textContent += "4";
    audio.play()}
);
five.addEventListener("click", ()=>{
    if (displayContent.textContent === "0") {
        displayContent.textContent = ""
    };
    displayContent.textContent += "5";
    audio.play()}
);
six.addEventListener("click", ()=>{
    if (displayContent.textContent === "0") {
        displayContent.textContent = ""
    };
    displayContent.textContent += "6";
    audio.play()
    }
);
seven.addEventListener("click", ()=>{
    if (displayContent.textContent === "0") {
        displayContent.textContent = ""
    };
    displayContent.textContent += "7";
    audio.play() 
    }
);
eight.addEventListener("click", ()=>{
    if (displayContent.textContent === "0") {
        displayContent.textContent = ""
    };
    displayContent.textContent += "8";
    audio.play()
}
)
nine.addEventListener("click", ()=>{
    if (displayContent.textContent === "0") {
        displayContent.textContent = ""
    };
    displayContent.textContent += "9";
    audio.play()}
);
zero.addEventListener("click", ()=>{
    if (displayContent.textContent === "0") {
        displayContent.textContent = ""
    };
    displayContent.textContent += "0";
    audio.play()
    }
);

//for operator buttons (add,subtract,multiply,divide),
// if displayContent ="", firstNumber = displayContent,
// and put the clicked operator
addBtn.addEventListener("click", ()=> {
    if (!firstNumber) {
        firstNumber = parseInt(displayContent.textContent);
        operator = add;
    }
   /*
    else if (firstNumber !== null && secondNumber !== null) {
        firstNumber = parseInt(displayContent.textContent);
    }
   */
    
    else {
        
        secondNumber = parseInt(displayContent.textContent);
        
        displayContent.textContent = operate(firstNumber, operator, secondNumber);
        
        
    }
})

//for equal button, firstNumber and secondNumber has to exist
equalBtn.addEventListener('click', () => {
    
   secondNumber = parseInt(displayContent.textContent);
    displayContent.textContent = operate(firstNumber, operator, secondNumber);
    
    
    
})
//for clear button just displayContent = "";
clearBtn.addEventListener("click", ()=>{
    displayContent.textContent ="0"
    firstNumber = '';
    secondNumber = '';
});
