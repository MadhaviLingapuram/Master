const readline = require('readline-sync');

const Addition = 'add';
const Substraction = 'minus';
const Multiplication = 'multiply';
const Division = 'divide';

function printWelcomeMessage() {
    console.log('\nWelcome to the calculator!');
    console.log('==============================');
}

function getStringInputWithPrompt(prompt) {
    console.log('\n' + prompt);
    return readline.prompt();
}

function getNumberInputWithPrompt(prompt) {
    let response;
    do {
        response = +getStringInputWithPrompt(prompt);
    } while (isNaN(response));
    return response;
}

function getOperation() {
    console.log('Which Arithmetic operation you want to do ? ');
    return getStringInputWithPrompt(`\ Addition : ${Addition} \n Substraction : ${Substraction} \n Multiplication : ${Multiplication} \n Division : ${Division} `);

}

function getNumberArray(operation) {
    const iterations = getNumberInputWithPrompt(`Pls enter the numbers you want to ${operation}`);
    let numbers = new Array(iterations);
    for (let i = 0; i < iterations; i++) {
        numbers[i] = getNumberInputWithPrompt('Please enter number ' + (i + 1) + ':');
    }
    return numbers;
}

function calculateAnswer(operation, numbers) {
    let answer = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (operation === 'add') {
            answer += numbers[i];
        } else if (operation === 'minus') {
            answer -= numbers[i];
        } else if (operation === 'multiply') {
            answer *= numbers[i];
        } else if (operation === 'divide') {
            answer /= numbers[i];
        }
    }
    return answer;
}

function performOneCalculation() {
    const operation = getOperation();
    const numbers = getNumberArray(operation);
    const answer = calculateAnswer(operation, numbers);
    console.log('\nThe answer is ' + answer);
}

printWelcomeMessage();
while (true) {
    
    performOneCalculation();
}