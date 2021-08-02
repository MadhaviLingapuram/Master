function palindromeDetection(input)
{
    var str = /[^A-Za-z0-9]/g;
    input = input.toLowerCase().replace(str, '');
    var len = input.length;
    for (var i=0; i < len/2; i++)
    {
        if(input[i] != input[len -1 -i])
        {
        return false;
        }
    }
    return true;
}
console.log(palindromeDetection('Madam'));