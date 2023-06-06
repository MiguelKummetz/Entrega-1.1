// Crea una altra arrow function getSalary() similar a l'anterior 
// que rebi com a paràmetre un objecte employee i retorni el seu salari.

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

const getSalary = (employee) => {
    return new Promise(function(resolve){
        resolve(salaries.find(o => o.id === employee.id))
    })
}

getSalary(employees[2]).then((foundSalary) => console.log(`Salary found: ${foundSalary.salary}`));