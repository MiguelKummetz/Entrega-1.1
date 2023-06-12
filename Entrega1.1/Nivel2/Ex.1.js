//Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

function callUser (text){
    return console.log(text);
};
const userName = `Ami`;
const userLastname = `Kummetz`;

callUser(`Username: ${userName} ${userLastname}`);