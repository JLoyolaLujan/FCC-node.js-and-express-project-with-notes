// first npm init
// then npm install express
// now we import the express module

const express = require("express");

// the express module provides us a function that allow us to create
// an express app 

const app = express(); // we store the express application inside "app"

// like before, we'll work with an external file, to simulate a database
// we import it, with the destructuring syntax

const { infoCursos } = require("./datos/cursos.js");
// console.log(infoCursos); // works

// < --- this is me from the future hold on, skip this part if you just begun reading, head up to "how do we start routing in express?" ---> 

// routers ---> so we don't write the path parameters over and over in our code
// how do we create them? 
// every router will have a specific name with a specific "route" to follow
// const routerProgramacion = express.Router(); // we create

// to include the router
const routerProgramacion = require("./routers/programacion.js")
app.use("/api/cursos/programacion", routerProgramacion); // to tell express to use a path and associates it to a router

// the parameters we passed were the path, and the router
// now instead of writing that chunk of string, we use the constant
// const routerMatematicas = express.Router();

// to include the router 
const routerMatematicas = require("./routers/matematicas.js")
app.use("/api/cursos/matematicas", routerMatematicas);

// we take each constant to its respective file to make the main file more clean
// and import them here, the app.use() stays

// < --- okay byeee --->

// how do we start routing in express?

// all we do it through the app constant, and then the name 
// of the HTTP method that we'll handle

// let's start with the route / (main, home)
// as second argument we pass a function
// we'll use the req and res properties and methods
// and we'll use them inside the function 
// to handle what will happen when there's a GET
// request in /
app.get("/", (req, res) => {
    res.send("mi primer servidor");
});

// let's create another route with the same method
app.get("/api/cursos", (req, res) => {
    // res.send(infoCursos);
    // remember that you can also convert that info into json format
    res.send(JSON.stringify(infoCursos));
});

// the PORT is assigned - out in the real world, when you
// publish whatever you developed
// to get the port from the service you're working with
// you use process.env.PORT <--- that'll get it 
// if it is defined in the environment
const PUERTO = process.env.PORT || 3000;

// we'll use the listen method but through app
// as second parameter we pass a function that will be called
// when the server starts to listen
app.listen(PUERTO, () => {
    console.log(`el servidor esta escuchando en el puerto ${PUERTO}`);
});