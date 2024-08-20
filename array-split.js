// slice: slice(start index, end index(splice will remove elments from your start index and between end index number))

const number = [1, 2, 3, 4, 5, 6];

const slice = number.slice(2, 5);
console.log(slice);


// splice : splice(start index, number of index wants to remove, after that we can add multiple values in remove area.)


const splice = number.splice(2, 5);
console.log(splice);


// join: by default join() will separate array elements unsing coma(,). But but we can using anything for sperate values.

const number1 = [1, 2, 3, 4, 5, 6];
const joint = number1.join('-'); //default result: 1,2,3,4,5,6
console.log(joint); // after using (-) result is: 1-2-3-4-5-6