// Object entries "convierte" un objeto a un array de strings
const data = {
    frontend: 'Ángel',
    backend: 'Carlos',
    design: 'Miguel Ángel',
};

const entries = Object.entries(data);
// console.log(entries);
// Ahora al tener un array podemos saber cuántos elementos tiene nuestro "objeto"
entries.length;
// console.log(entries.length);


// Object values nos devuelve un array de strings, pero solo con los valores de un objeto
const values = Object.values(data);
// console.log(values);


// Padding
// padStart permite rellenar una cadena de texto desde el inicio hasta la longitud que hayamos indicado con los carácteres que queramos.
const string = 'hello';
string.padStart(7, 'hi');
string.padStart(9, 'hi');
string.padStart(11, 'hi');

const myName = "Juan"
myName.padStart(7, "Hi ");

console.log("string".padStart(9, "abc"));
console.log("string".padStart(10, "abc"));
console.log("string".padStart(11, "abc"));
console.log("string".padStart(12, "abc"));

// padEnd funciona igual que el método anterior, pero en vez de rellenarlos por el principio de la cadena, lo rellena por el final
string.padEnd(12, ' ----- ');
'food'.padEnd(12, '  ----- ');
string.padEnd(10, ' Mundo!!!');
string.padEnd(11, ' Mundo!!!');
string.padEnd(12, ' Mundo!!!');
string.padEnd(13, ' Mundo!!!');
string.padEnd(14, ' Mundo!!!');

const money = "200"
money.padEnd(4, "$");
"string".padEnd(9, "abc");
"string".padEnd(12, "abc");


// Async await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        // if (true) {
        //     setTimeout(() => {
        //         resolve('HELLO WORLD ;D');
        //     }, 3000);
        // } else {
        //     reject(new Error("Test Error"));
        // }
        (true)
            ? setTimeout(() => resolve('Hola, practicando async await!'), 2000)
            : reject(new Error("Test Error"));
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

// Forma propuesta para manejar correctamente los errores, y la recomendada
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

anotherFunction();

const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {
            //3. Si el dinero que ingresaste es mayor o igual a 500,
            // entonces te preparamos el helado. El proceso toma 4 segundos.
            console.log('Estamos preparando tu helado...\n')
            setTimeout(() => {
                resolve('Aquí está tu helado 🍦');
            }, 4000);
        } else {
                //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
            reject('¡Ups!, creo que no tienes dinero suficiente 💰');
        }
    });
}

const buyIceCream = async (money) => {
    try{
        console.log('Bienvenido a Mundo Helados!\n');
        //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado
        const result = await prepareIceCream(money);
        // 4. Imprimimos tu pedido! si todo salió bien.
        console.log(result);
        console.log('Gracias por tu compra!');
    } catch(e) {
        //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
        console.log(e);
    }
}

buyIceCream(600); // 1. llamas a la funcion comprar helado e Ingresas el dinero
// buyIceCream(499);
