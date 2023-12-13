// first we import here express
const express = require("express");
// because we use express to create the router

// we'll also need access to cursos.js
// from it we'll extract the object matematicas
const { matematicas } = require("../datos/cursos.js").infoCursos;
const routerMatematicas = express.Router();

// to get the math courses
routerMatematicas.get("/", (req, res) => {
    res.send(JSON.stringify(matematicas));
});  

// let's do the same but for math courses

routerMatematicas.get("/:tema", (req, res) => {
    // we get the parameter
    const tema = req.params.tema;
    // we filter results
    const resultados = matematicas.filter(cursos => cursos.tema === tema);

    // if nothing found
    if (resultados.length === 0) {
        return res.status(404).send(`no se encuentran cursos de ${tema}`);
    }

    // if succesful then
    res.send(JSON.stringify(resultados));
});

// now we export the router

module.exports = routerMatematicas; // like this to directly assign it to
// the constant in app.js