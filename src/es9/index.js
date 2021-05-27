// Spread Operator en objetos

const obj = {
    name: 'Javi',
    age: 42,
    country: 'ES',
};

let { name, ...all } = obj;
console.log(`Nombre: ${name}`);
console.log('Resto de información:', all);

let { country, ...nameAndAge } = obj;
console.log('Nombre y edad:', nameAndAge);


// Propiedades de propagación (Propagation Propeties)
const person = {
    name: 'Javi',
    age: 42,
};

const personInformation = {
    ...person,
    country: 'ES',
};

personInformation;


// Promise Finally
//  finally no recibe ningún parámetro, a diferencia de then y catch. Además también puede ser usado en la estructura try/catch cuando implementemos async/await.
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Error('Test Error!!!'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('\n¡¡¡Terminó!!!'));

const datos = [
    { id: 1, title: 'Iron Man', year: 2008 },
    { id: 2, title: 'Spiderman Homecoming', year: 2017 },
    { id: 3, title: 'Avengers Endgame', year: 2019 }
];

// const datos = [];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error('!!!No existen Datos!!!'))
        }
        setTimeout(() => {
            resolve(datos);
        }, 2000);
    });
}

getDatos()
    .then((datos) => console.log(datos))
    .catch(err => console.log(err))
    .finally(() => console.log('Hasta luego Lucas!!!'));


// Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(`Fecha: ${day}/${month}/${year}`);


const dateString = '2020-03-19';
const dateRegex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

// Como se puede ver nos saltamos el primer espacio ya que lo que nos regresa dateRegex.exec(dateString) en el indice 0 es justamente el string que le pasamos por parametro.
// Para evitar futuros errores utilizamos el operador || para que si se da el caso en que dateRegex.exec(dateString) retorne null, no nos de error al hacer destructuring
const [ , annio, mes, dia] = dateRegex.exec(dateString) || [];
console.log(`${dia}/${mes}/${annio}`);
