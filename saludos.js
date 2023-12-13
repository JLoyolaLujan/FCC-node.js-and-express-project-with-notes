
function saludar(nombre) {
    return `hola, ${nombre}`;
}

/*
function saludarHolaMundo() {
    return "hola, mundo!";
}
*/
// we need to export the module here
// module.exports is an empty object in which you add the thing
// you want to export

/*
module.exports.saludar = saludar; 
module.exports.saludarHolaMundo = saludarHolaMundo;
*/

// alternative sintax

/*
module.exports = {
    saludar: saludar, 
    saludarHolaMundo: saludarHolaMundo
}; // double quotes in the property's name if the name has some spac
*/

