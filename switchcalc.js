const readline = require('readline-sync');
console.log('Welcome to the calculator');

console.log('Enter an operator: +, -, *, /');
const op = readline.prompt();

console.log('Enter first number: ');
const num1 = readline.prompt();
const a = +num1;

console.log('Enter second number: ');
const num2 = readline.prompt();
const b = +num2;
 
switch(op){
    case '+':
        const sum = a + b;
    console.log('the sum of two numbers =' + sum);
    break;

    case '-':
        const diff = a - b;
    console.log('the diff of two numbers =' + diff);
    break;

    case '*':
        const prod = a * b;
    console.log('the prod of two numbers =' + prod);
    break;
default:
        const div = a / b;
    console.log('the division of two numbers =' + div);
    break;
}