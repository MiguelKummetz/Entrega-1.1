//Força i captura tants errors com puguis dels nivells 1 i 2.

//Nivel 1 Ex. 1:
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
},  
    //object comented to test the "salary not found" error:
    //{id: 3,salary: 2000}
];

const getEmployee = (idNumber) => {
    checkIfNumber(idNumber);
    return new Promise(function(resolve, reject){

        const foundEmployee = employees.find(o => o.id === idNumber);
        foundEmployee === undefined? reject() : resolve(foundEmployee);
    })
}

const getSalary = (employee) => {
    return new Promise(function(resolve, reject){

        const foundSalary = salaries.find(o => o.id === employee.id);
        foundSalary === undefined? reject() : resolve(foundSalary);
    })
}

function checkIfNumber(n){
    if(isNaN(n)) throw console.log(`"${n}" is not a number`);
}

async function myAsyncFunction(idNumber){
    
    await getEmployee(idNumber)
    .then((foundEmployee) => {
        console.log(`Employee found: ${foundEmployee.name}`);
        getSalary(foundEmployee)
        .then((foundSalary) => console.log(`Salary found: ${foundSalary.salary}`))
        .catch(() => console.log(`Salary not found`));
    })
    .catch(() => console.log(`Employee not found`));
};

//salary not found:
// myAsyncFunction(3);

//employee not found:
// myAsyncFunction(0);

//invalid input:
// myAsyncFunction('s');

////////////////////////////////////////////////////////////////////////////

//Nivel 2 Ex. 1:
function duplicate(n){
    return new Promise((resolve) => {
        checkIfNumber(n);
        console.log('calculating double of ' + n);
        setTimeout(() => {
            resolve(n * 2);
        }, 2000);
    });
};

function checkIfNumber(n){
    if(n === undefined) throw Error(`Missing input`)
    if(isNaN(n)) throw Error(`"${n}" is not a number`);
};

async function calculate(n1, n2, n3){ 
    const result = await duplicate(n1) + await duplicate(n2) + await duplicate(n3);
    console.log('Result: ' + result);
};


try {
    //invalid input in each case:
    // calculate('x', 5, 5);
    // calculate(5, 'x', 5);
    // calculate(5, 5, 'x');

    //missing input:
    // calculate( , 5, 5)
    // calculate(5,  , 5)
    //calculate(5, 5)
    
} catch (error) {
    console.log(error);
};