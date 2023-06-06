// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
// Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

function check(value){
    return new Promise(function(r, m){

        if (value === true) {
            r('The Promise is resolved');
        }
            m('Something has gone wrong')
    });
}

check(true)
.then((message) => console.log('resolve -> ' + message))
.catch((message) => console.log('reject -> ' + message))


check(false).then((m) => console.log('resolve -> ' + m)).catch((message) => console.log('reject -> ' + message))
