// Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 4,
    salary: 2000
}];

const getEmployee = (idNumber) => {
    return new Promise(function(resolve, reject){

        const foundEmployee = employees.find(o => o.id === idNumber);
        foundEmployee ? resolve(foundEmployee) : reject('Employee not found');
    });
};

const getSalary = (employee) => {
    return new Promise(function(resolve, reject){

        const foundSalary = salaries.find(o => o.id === employee.id);
        foundSalary ? resolve(foundSalary) : reject('Salary not found');
    });
};

getEmployee(3)
.then((foundEmployee) => {
    console.log(`Employee found: ${foundEmployee.name}`);
    getSalary(foundEmployee)
    .then((foundSalary) => console.log(`Salary found: ${foundSalary.salary}`))
    .catch((m) => console.log(m));
})
.catch((m) => console.log(m));