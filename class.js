class Student{
    constructor(sID, sName, sAge){
        this.id = sID;
        this.name = sName;
        this.age = sAge;

    }
}

const input1 = new Student('1', 'Rahat', '25');
const input2 = new Student('2', 'Adnan', '24');
console.log(input1, input2);