// // The following arrays will be used through the questions:
const words = [ 'cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon' ];
const numbers = [ 8, 3, 22, 0, -73, 15 ];


// // Question 1: 
// // Use forEach to console.log all the words in the words array. Do not write a for loop. 
function logWords(word){
  words.forEach(function(word){
    console.log(word);
  });
}


// Question 2: Use forEach to console.log the each number in the numbers array divided by two
// It should console.log: 
// 4
// 1.5
// ...etc. 
function logHalfNumbers(){
  numbers.forEach(function(num){
    console.log(num/2);
  })
}



// Question 3: Using the getFirstLetter function below as your callback,
//             use map to create an array contaning the first letter of 
//             every word from the words array.

function getFirstLetter(word) {
    return word.charAt(0);
}

const firstLetters = words.map(getFirstLetter);




// Question 4: Use map to create an array containing the last letter of every word
//             from the words array. 

function getLastLetter(word) {
  return word.charAt(word.length-1);
}

const lastLetters = words.map(getLastLetter);





// Question 5: Use map to create an array containing the reversed version of each word
//             from the word array. For example, the first entry will be 'supmawyttac'.

const reversedWords = words.map(function(word) {
  return word.split("").reverse().join("");
}); 



// Question 6: Use map to create an array containing the absolute value of every number
//             in the numbers array.

const absoluteNumbers = numbers.map(function(number){
  return Math.abs(number);
});




// Question 7: Use map to create an array containing each number from the numbers array
//             rounded to the nearest 10. For example: 10, 0, 20, 0, etc. 

const roundedToTenNumbers = numbers.map(function(number){
  return (Math.round(number/10) * 10);
});




// Question 8: Use map to create an array that contains only the words from the words
//             array containing 's'. All other words should be replaced with null.
//             For example: 'cattywampus', 'snickersnee', null, etc. 

const wordsWithS = words.map(function(word){
  if (word.split("").indexOf("s") !== -1) {
    return word;
  } else {
    return null;
  }
});

// Stretch Questions:
// The stretch question will use the array method reduce, which was only briefly reviewed 
// in the lecture. Refer to online documentation for more information on reduce. 

// Question 9: Use reduce to sum up all of the numbers in the numbers array. 

function sum(currentTotal, nextNumber) {
  return currentTotal += nextNumber;
}

const sumTotal = numbers.reduce(sum);