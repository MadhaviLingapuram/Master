//const readline = require('readline-sync');


function numberOfFactors(number)
{
    var result = [];
    for (var i =0; i <= number; i++)
    {
        if(number % i == 0)
        {
            result.push(i);
        }
    }
    var result = result.length;
    return result;
}
// printing no; of factors for a number
console.log(numberOfFactors(6));
