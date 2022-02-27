function add(a,b) {
    return a + b;
} 

function subtract(a,b) {
    return a - b;
} 

function multiply(a,b) {
    return a * b;
} 

function divide(a,b) {
    return a / b;
} 

function operate(num1,num2,operator) {

    switch(operator) {
        case "+":
            console.log(add(num1,num2));
            break;

        case "-":
            console.log(subtract(num1,num2));
            break;
        case "*":
            console.log(multiply(num1,num2));
            break;

        case "/":
            console.log(divide(num1,num2));
            break;
    }
}

