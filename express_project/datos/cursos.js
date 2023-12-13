let infoCursos = {
    "programacion": [
        {
            id: 1,
            titulo: "aprende python",
            lenguaje: "python",
            vistas: 15000,
            nivel: "basico"
        },
        {
            id: 2,
            titulo: "python intermedio",
            lenguaje: "python",
            vistas: 13000,
            nivel: "intermedio"
        },
        {
            id: 3,
            titulo: "aprende javascript",
            lenguaje: "javascript",
            vistas: 18000,
            nivel: "basico"
        }
    ],
    matematicas: [
        {
            id: 1,
            titulo: "aprende calculo",
            tema: "calculo",
            vistas: 12000,
            nivel: "basico"
        },
        {
            id: 2,
            titulo: "aprende algebra",
            tema: "algebra",
            vistas: 16000,
            nivel: "intermedio"
        }
    ]
}

// we export

module.exports.infoCursos = infoCursos;