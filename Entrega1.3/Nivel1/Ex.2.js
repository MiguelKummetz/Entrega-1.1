// Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge 
// o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const arrowFunction = (parameter, callback) => parameter? callback('Correct') : callback('Wrong');

function showMessage(message){console.log(message)}

arrowFunction(true, showMessage);
arrowFunction(false, showMessage);