//Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. 
//Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.
function counter(){
    for(let i = 0; i <= 9; i++){
        console.log(i)
    }
}

const matrix = []

for(let i = 0; i <= 9; i++){
    matrix.push(counter)
}

for(let i = 0; i <= 9; i++){
    matrix[i]()

    //esta linea sólo es para que el resultado sea visualmente mas claro
    console.log(`---${i + 1}`)
}