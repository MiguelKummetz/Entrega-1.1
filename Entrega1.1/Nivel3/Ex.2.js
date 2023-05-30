//Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.
const userName = 'Ami Kummetz'

const anonymousFunction = (function(){
    return console.log(userName)
})(userName)