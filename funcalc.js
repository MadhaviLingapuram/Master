const readline = require('readline-sync');

function welcome()
{
 console.log('Welcome to the calculator!');
}

function stringinput(prompt)
{
    console.log(prompt);
    return readline.prompt();
}

function numberinput(prompt)
{
    let response;
    do{
        response = +stringinput(prompt);

      } while(isNaN(response));
      return response;

}
function operator()
{
    return stringinput('Please enter the operator: ');
}

function numbers(op)
{
    let count = numberinput('How many numbers you want to ' + op );
    let num = new Array(count);
    
    for(let i=0; i < count; i++)
    {
        num[i] = numberinput('Please enter the number ' + (i+1) + ':');

    }
    return num;
}

function calculate(op,num)
{
    let answer = num[0];
    for( let j = 1; j< num.length; j++)
    {
        if(op == '+')
        {
            answer = answer + num[j];
        }
        else if(op == '-')
        {
            answer = answer - num[j];

        }
        else if(op == '*')
        {
            answer = answer * num[j];
        }
        else if (op == '/')
        {
            answer = answer / num[j];
        }
        
    }
    return answer;
}
function performCalculation()

{
    const op = operator();
    const num = numbers(op);
    const answer = calculate(op,num);
    console.log('The answer is ' + answer);

}
welcome()
{
    while(true)
    {
        performCalculation();
    }

}



