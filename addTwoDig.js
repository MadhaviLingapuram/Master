/* const readline = require('readline-sync');

function addTwoDigits(n)
{

   // console.log('hi');
    
    //let num ;
    if(9 < n < 100)
    {
        //let a = 2;
       // let b = 5;
       let a = n/10;
        //console.log(a);
        let b= a - (n*10);
        console.log(b);
        let c = a+b;
        return c;
    }
    
    
}
console.log(addTwoDigits(25));
 */

//console.log((2 + 10/2));
//console.log(7 % 10);



let spaceship = {
    crew: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 
   
  // for...in
  for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
  }