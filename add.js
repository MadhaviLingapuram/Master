/* 1) get 2 inputs from prompt
2) give option to user for add/sub/mul/div (write 4 functions not a singlefunction)
3) execute the required operator function on numbers give in (1)
4) print output */
//practice for git hub

const readline = require('readline-sync');

function printWelcomeMessage(){
    console.log("calculator")
}

function getStringInputWithPrompt(prompt){
    console.log(prompt);
    return readline.prompt();;
}

function getNumberInputWithPrompt(prompt){
    num1 = console.log('enter number1:' + prompt);
    num2 = console.log('enter number2:' + prompt);
    return num1, num2;
}

function getanswer(Add, num1, num2){
    return Add = num1 + num2;
}

function Calculation(){
    const operator = getStringInputWithPrompt();
    const num = getNumberInputWithPrompt(num1, num2);
    const answer = getanswer(operator, num);
    console.log('the answer is:' + answer);
}

printWelcomeMessage();
while(true){

    Calculation();
}



