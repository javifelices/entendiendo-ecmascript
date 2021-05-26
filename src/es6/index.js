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
// let { name, age } = person;
// console.log(name, age);


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


// Propiedad de objetos mejorada
let name = 'javi';
let age = 42;

// es5
obj = { name: name, age: age };

// es6
obj2 = { name, age };


// Arrow Functions
function suma(a, b) {
    return a + b;
}
const resultado = suma(1, 5);

const suma2 = (a, b) => a + b; // return implícito
const resultado2 = suma2(1, 5);

const suma3 = (a, b) => {
    const c = a + b;

    return c + 1;
}
const resultado3 = suma3(1, 5);

const names = [
    { name: 'Javi', age: 42 },
    { name: 'Victoria', age: 67 }
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));


// Promesas
// const helloPromise = () => {
//     return new Promise((resolve, reject) => {
//         if(false) {
//             resolve('¡Hey!');
//         } else {
//             reject('Ups!!!!!');
//         }
//     });
// };

// helloPromise()
//     .then(response => console.log(response))
//     .catch(err => console.log(err));


// Carlos Azaustre

// const datos = [
//     { id: 1, title: 'Iron Man', year: 2008 },
//     { id: 2, title: 'Spiderman Homecoming', year: 2017 },
//     { id: 3, title: 'Avengers Endgame', year: 2019 }
// ];

// const datos = [];

// const getDatos = () => {
//     return new Promise((resolve, reject) => {
//         if (datos.length === 0) {
//             reject(new Error('!!!No existen Datos!!!'))
//         }
//         setTimeout(() => {
//             resolve(datos);
//         }, 2000);
//     });
// }

// getDatos()
//     .then((datos) => console.log(datos))
//     .catch(err => console.log(err));

// const fetchingData = async () => {
//     try {
//         const datosFetched = await getDatos();
//         console.log(datosFetched);
//     } catch (err) {
//         console.log(err.message);
//     }
// };

// fetchingData();


// #jonmircha

// function cuadradoPromise(value) {
//     if (typeof value !== "number") {
//         return Promise.reject(`¡¡¡Error!!! El valor ingresado no es un número: "${value}"`);
//     }
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 value,
//                 result: value * value
//             });
//         }, 0 | Math.random() * 1000);
//     });
// }

// cuadradoPromise(0)
//     .then(obj => {
//         // console.log(obj);
//         console.log("Inicio Promise");
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(1);
//     })
//     .then(obj => {
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(2);
//     })
//     .then(obj => {
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(3);
//     })
//     .then(obj => {
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(4);
//     })
//     .then(obj => {
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(5);
//     })
//     .then(obj => {
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         console.log("Fin Promise");
//     })
//     .catch(err => console.error(err));


// CLASES

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new Calculator();
console.log(calc.sum(2, 2));

// jonmircha
// function Animal(nombre, genero) {
//     this.nombre = nombre;
//     this.genero = genero;

//     this.sonar = function () {
//         console.log("Hago sonidos porque estoy vivo");
//     }

//     this.saludar = function () {
//         console.log(`Hola, me llamo ${this.nombre}`);
//     }
// }

class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamannio) {
        super(nombre, genero, tamannio);
        this.tamannio = tamannio;
        this.raza = null;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar() {
        console.log("¡Guauuu Guauuu!");
    }

    // Un método estático se puede ejecutar sin necesitad de instanciar la clase
    static queEres() {
        console.log("Los perros somos animales maníferos que pertenecemos a la familia de los caninos. Somos consierdados los mejores amigos del hombre.")
    }

    // Los setters y getters son métodos especiales que permiten establecer y obtener los valores de los atributos de una clase
    get getRaza() {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }
}

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby", "Macho", "Gigante");

// console.log(mimi);
mimi.saludar();
mimi.sonar();
// console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();

// A la hora de llamar a los métodos getters y setters se hace como si fueran un atributo. Véase como se usa el setter. Es un funcionamiento especial de Javascript que no suele darse en otros lenguajes. Podemos decir que los getters y setters son atributos especiales.
scooby.setRaza = "Grán Danés";
scooby.getRaza;
