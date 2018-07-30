// Edd Burke
// Lambda Challenge
// 23 July 2018


/* I came up with these answers in ES5 syntax, for I thought the ES6 syntax
   didn't apply to a lot of lessons until the very end of the Javascript module.
   I should mention, however, that I'm a lot more interested in using ES6 in the
   interest of using some more advanced frameworks, i.e. React, Vue.JS. In 
   particular, the forEach methods are a lot more straight-forward to use, 
   though I thought I should stick with ES5 for this challenge. I find that 
   using ES6 is sometimes problematic with some algorithm challenges I've taken 
   on, ala FreeCodeCamp, CodeFights, etc.

   Thanks for having a look!,
   Edd
*/



// 1. Write a function called helloWorld that returns the string 'Hello World!'.

function helloWorld() {
  return "Hello World!"
}

//testing!
// helloWorld();





/*
2. Write a function called lambdaSchool that has a single parameter called num.
     num will be a positive integer.
     If num is divisible by 3 return the string 'Lambda'
     If num is divisible by 5 return the string 'School'
     If num is divisible by 3 AND 5 return the string 'Lambda School' (notice the space)
     If num is NOT divisible by 3 or 5 then return num.
     Example:
             lambdaSchool(15); // returns 'Lambda School'
             lambdaSchool(8); // returns 8
*/

function lambdaSchool(num) {
  if ((num % 3 === 0) && (num % 5 === 0)) {
    return "Lambda School";
  } else if (num % 3 === 0) {
    return "Lambda";
  } else if (num % 5 === 0) {
    return "School";
  } else {
    return num;
  }
}

//testing!
// lambdaSchool(9);
// lambdaSchool(10);
// lambdaSchool(15);
// lambdaSchool(8);





/*
3. Write a function called longestString that has a single parameter called strs.
     strs will be an array of strings.
     Return the longest string that is in strs.
     If there is a tie for the longest string then return the one that occurs first.
     Example:
             longestString(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
             longestString(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
*/

function longestString(strs) {
  let longestLength = 0;
  let longestStringResult;
  
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longestLength) {
      longestLength = strs[i].length;
      longestStringResult = strs[i];
    }
  }
  return longestStringResult;
}

//testing!
// longestString(["one", "three", "five", "ninty-nine"]);





/*
4. Write a function called computeUserAverageAge that has a single parameter called users
     users is an array of user objects.
     Each user object has a property called age that is a number.
     Compute the average age of all user objects in the users array.
     Round off the decimals if needed and return the number.
     Example:
             const users = [{
               name: 'Brendan Eich',
               age: 56,
             }, {
               name: 'Linus Torvalds',
               age: 48,
             }, {
               name: 'Margaret Hamilton',
               age: 81,
             }];
             computeUserAverageAge(users); // returns 62 (This number is rounded up from 61.6666)
*/

function computeUserAverageAge(users) {
  let totalAge = 0;
  let averageAge = 0;
  
  for (let i = 0; i < users.length; i++) {
    totalAge += users[i].age;
  }
  
  averageAge = Math.round((totalAge / users.length));
  return averageAge;
}


//test array
let users = [
  {
    name: "Wes Bos",
    age: 36
  },
  {
    name: "Jen Simmons",
    age: 48
  },
  {
    name: "Bob Martin",
    age: 60
  },
  {
    name: "Chris Coyer",
    age: 41
  }
]

//testing!
// computeUserAverageAge(users);

