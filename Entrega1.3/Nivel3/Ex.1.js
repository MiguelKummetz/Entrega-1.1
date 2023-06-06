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
    id: 3,
    salary: 2000
}];

const getEmployee = (idNumber) => {
    return new Promise(function(resolve, reject){

        const foundEmployee = employees.find(o => o.id === idNumber)
        foundEmployee === undefined? reject() : resolve(foundEmployee);
    })
}

const getSalary = (employee) => {
    return new Promise(function(resolve, reject){

        const foundSalary = salaries.find(o => o.id === employee.id)
        foundSalary === undefined? reject() : resolve(foundSalary);
    })
}

getEmployee(1)
.then((foundEmployee) => {
    console.log(`Employee found: ${foundEmployee.name}`)
    getSalary(foundEmployee)
    .then((foundSalary) => console.log(`Salary found: ${foundSalary.salary}`))
    .catch(() => console.log(`Salary not found`));
})
.catch(() => console.log(`Employee not found`));