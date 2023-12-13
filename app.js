/*

// we need to import the module from the other file
const saludos = require("./saludos.js");

console.log(saludos);

// the object "saludo" has a property called "saludar"

console.log(saludos.saludar("James!"))
console.log(saludos.saludarHolaMundo());
*/

// let's say we don't need all of what is exported from saludos.js
// we'll use the destructuring syntax --> it allows us to access certin
// properties from JS object

//const { saludarHolaMundo } = require("./saludos.js");

//console.log(saludarHolaMundo());

// now to include several specific elements being exported

/*
const { saludar, saludarHolaMundo } = require("./saludos.js");

console.log(saludar("James"));
console.log(saludarHolaMundo());
*/

/*
console.log("hello, world!");
console.warn("something happened!");
console.error("error!")
*/

// to the console.error() you can pass a new instance of the Error class

// console.log(new Error("paso algo malo!")); // this is just a very 
// descriptive message 

// console.log(process); // that's a lot of detailed info!
// console.log(process.env); // descrives the runtime environment of the program

// with process you can access the arguments passed to the terminal
// when you type in the terminal nodde app.js 6 7 8 for example 
// that is converted into an array 
// [node, app.js, 6, 7, 8]
// console.log(process.argv) // we recieve an array with two paths
// where node is, and where the project node.js is
// now if you type in the terminal node app.js 7 8 you get back
// an array also including those two numbers
// you can access individual values
// console.log(process.argv[2]);
// console.log(process.argv[3]);

// to get all values
/*
for(let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}
*/

// you can also know how much memory is beign used
// console.log(process.memoryUsage());

// os module is not global, you have to import it with require()

// const os = require("os");
// type ---> to access the os type 
// console.log(os.type()); // returns "Windows_NT" in my case

// homedir ---> to access the home directory of the user
// console.log(os.homedir())

// uptime ---> to know how long has the os been executing (in seconds)
// console.log(os.uptime());

// userInfo ---> info about the user
// console.log(os.userInfo());

// timers module

// setTimeout ---> to execute code after a specific amount of miliseconds
// setTimeout(the function to execute, the time I'll take, argument(s) to pass to the function after the time set)
// if we have more than one argument you just separate them with a comma

/*
function mostraTema(tema) {
    console.log(`estoy aprendiendo ${tema}`);
}

setTimeout(mostraTema, 2000, "Node.js"); // two seconds
*/

/*
function sumar(a, b) {
    console.log(a + b);
}

setTimeout(sumar, 2000, 4, 6);
*/

// setImmediate() ---> to execute async code in the next iteration
// of a cycle of events as soon as posible
// setImmediate(function, arg1, arg2); 
// the function will execute when the cycle of events
// tells us it is time for that function to execute
// can have more arguments
// it executes AFTER sync code

/*
function mostrarTema(tema1, tema2) {
    console.log(`Estoy aprendiendo ${tema1} y ${tema2}`);
}

console.log("Antes de setImmediate"); // first

setImmediate(mostrarTema, "Node.js", "python"); // last 

console.log("Despues de setImmediate"); // second
*/

// setInterval() ---> to execute code an infinite number of times
// with a specific delay (set in miliseconds)

// every certain amount of miliseconds the code will execute infinitelly

// setInterval(function, interval, arg1, arg2); ---> from one to more args

/*
function mostrarTema(tema1, tema2) {
    console.log(`Estoy aprendiendo ${tema1} y ${tema2}`);
}

setInterval(mostrarTema, 1500, "Node.js", "python"); 
*/ 

// every second and a half the function mostrarTema will execute

// reading files with fs module

// first include the module

// const fs = require("fs");

// to read

/*
fs.readFile("index.html", "utf-8", (err, contenido) => {
    // parameters ---> error if there are problems reading file
    // the other refers to its contents

    // if err is not null
    if (err) {
        console.log(err); // show error
    }

    // else read contents of file

    else {
        console.log(contenido);
    }
});
*/

// we can also STOP the execution of the function if there's an error
// for that we use throw

/*
const fs = require("fs");

fs.readFile("inde.html", "utf-8", (err, contenido) => {
    // if error, the function stops (we use thow for that)

    if(err) {
        throw err; 
    }
    else console.log(contenido);
});
*/

// renaming a file

/*
const fs = require("fs");

fs.rename("index.html", "main.html", (err) => {
    // if error 
    if (err) {
        throw err; // to stop execution of the function
    }

    console.log("Nombre cambiado exitosamente!");
}); 
*/

// add content at the end of a file (append)

/*
const fs = require("fs");

fs.appendFile("index.html", "<p>Hola!</p>", (err) => {
    // if error
    if (err) {
        throw err;
    }

    console.log("archivo actualizado!");
});
*/

// replace content of a file (creates the file if it doesn't exist)

/*
const fs = require("fs");

fs.writeFile("index.html", "new content", (err) => {
    // if err

    if (err) {
        throw err;
    }
    console.log("Contenido reemplazado exitosamente!")
});
*/

// delete a file

/*
const fs = require("fs");

fs.unlink("index2.html", (err) => {
    if (err) {
        throw err; 
    }
    console.log("Archivo eliminado!");
});
*/

// --- all operations --- (why are they async?)
// these operation wont respect the order in which they are writen
// that makes them async

/*
const fs = require("fs");

console.log("before reading");

fs.readFile("index.html", "utf-8", (err, contenido) => {
    if (err) {
        console.log(err); 
    }
    else {
        console.log(contenido);
    }
});
*/

// console.log("before renaming");

/*
fs.rename("index.html", "main.html", (err) => {
    // if error 
    if (err) {
        throw err; // to stop execution of the function
    }

    console.log("Nombre cambiado exitosamente!");
}); 
*/

// console.log("before appending");

/*
fs.appendFile("main.html", "<p>Hola!</p>", (err) => {
    // if error
    if (err) {
        throw err;
    }

    console.log("archivo actualizado!");
});
*/

// console.log("before modifying");

/*
fs.writeFile("main.html", "new content", (err) => {
    // if err

    if (err) {
        throw err;
    }
    console.log("Contenido reemplazado exitosamente!")
});
*/ 

// console.log("before deleting");

/*
fs.unlink("main.html", (err) => {
    if (err) {
        throw err; 
    }
    console.log("Archivo eliminado!");
});
*/

// whatever happens to be sync executed first, then the fs methods
// and they didn't even did it in order
// to make then more predictible you can use the sync version of them
// sync versions don't need its functions

/*
const fs = require("fs");

console.log("before reading");

const archivo = fs.readFileSync("index.html", "utf-8");
console.log(archivo);

console.log("before renaming");

fs.renameSync("index.html", "main.html"); 

console.log("before appending");

fs.appendFileSync("main.html", "<p>Hola!</p>");

console.log("before modifying");

fs.writeFileSync("main.html", "new content");

console.log("before deleting");

fs.unlinkSync("main.html");
*/

// everything was executed in order

// we'll include the events module with: 

// const EventEmitter = require("events"); 
// this retuns a class - instead of an object (investigate more)

// console.log(EventEmitter); // a class that can create objects

// let's asociate an event with a function with .on()

// first we include the module in the project

// const EventEmitter = require("events");

// now we instance the EventEmitter class to create our event emitter

// const emisorProductos = new EventEmitter(); // with this we'll simulate a purchase

// now we must define what will happen when that certain event happens

// when "compra" happens, we define the function that will handle the event

/*
emisorProductos.on("compra", (total, numProd) => {
    console.log(`se realizó una compra por $${total}`); 
    console.log(`el numero de productos es de ${numProd}`)
});
*/

// now, for practice sake, we emit the event with emit()

// when a purchase is done, we call emit() and we'll emit
// an event called "compra", when that line is executed, our
// program will search in the emitter which is the function
// asociated to that event (the one we asociated with .on())

// emisorProductos.emit("compra", 345, 4);
// emisorProductos.emit("compra", 654, 7);
// emisorProductos.emit("compra", 34, 3); // see how it works? 

// promises
// new instance of promise

/*
const promesaCumplida = false; 
// resolve and reject are functions
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        // if promesaCumplida
        if (promesaCumplida) {
            resolve("promesa cumplida!");
        }
        else reject("promesa rechazada!");
    }, 3000);
}); 
*/

// what happens if resolved?
// valor is what we passed to resolve before
/*
miPromesa.then((valor) => {
    console.log(valor);
});
*/
// what happens if rejected?

/*
const manejarPromesaCumplida = (valor) => {
    console.log(valor);
};
*/

// when we handle the rejected promise, the parameter
// should be the reason of why it was rejected

/*
const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);
*/

// let's say we own a pizza place, and our order system 
// does async operations - they can take a few minutes, even 
// fail if there are some problems - 20% of the times!

/*
const estatusPedido = () => {
    const estatus = Math.random() < 0.8; // 20% probability of failing!
    //console.log(estatus);
    return estatus;
};
*/

// let's call the function several times

/*
for(let i = 0; i < 10; i++) {
    console.log(estatusPedido(), i);
}
*/

// let's order some pizza!

/*
const miPedido = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve("predido exitoso!")
        }

        else {
            reject("algo fallo! intente de nuevo");
        }
    }, 3000);
});

const manejarPedido = (confirmacion) => {
    console.log(confirmacion);
};

const rechazarPedido = (rechazo) => {
    console.log(rechazo);
}; 

miPedido.then(manejarPedido, rechazarPedido);
*/

// alt syntax

/*
miPedido
    .then((manejarPedido) =>{
        console.log(manejarPedido);
    })
    .then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    })
*/

// same program but with .catch()

/*
const estatusPedido = () => {
    const estatus = Math.random() < 0.8; // 20% probability of failing!
    //console.log(estatus);
    return estatus;
};

const miPedido = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve("predido exitoso!")
        }

        else {
            reject("algo fallo! intente de nuevo");
        }
    }, 3000);
});
*/

/*
miPedido
    .then((manejarPedido) =>{
        console.log(manejarPedido);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    }); // works perfectly!!
*/

// how's it possible to write methods in such a manner?
// with something called METHOD CHAINING!!

// ANOTHER alternative

/*
const manejarPedido = (mensajeConfirmacion) => {
    console.log(mensajeConfirmacion); 
}; 

const rechazarPedido = (mensajeError) => {
    console.log(mensajeError); 
};

miPedido.then(manejarPedido).catch(rechazarPedido);
*/

// async/await 

/*
function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de freecodecamp`);

        setTimeout(() => {
            // let's say we only have mugs
            if(producto === "taza") {
                resolve("ordenando taza!"); 
            }

            else {
                reject("este producto no, queres una taza?")
            }
        }, 1500);
    });
}
*/

// whatever response from above we pass it as argument here below

/*
function procesarPedido(respuesta) {
    return new Promise((resolve, reject) => {
        console.log("procesando respuesta..."); 
        console.log(`la respuesta fue: ${respuesta}`);
        setTimeout(() => {
            resolve("gracias por su compra!");
        }, 4000);
    });
}
*/

// first we have to order the product, and then the order is processed
// how to we sync two async processes?

// we chain the promisess

/*
ordenarProducto("taza").then(respuesta => {
    console.log("respuesta recibida"); 
    console.log(respuesta);

    // to garantee that after ordering the order is processed

    return procesarPedido(respuesta); // second function

    // that one last call turned this whole thing into a new promise
    // the call returned a promise, so the call is on itself a promise
    // we are chaining promises!
}).then((respuestaProcesada) => {
    console.log(respuestaProcesada); 
}).catch(error => {
    console.log(error);
});
*/

// now the same but using async/await

/*
function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de freecodecamp`);

        setTimeout(() => {
            // let's say we only have mugs
            if(producto === "taza") {
                resolve("ordenando taza!"); 
            }

            else {
                reject("este producto no, queres una taza?")
            }
        }, 1500);
    });
}
*/

/*
function procesarPedido(respuesta) {
    return new Promise((resolve, reject) => {
        console.log("procesando respuesta..."); 
        console.log(`la respuesta fue: ${respuesta}`);
        setTimeout(() => {
            resolve("gracias por su compra!");
        }, 4000);
    });
}
*/

// all functions with the async at the beggining return a promise

/*
async function realizarPedido(producto) {
    // we can use a keyword that will allow us to 
    // stop the execution of the function
    // UNTIL an async process in completed

    try { // try code that could generate an error

        const respuesta = await ordenarProducto(producto); // wait until this is done!
        // once done the code continues
        console.log("respuesta recibida");
        const respuestaProcesada = await procesarPedido(respuesta); // wait again!
        // okay continue
        console.log(respuestaProcesada);
    }

    catch(error) {
        console.log(error);
    }
}   

realizarPedido("taza");
*/

// async await helps us write async code with the garantee
// that will execute as sync code 

// remember that async/await functions return promises
// therefore you can apply then and catch to the
// calling of an async/await function

// let's create our server with the http module

// const http = require("http"); // we import the module

// let's send a message to our browser

// each time the server recieves a request
// I'll execute the function we'll pass it as argument

// the function will have two arguments (request, reponse)
// that will represent the requests recieved and responses sent

/*
const servidor = http.createServer((req, res) => {
    console.log("solicitud nueva"); 
    res.end("Hola, mundo!"); // response method that sends response to client (finish process)

    // how do we make a server listen?? through a port

    // which is a virtual location in the OS in which an application 
    // can be accessed (an application or a specific process
    // that happens to be executing in that port)
    // ports are represented by positive numbers 
}); 
*/

// let's make our server be able to listen
// as arguments the port, and a function that will define what will happen
// when the server starts executing

/*
servidor.listen(3000, () => {
    console.log("El servidor esta escuchando...")
});
*/

// initialize by entering "node app.js" in the terminal
// to access the server ---> localhost:3000

// keep in mind, the function inside http.createServer() will 
// execute each time we make a request for the server to handle

// let's improve our server 

/*
const http = require("http"); 

const servidor = http.createServer((req, res) => {
    res.end("hola mundo");
}); 

const PUERTO = 3000; 

servidor.listen(PUERTO, () => {
    console.log(`el servidor esta escuchando en http://localhost:${PUERTO}...`);
}); 
*/

// request and response 

/*
const http = require("http"); 

const servidor = http.createServer((req, res) => {
    // let's start with request
    // it represents or contains the information 
    // of the HTTP requests sent by the client to the server
    // the structure of the request will be: 
    // the url from which the requests was sent
    // a method (what is it the client want the server to do)
    // header (additional info) 

    // to access all of that info we have properties (req is an object)

    console.log("===> req"); // this will represent the request
    // console.log(req); // we'll see the contents of the object

    // properties we'll be working with for now

    console.log(req.url); // the "/" represents main/home
    // req.url returns the path that we write after the server's domain
    // if "localhost:3000/freecodecamp" it'll return /freecodecamp

    console.log(req.method); // we also need to know the method of the request
    // what is the PURPOSE of that request (POST, PUT, etc)

    console.log(req.headers); // we can also see the headers of the request
    res.end("holaaa!");
});

const PUERTO = 3000; 

servidor.listen(PUERTO, () => {
    console.log(`servidor escuchando en http://localhost:${PUERTO}`);
});
*/

// about the response

/*
const http = require("http"); 

const servidor = http.createServer((req, res) => {
    console.log("===> res"); 
    // console.log(res); // all of the properties

    // console.log(res.statusCode); // 200 OK
    // res.statusCode = 404; // let's say...
    // console.log(res.statusCode); // 404 Not Found

    // to configure header

    res.setHeader("content-type", "application/json"); // this helps
    // to include these kinda files (json) in the header of the response
    console.log(res.getHeaders()); // to get the elements of the header
    
    res.end("hola mundoooo!");
});

const PUERTO = 3000; 

servidor.listen(PUERTO, () => {
    console.log(`el servidor esta escuchando en http://localhost:${PUERTO}`);
});
*/

// url module - let's start by create a URL object
// first we instance the URL class (globaly available)
// as an argument we'll pass a string that'll represent the url
// on a real server, we'd have the url of the request
// let's say we recieve the following url
// const miURL = new URL("https://www.ejemplo.com/cursos/programacion?ordenar=vistas&nivel=1");
// when this url finds its way to our server, we can proccess it 
// and obtain each part of it to work with it in our server as 
// however we need to

// get host
// since it is an object we can access to that property 
// console.log(miURL.hostname); // www.ejemplo.com - it was extracted

// get path
// console.log(miURL.pathname); // /cursos/programacion - it was extracted

// get query parameters
// this time the returned value is a little bit different
// because it is an object
// console.log(miURL.searchParams); // URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
// how do we access those values? remember that we are talking about an object
// console.log(miURL.searchParams.get("ordenar"));
// console.log(miURL.searchParams.get("nivel"));

// ROUTING

const http = require ("http"); 

// let's simulate a database

// const { infoCursos } = require("./cursos.js"); ---> to directly work with the object 
const cursos = require("./cursos.js");
const { json } = require("stream/consumers");

// let's create our server

const servidor = http.createServer((req, res) => {
    // we have to state what will happen 
    // when the server recieves a request
    // first we need to extract the method from the request

    // COULD also assign the methods with const metodos = req.methods;
    const { method } = req; // by using destructuring syntax, req is an object

    // the extracted method will state what will happen 

    switch(method) {
        case "GET":
            manejarSolicitudGET(req, res); // passing req and res so we have access to those objects
            break;
        case "POST":
            manejarSolicitudPOST(req, res);
            break;
        case "PUT":
            manejarSolicitudPUT(req, res);
            break; 
        case "DELETE": 
            manejarSolicitudDELETE(req, res);
            break;
        // in case the method is one we haven't prepared here
        default: 
            res.statusCode = 501;
            res.end(`el metodo ${method} no puede ser manejado por el servidor`);
    }
}); 

// let's handle GET 

function manejarSolicitudGET(req, res) {
    // to implement routing we need to know the VERB
    // but also the path, the resource or directory 
    // in which we want to work 
    // req.url 
    let path = req.url; 
    // we need a conditional to verify the structure of path 

    console.log(res.statusCode); // by default if successful it'll be 200
    // we don't have to explicitly configure it in our code
    // for any other code WE'LL NEED TO CONFIGURE AND ASSIGN

    if (path === "/") { // if main/home
        res.writeHead(200, {"Content-Type": "application/json"}); // add header
        res.statusCode = 200; // everything's fine 

        return res.end("bienvenidos a mi primer server y API creados con node.js");
    }
    else if (path === "/cursos") { // when we want to get a resource - info from /cursos
        res.statusCode = 200; 
        // in this case the answer will be the information about the courses
        return res.end(JSON.stringify(cursos.infoCursos)); // the module cursos has a property called infoCursos
    }

    // what if we want to be a bit more specific?

    else if (path === "/cursos/programacion") {
        res.statusCode = 200; 

        return res.end(JSON.stringify(cursos.infoCursos["programacion"]));
    }

    // what if the client requests a path we are not handling?

    else {
        res.statusCode = 404;
        res.end("el recurso solicitado no existe");
    }
}

// let's handle POST request

function manejarSolicitudPOST(req, res) {
    // we stract the path 

    const path = req.url; 

    // to post we need the body of the request


    // we'll let the user to add a course to our object
    if (path === "/cursos/programacion") {
        // this takes a lot more but for now we'll log in the console

        let cuerpo = "";

        // we'll work with events - what will happen when req recieves
        // a bit of data (by adding "data" the method understands), it's built-in 

        req.on("data", (contenido) => {
            // we turn that data to string

            cuerpo += contenido.toString(); // and we assign it to the body
        });

        // when "end" ---> when information stops beign recieved
        // we'll process it 
        req.on("end", () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            // convert to JS object
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);
            res.end("el servidor recibio una solicitud POST para /cursos/programacion");
        });
        //res.statusCode = 200; 
        //return res.end("el servidor recibio una solicitud POST para /cursos/programacion");
    }

    /*
    else {
        res.statusCode = 404;
        res.end("accion solicitado no existe");
    }
    */
}

function manejarSolicitudPUT(req, res) {
    // get path

    const path = req.url; 

    if (path === "/cursos/programacion") {
        res.statusCode = 200; 
        return res.end("el servidor recibio una solicitud PUT para /cursos/programacion");
    }
}

function manejarSolicitudDELETE(req, res) {
    // get path

    const path = req.url; 

    if (path === "/cursos/programacion") {
        res.statusCode = 200; 
        return res.end("el servidor recibio una solicitud DELETE para /cursos/programacion");
    }
}

const PUERTO = 3000; 

servidor.listen(PUERTO, () => {
    console.log(`el servidor esta escuchando en http://localhost:${PUERTO}`);
}); 

// also, all path can start with "api" ---> /api/cursos/programacion