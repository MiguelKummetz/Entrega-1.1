//Invoca una funció que retorni un valor, des de dins d'una template literal.
const value = 1 + 2 + 3;

function call(){
    return value;
};

console.log(`Value from literal template: ${call()}`);