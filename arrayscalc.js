const readline = require('readline-sync');
console.log('Welcome to the calculator!');

console.log('please enter an operator: +, -, *, /');
const op = readline.prompt();

console.log('How many numbers you want to ' + op + '?');
const countNums = readline.prompt();
const count = +countNums;

let numbers = new Array(count);
for(let i = 0; i < count; i++){
    console.log('please enter number ' + (i + 1) + ':');
    const num = readline.prompt();
    numbers[i] = +num;
  
}

let answer = numbers[0];


for(let j = 1; j < count; j++){

    if(op === '+')
    {
        answer = answer + numbers[j];
    }
    else if (op === '-')
    {
        answer = answer - numbers[j];
    }
    else if (op === '*')
    {
        answer = answer * numbers[j];
    }
    else(op === '/')
    {
        answer = answer / numbers[j];
    }
}

console.log('the answer is ' + answer);