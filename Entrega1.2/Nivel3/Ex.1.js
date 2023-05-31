//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. 
//Invoca-la amb diferents definicions.

const abstractClass = {
    abstractMethod() {throw new Error('El método abstracto debe ser implementado.');}
}

function objectCreator(value){
    const newObject = Object.assign(abstractClass)
    newObject.content = value
    console.log(newObject)
}

console.log(abstractClass) //empty

objectCreator('Si')
objectCreator(3 + 2)
objectCreator(false)