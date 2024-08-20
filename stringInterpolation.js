// Regular way of join two array

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const finalArray = array1.concat(array2);

console.log(finalArray);   //result [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// using three dots(...) or string Interpolation method

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const finalArr = [...arr1, ...arr2];

console.log(finalArr); ////result [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// check max value;

const store = [20, 50, 100, 10]

const maxValue = Math.max(...store);

console.log(maxValue);