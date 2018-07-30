
// getThird takes in an array 
// it returns the third item in the array
// if there is no third item, return null
// Example: getThird(['Doc', 'Biff', 'Marty']) returns 'Marty'

function getThird(array) {
  return array[2]
}

// stringLengths takes in four strings
// it returns an array containing the length of each string
// Example: stringLengths('mushroom', 'onion', '', 'garlic') returns [8, 5, 0, 6] 

function stringLengths(str1, str2, str3, str4) {
  let arrayLengths = [];

  arrayLengths.push(str1.length);
  arrayLengths.push(str2.length);
  arrayLengths.push(str3.length);
  arrayLengths.push(str4.length);
  
  return arrayLengths;
}


// removeFirst takes in an array
// it returns the same array, but with the first item removed
// Example: removeFirst(['frog', 'toad', 'cricket', 'skunk']) would
//          return ['toad', 'cricket', 'skunk'] 

function removeFirst(array) {
  array.shift();
  return array;
}

// swap takes in an array and two indices 
// it returns the array with the items at i and j swapped
// Example: swap(['unicycle', 'scooter', 'skateboard', 'canoe'], 0, 2) would
//          return ['skateboard', 'scooter', 'unicycle', 'canoe'];

function swap(array, i, j) {
  let temp1 = array[i];
  let temp2 = array[j];
  
  array[i] = temp2;
  array[j] = temp1;

  return array;
}

// getValue takes in an object and a key name
// if the key exists in the object, return the value of that key
// if not, return null
// Example: getValue({ first: 'Gordon', last: 'Peppermill'}, 'last') 
//          would return 'Peppermill'

function getValue(object, desiredKey) {
  for(key in object) {
    if(object.hasOwnProperty(desiredKey)) {
        let output = object[desiredKey];
        return output;
    } else {
      return null;
    }
  }
}


// generateCSS takes in three strings containing CSS values
// it returns an object with the CSS key value pairs
// Example: generateCSS('100px', '70px', 'blue') would return
//          { height: '100px', width: '70px', color: 'blue' }

function generateCSS(height, width, color) {
  let output = {
    height: height,
    width: width,
    color: color
  }
  return output;
}

// getValues takes in an objects
// it return an array containing the values from that object
// Example: getValues({ name: 'Ally', age: 27, job: 'hypnotist' })
//          would return ['Ally', 27, 'hypnotist']

function getValues(obj) {
  let values = Object.values(obj);
  return values;
}
