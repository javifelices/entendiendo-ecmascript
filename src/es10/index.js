// Flat
let matriz = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.table(matriz.flat());
console.table(matriz.flat(2));

const edades = [8, 10, 9, 20, [13, 18, 12, [20, 9, 25, 9]]];
console.table(edades.flat().flat());

const ages = [8, 10, 9, 20, [13, 18, 12, [20, 9, 25, 9]]];
ages.flat(Infinity);

// FlatMap
let array = [1, 2, 3, 4, 5];
array.flatMap(value => [value, value * 2]);


// trimStart
let hello = '                        hello world!';
hello.trimStart();

// trimEnd
let hola = 'hello world!                        ';
hola.trimEnd();


// fromEntries
let entries = [["name", "javi"], ["age", 42], ["country", "ES"]];
Object.fromEntries(entries);


// Optional catch Binding
// Feature que se incorporón en ECMAScript 10, se refiere a que podemos omitir el parámetro error del bloque catch si no lo vamos a usar, antes era necesario incluirlo aunque no se ocupara.

// Antes de ES10
try {
    throw 'Soy un error forzado';
} catch (error) {
    console.log('Hello');
}

// Con ES10
try {
    throw 'Soy un error forzado';
} catch {
    console.log('Hello');
}


// Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);

// Aclarando un poco, Symbol es un nuevo tipo de dato agregado en ES2015/ES6.
// Las variables de tipo Symbol almacenan valores unicos e inmutables.

let mySymbol1 = Symbol("foo");
let mySymbol2 = Symbol("foo");
console.log(mySymbol1 === mySymbol2);

// Se pueden usar como claves en las propiedades de los objetos

let mySym1 = Symbol("description");
let mySym2 = Symbol("esto es un simbolo");

let obj = {};
obj[mySym1] = 'value';
obj[mySym2] = 'value2';
console.log(obj);

// {Symbol(description): "value", Symbol(esto es un simbolo): "value2"}
