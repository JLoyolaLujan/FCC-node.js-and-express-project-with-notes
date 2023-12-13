// we can recieve the information with require

// const curso = require("./curso.json"); 

// console.log(curso); // display contents of file
// console.log(typeof curso); // when imported, JS converts it into an object

// let's access its info

// console.log(curso.temas);

// now, how do we convert a javascript object into json format text?
// with stringify

/*
let infoCurso = {
    "titulo": "aprende node.js",
    "numVistas": 23443,
    "numLikes": 2134,
    "temas": ["JS", "Node.js"],
    "esPublico": true
};
*/

// console.log(infoCurso);

// how do we convert the object into json?

/*
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON); // it is a string
console.log(infoCursoJSON.titulo); // wont work, because it isn't an object
*/

// now, how do we convert from json into a JS object?

/*
let infoCurso = {
    "titulo": "aprende node.js",
    "numVistas": 23443,
    "numLikes": 2134,
    "temas": ["JS", "Node.js"],
    "esPublico": true
};

let infoCursoJSON = JSON.stringify(infoCurso); // let's say we recieve this
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// to convert it

let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto); // works!
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo);
*/