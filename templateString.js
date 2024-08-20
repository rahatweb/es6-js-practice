// regular way to combine two string

let string1 = 'This is first String';
let string2 = 'This is second String';
let finalString = string1 + string2;
console.log(finalString); // Result will be "This is first StringThis is second String". There no space between two lines.

let spaceBetweenLines = string1 +' '+ string2;
console.log(spaceBetweenLines); // this time you will see the space between two lines. For that you need to add a empty string extra.


// combine two string using Template String.

let str1 = 'This is first String';
let str2 = 'This is second String';
let finalStr = `${str1} and ${str2}`;
console.log(finalStr);


// Multiple line using template string

let text = `This is a paragraph which contains multiple lines.
and this is the second line.
For better observation i have added one more line here.`

console.log(text);