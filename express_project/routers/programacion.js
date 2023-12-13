// first we import here express
const express = require("express");
const { route } = require("./matematicas.js");
// because we use express to create the router
const { programacion } = require("../datos/cursos.js").infoCursos;
const routerProgramacion = express.Router();

// middleware (execute after recieving a request and before sending a response)
routerProgramacion.use(express.json()); // to process the body of a POST request that is in json format
// so we can work with that body in our code

// this middleware has access to the object of a request
// to the object of the response, and to next(), which is a function
// that is called to execute the next middleware

// another route, to get the programming courses
// the path here is /api/cursos/programacion
// which was already associated to a router
// instead of "app", we write the name of the router
// and instead of the path, we write "/"
// to interpret the location as main (home)
routerProgramacion.get("/", (req, res) => {
    res.send(JSON.stringify(programacion));
});

// let's start using path parameters to do specific searches
// everything after the : is a url parameter
// those parameters can be extracted from the req object
routerProgramacion.get("/:lenguaje", (req, res) => {
    // to take the programming languaje and assign it to a const
    // we need to grab the req object and access the property "params"
    // (parameters) - to get the parameter we assigned after the :
    // (it now dwells in params)
    const lenguaje = req.params.lenguaje;
    // we can filter the list of courses based on programming languaje
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);
    
    // if no course was found
    if (resultados.length === 0) {
        return res.status(404).send(`no se encontraron cursos de ${lenguaje}`);
    }

    // let'scheck if the client added query parameters 
    // query parameters are part of the req object
    // req.query.nameOfParameter
    if (req.query.ordenar === "vistas") {
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas))); 
        // b.vistas - a.vistas to sort from biggest to smallest
    }

    // if filtered properly, then
    res.send(JSON.stringify(resultados)); // no need to specify if 200
    
});

// let's use two parameters instead of just one
// let's say we want to filter by languaje and level difficulty of the course
routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
    // we can access the two parameters with the parameters object
    const lenguaje = req.params.lenguaje; 
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    // if nothing found
    if (resultados.length === 0) {
        return res.status(404).send(`no se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    // if found
    res.send(JSON.stringify(resultados));
});

// now let's manage the HTTP method POST
// we'll work on the base of this router ---> /
routerProgramacion.post("/", (req, res) => {
    // requests can have a body, which is optional
    // if we the client SENDS info, that request has to have a body
    // let's assume that the format in which the course was sent, not
    // only is JSON, but also let's assume that it was validated
    // we extract the body with req.body
    let cursoNuevo = req.body;
    // now let's push this new curse into the array of courses (programacion)
    programacion.push(cursoNuevo); // even though cursoNuevo is in json this will work
    // and then we send the new array to the client
    res.send(JSON.stringify(programacion));
});

// now let's manage the HTTP method PUT |---> to update an entity in your database
// you have to send ALL the properties of the object to modify, and only the updated ones
// will be modified - you have to send the WHOLE entity
// in this case we'll ask th client to specify what to update
// we'll use the url parameter "id", so the user specifies, with the id, 
// what to change
routerProgramacion.put("/:id", (req, res) => {
    // we'll store the content of the body of the request
    const cursoActualizado = req.body;
    // then we'll extract the id of the course
    const id = req.params.id;

    // now we have the id the client sent, let's search it in our database
    // and store it within the variable "indice"
    const indice = programacion.findIndex(curso => curso.id == id); // no === since they are of different type
    // if the index is not found, then -1 is assigned to "indice"

    // if valid
    if (indice >= 0) {
        // we'll replace the WHOLE object
        programacion[indice] = cursoActualizado;
    }
    res.send(JSON.stringify(programacion));
});

// PATCH ---> to pass specific key-value pairs, of the properties in a course
// that we want to update - we don't pass the whole updated course
// we just pass what we want to change
// we'll need an id as in put
routerProgramacion.patch("/:id", (req, res) => {
    // we get the body of the request (just the updated info)
    const infoActualizada = req.body; 

    // as in before, we get the id
    const id = req.params.id; 

    // now let's search for it in the database and store it in a variable
    const indice = programacion.findIndex(curso => curso.id == id);
    // if nothing is found, -1 is stored into "indice"

    // if found
    if (indice >= 0) {
        // we need to obtain the course we want to update
        const cursoAModificar = programacion[indice];
        // now to modify just some properties of the object we use Object.assign()
        Object.assign(cursoAModificar, infoActualizada); 
        // the first parameter is modified by the second
    }
    res.send(JSON.stringify(programacion)); // we send response
});

// now let's delete a course!
// we'll also need an id here
routerProgramacion.delete("/:id", (req, res) => {
    // here we don't need the body of the request
    // we extract the id from the req object
    const id = req.params.id;

    // we need search for the course in our database 
    const indice = programacion.findIndex(curso => curso.id == id);

    // remember, if it isn't found, -1 is stored into "indice"

    // we check
    if (indice >= 0) {
        // to delete the specific element of an array
        // we could use splice (programacion.splice(indice, 1))
        // it cuts in "indice" and deletes 1 element
        programacion.splice(indice, 1);
    }
    // and we send the json response
    res.send(JSON.stringify(programacion)); // also is not necesary to convert into json
    // the res.send() sends it in json format as default
    // res.json() does the same, but can also handle arguments that aren't arrays or objects
});

module.exports = routerProgramacion;

// add status codes to the operations
// finish the project (the math part, re-do all if necesary)

// if an operation isnt succesful, instead of using res.status(404).send...
// you can use return res.status.(404).end(); to send an empty response
// it helps to stop the request but also to send an empty response
// instead of sending a string
// it's just for when you don't want to explain what went wrong

// learn when to use 404 and 204

// 204 ---> the request was completed successfully but no results are being returned

// 404 ---> what was requested could not be found