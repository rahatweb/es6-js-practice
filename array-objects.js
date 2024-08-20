// ******regular way to access the elemets of an array.


const arr1 = [2, 3, 1, 4];

for (let i = 0; i < arr1.length; i++) {
    const e = arr1[i];
    console.log(e);
    
}

// ******* forEach () method: used for only iterate the elements from an array, but it's return nothing.

const arr2 = [5, 2, 5, 8];

arr2.forEach((e,i,a)=>{
    console.log(e,i,a);
})


//***** map() method : used for iterate an Array and it also give output as an Array.

const arr4 = [3, 4, 6, 7];

arr4.map((e,i,a) =>{
    console.log(e,i,a);
})





//*** forEach() and map() methods looks like same but the working method is different. Both are using for iterate the Array. But,

//*** forEach() return nothing that why it will show result "Undefined"
// for example :


const arr5 = [5, 2, 5, 8];

const result1 =arr5.forEach((e)=>{
   return e += 10;
});

console.log(result1); //Result: undefined;


//***On the other hand map() method will return an array.
// for example :

const arr10 = [3, 4, 6, 7];

const result2 = arr10.map((e) =>{
    return e += 10;
});

console.log(result2); // Result: [13, 14, 16, 17];




//**** for..of method normaly used in object. But we can also use in array.

const arr3 = [8, 4, 2, 5];

for (const number of arr3) {
    console.log(number);
}



//**** filter method: will filter the value that you want. and it will show it as an array.

const arr9 = [10, 5, 20, 2, 30];

const result3 = arr9.filter(e =>{
    return e > 5;
})

console.log(result3);

// difference between filter and find method is : "filter()" method will show all the elements based on your condition but "find()" method will only show the first element based on your condition.

//**** find method(): will show you the first value based on your condition.

const arr7 = [10, 5, 20, 2, 30];
const result7 = arr7.find(e=>{
    return e > 10;
});

console.log(result7);

//**** reduce method: use for action between two values.

// example 1:

const arr6 = [1, 2, 3, 4, 5];
const result8 = arr6.reduce((x,y)=>{
    return x - y;
});

console.log(result8);

// example 2:

const result4 = arr6.reduceRight((x,y)=>{
    return x - y;
});

console.log(result4);

//**** concat method : using for combain  array.

const result5 = arr5.concat(arr6);
console.log(result5);

//**** (...) three dots: also using for cobain array. this method is better the concat method. and it's easy to use.

const result6 =[...arr5, ...arr6];
console.log(result6);


