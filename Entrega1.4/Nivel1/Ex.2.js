//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise 
//que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

async function call() {
    console.log('waiting two seconds...');
    await asyncFunction();
};

function asyncFunction(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('Correct'));
        }, 2000);
    });
};

call();