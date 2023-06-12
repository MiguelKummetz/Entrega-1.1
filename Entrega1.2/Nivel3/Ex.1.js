//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. 
//Invoca-la amb diferents definicions.

class AbstractClass{
    constructor(content){
        throw new Error('La clase abstracta no puede ser implementada de forma directa.');
    };

    abstractMethod() {
        throw new Error('El método abstracto debe ser implementado.');
    };
};

function objectCreator(value){
    const newObject = Object.create(AbstractClass.prototype);
    newObject.content = value;
    console.log(newObject);
};

console.log(AbstractClass); //empty

objectCreator('Si');
objectCreator(3 + 2);
objectCreator(false);