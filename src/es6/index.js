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
