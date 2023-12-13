// import express module 
const express = require("express");
// now I can create the express app
const app = express();
// I'll be working with a external file to simulate a database
// the file itself will store several courses, each store in a category
// import with destructuring syntax
const { infoCourses } = require("./data/courses");
//console.log(infoCourses); ---> works

// import routers and associate them with their respective paths

const routerMathematics = require("./routers/mathematics");
app.use("/api/courses/mathematics", routerMathematics);

const routerCoding = require("./routers/coding");
app.use("/api/courses/coding", routerCoding);

// let's start routing (/ and /courses)

app.get("/", (req, res) => {
    res.send("welcome home");
});

// now a get request in /courses plus sorting (?order=views)
app.get("/api/courses", (req, res) => { 
    if (req.query.order === "views") {
        const arr = [];

        for(let i = 0; i < (infoCourses.coding.length + infoCourses.mathematics.length); i++) {
            arr.push(infoCourses.coding[i]);
            arr.push(infoCourses.mathematics[i]);
        }

        return res.send(JSON.stringify(arr.sort((a, b) => b.views - a.views)));
    }

    else if (!req.query.order) {
        res.send(JSON.stringify(infoCourses));
    }
});

// assign port and listen

const PORT_3000 = process.env.PORT || 3000;

app.listen(PORT_3000, () => {
    console.log(`server listening at http://localhost:${PORT_3000}`);
});