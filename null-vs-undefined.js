// if your declare a variable without setting the value then it will show result' undefined';

let variable1;
console.log(variable1); // undefined;

// you write a function and if you try to console.log(function) withour returning it then it will show undefined result.
// but if you console log inside the function and at the same time console log the function from outside, first it will show result then it will show the result undefined;
// because if you want to console.log the funtion from outside then you have to return the fucntion first.

const variable2 = (num1, num2)=> console.log(num1+num2);
console.log(variable2(1, 2));


// suppose you set two perameter in a function but you passing only one value into the perameter. it means you set the value of first perameter but the second perameter is undefined; so it wil show the result "NaN";

const variable3 = (num1, num2)=> {
    return num1 + num2;
};
const result= variable3(3);
console.log(result);

// suppose you write a object, and you are trying to get the of a key which is not available in it. So it will show you the result "undefined";

const person ={
    name: "Rahat",
    age: 25
}

console.log(person.phone);

// suppose you write an Array and you are trying to find the index which is not present in it. So it will show you the result "Undefined";

const arr = [2, 3, 5];
console.log(arr[6]);