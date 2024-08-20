// double qual and triple equal using for comaparision between two values;

// Double equal (==) only check the values not variable type. example (a = 5) is a number value, and (b='5') is a string value but both the value is (5). Here variables type is different but values are same.

// example 1:

let a = 5;
let b = '5';

const result = a == b ? console.log('equal') : console.log("not equal");  //Result : equal;

// example 2:
// In JavaScript (0 means false) and (1 means true); but if we check this using (===) triple equal it will show false result. 
let n1 = 0;
let n2 = false;

const nResult = n1 == n2 ? console.log('true'): console.log('false');




// Triple equal (===) check the variable type first then the values. if it's  not the same types of variable then it will return the false value;

// example 1:

let c = 5;
let d = '5';

const result1 = c === d ? console.log('equal') : console.log("not equal"); // Result : not equal;

// example 2:

let e = 5;
let f = 5;

const result2 = e === f ? console.log('equal') : console.log("not equal"); //Result: equal;