const person = {
    name : 'Rahat',
    age: '25',
    nationality : 'Bangladeshi'
};

const {name, age} = person;
console.log(name, age);


const employee ={
    company : 'BJIT',
    vacancy : '2',
    position : {
        senior : '1',
        junior : '1'
    }
}

const {senior, junior} = employee.position;

console.log(senior, junior);