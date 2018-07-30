
const _replaceMe_ = null;

// Remove _replaceMe_ and add your own code so that each variable is the type that its name indicates
const numberVar = 42;
const stringVar = "forty-two";
const booleanVar = true;
const nullVar = null;
const undefinedVar = undefined;

// Remove _replaceMe_ and use math operators to assign the following variables. Use Math methods where ever possible. 
const pi = 3.1415926;
const piPlusOne = pi + 1;
const piMinusOne = pi - 1;
const piDividedByThree = pi / 3;
const piSquared = Math.pow(pi, 2);
const piRoundedDown = Math.floor(pi);
const piRoundedUp = Math.ceil(pi);

// Create an if-else statement that will randomly log "Marco" half of the time and "Polo" the other half.  
const random = Math.random();

if (random > .5) {
  console.log("Marco");
} else {
  console.log("Polo");
}

// Remove _replaceMe_ and assign the variables below using x and y. 
const x = 7.5;
const y = -15;
const isXLessThanY = x < y;
const xMinusY = x - y;
const yDividedByX = y / x;
const xAsAString = x.toString();
const YToThePowerOfX = Math.pow(y, x);
const yRoundedUp = Math.ceil(y);

//move the console log at the start of the code to greet Evelyn. Do not modify anything else. 
let mysteryVar = 'start value';

const name = 'Evelyn';
const greeting1 = 'Good morrow';
const greeting2 = 'Farewell';

if (name.length < Math.random()*10) {
  mysteryVar = greeting1 + ', ' + name;
  console.log(mysteryVar);
} else {
  mysteryVar = greeting2 + ', ' + name;
}

mysteryVar = null;

// Stretch Task: 
// Research the following string methods: includes, indexOf, slice, toUpperCase, toLowerCase
// Using those methods on 'sampleText', correctly remove _replaceMe_ and assign the following variables.
const sampleText = "Isn't documentation great!";
const trueValue = sampleText.includes('great!');
const falseValue = sampleText.includes('Javascript');
const three = sampleText.indexOf("'");
const nine = sampleText.indexOf("u");
const cumen = sampleText.slice(8,13);
const eat = sampleText.slice(22,25);
const DOC = sampleText.slice(6,9).toUpperCase();
const is = sampleText.slice(0,2).toLowerCase();