// Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises 
// de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

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
    return new Promise(function(resolve){
        resolve(employees.find(o => o.id === idNumber));
    });
};

const getSalary = (employee) => {
    return new Promise(function(resolve){
        resolve(salaries.find(o => o.id === employee.id));
    });
};

getEmployee(1).then((foundEmployee) => {
    console.log(`Employee found: ${foundEmployee.name}`);
    getSalary(foundEmployee).then((foundSalary) => console.log(`Salary found: ${foundSalary.salary}`));
});