const number = [1,2,3,4,5,6, 7, 8, 9];
for (const num of number) {
    if(num > 6){
        break; // stop the loop when num value is 6;
    }
    console.log(num);
}


const number1 = [1,2,-3,-4,5,6, 7, 8, 9];

for (const num of number1) {
    if(num < 0){
        continue; // skip any elements which is less then 0;
    }

    console.log(num);
    
}