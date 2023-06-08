//Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

function duplicate(n){
    return new Promise((resolve) => {
        console.log('calculando doble de ' + n);
        setTimeout(() => {
            resolve(n * 2);
        }, 2000);
    });
};

async function calculate(n1, n2, n3){ 
    const result = await duplicate(n1) + await duplicate(n2) + await duplicate(n3);
    console.log('Result: ' + result);
};


calculate(2, 5, 8);