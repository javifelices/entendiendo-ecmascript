// Parámetros por defecto

// es5
function newFunction(name, age, country) {
    var name = name || 'javi';
    var age = age || 42;
    var country = country || 'ES';
    console.log(name, age, country);
}

// es6
function newFunctionEs6(name = 'javi', age = 42, country = 'ES') {
    console.log(name, age, country);
}

newFunctionEs6();
newFunctionEs6('Ricardo', 23, 'AR');


// Template Literals
let hello = "Hola";
let world = "Mundo";
let epicPhrase = hello + ' ' + world;
let epicPhraseEs6 = `${hello} ${world}`;


// Multilínea

// es5
let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. \n" + "Totam, architecto laboriosam, veritatis reprehenderit recusandae iure cumque sunt fugit. \n" + "Placeat at consectetur fugiat quis voluptate nobis officia, repellat nostrum ab aut.";

// es6
let loremEs6 = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
Totam, architecto laboriosam, veritatis reprehenderit recusandae iure cumque sunt fugit
placeat at consectetur fugiat quis voluptate nobis officia, repellat nostrum ab aut.
`;


// Destructuring

let person = {
    'name': 'javi',
    'age': 42,
    'country': 'ES'
};

// es5
console.log(person.name, person.age, person.country);

// es6
// let { name, age, country } = person;
// console.log(name, age, country);
let { name, age } = person;
console.log(name, age);


// Spread Operator u Operador de Propogación
let team1 = ['Oscar', 'Julián', 'Ricardo'];
let team2 = ['Valeria', 'Jesica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);


// let y const

// let solo esta disponible en el scope, bloque en el que va a ser llamado

{
    var globalVar= "Global Var";
}
console.log(globalVar);

{
    let globalLet = "Global Let";
    console.log(`
    Accediendo desde el scope de globalLet a su valor que es ${globalLet}.
    Desde fuera de este bloque no sería accesible`);
}
// esta variable la detecta como no definida, porque solo está disponible en el scope de su declaración, en ese bloque en concreto.
// console.log(globalLet);

// let permite reinicializarse y reasignarse
let nombre;
nombre = "Javi";
nombre = 'Victoria';

// const no permite reinicialziarse ni reasignarse
// const EDAD;
const EDAD = 42;
// EDAD = 43;
