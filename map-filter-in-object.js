// Objects in Array

const students =[
    {id: 1, name: 'Rahat'},
    {id: 2, name: 'Anwar'},
    {id: 3, name: 'Adnan'},
    {id: 4, name: 'Sanvi'},
    {id: 5, name: 'Habib'}
];

const names = students.map(e=> e.name);
const IDs = students.map(e => e.id);
console.log(names, IDs);

const filtering = students.filter(e=> e.id > 2);
console.log(filtering);

const finding = students.find(e=> e.id > 2);
console.log(finding);
