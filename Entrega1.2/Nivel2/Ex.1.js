//Crea una arrow function que, rebent un paràmetre, 
//retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.
const arrowFunction = (parameter) => {
    const object = {};
    object.attribute = parameter;
    return object;
};
console.log(arrowFunction('newParameter'));