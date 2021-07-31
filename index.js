const readline = require('readline-sync');
console.log('Welcome to calculator!');

console.log('enter an operator:+,-,*,/');
const op = readline.prompt();
//let op =+oper;
//console.log(op);

console.log('enter first number:');
const num1 = readline.prompt();  //intakes input
const a = +num1;

console.log('enter second number:');
const num2 = readline.prompt();  //intakes input
const b = +num2;

if(op === '+'){
const sum = a + b;
console.log('the sum of two numbers is:' + sum);
}
else if(op === '-')
{
    const diff = a - b;
console.log('the difference of two numbers is:' + diff);

}
else if(op === '*'){
    const prod = a * b;
    console.log('the product of two numbers a*b =' + prod);
}
else{
    const div = a / b;
    console.log('the division of two numbers is:' + div);
}

