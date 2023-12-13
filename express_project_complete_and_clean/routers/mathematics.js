// import express
const express = require("express");
// import courses
const { mathematics } = require("../data/courses").infoCourses;
// router
const routerMathematics = express.Router();

// middleware (remember that executes after a request and before a response)
routerMathematics.use(express.json()); // to be able to process the body of a POST request in JSON format

/*
get be able to sort (check)
get by theme (check)
get by theme and level ---> /api/courses/theme/level (check)

---

put (check)
patch (check)
delete (check)
*/

// get
routerMathematics.get("/", (req, res) => {
    // if (?order=views) the results will be sorted from biggest views number to smallest
    if(req.query.order === "views") {
        return res.send(JSON.stringify(mathematics.sort((a, b) => b.views - a.views))); // fix later
    }
    else if (!req.query.order) {
        return res.send(JSON.stringify(mathematics.sort((a,b) => a.id - b.id)));
    }
});

// get by theme
routerMathematics.get("/:theme", (req, res) => {
    // we'll extract the id from the request
    const theme = req.params.theme;
    // we filter by Id with "filter" and store it into a variable
    const results = mathematics.filter(course => course.theme.toLocaleLowerCase() == theme);

    // if nothing found 
    if (results.length === 0) {
        return res.status(404).send(`no course found with the theme ${theme}`);
    }
    
    res.send(JSON.stringify(results));
});

// get by theme and level
routerMathematics.get("/:theme/:level", (req, res) => {
    // get theme from the body of the request
    const theme = req.params.theme;
    const level = req.params.level;
    // filter and store if found
    const results = mathematics.filter(course => course.theme.toLocaleLowerCase() === theme && course.level.toLocaleLowerCase() === level);
    // if nothing found
    if(results.length === 0) {
        console.log(level);
        return res.status(404).send(`no ${theme} course of ${level} level found`);
    }

    res.send(JSON.stringify(results));
});

// post (we take and push)
routerMathematics.post("/", (req, res) => {
    // get body
    const newCourse = req.body;
    mathematics.push(newCourse);
    res.send(JSON.stringify(mathematics));
});

// put (we update by replacing)
routerMathematics.put("/:id", (req, res) => {
    // get body
    const newCourse = req.body;
    // get id
    const id = req.params.id;
    // find index and assign
    const index = mathematics.findIndex(courses => courses.id == id);

    // if it exists
    if(index >= 0) {
        mathematics[index] = newCourse; // we replace
    }
    else if (index < 0){
        res.status(404).send(`can't find requested course to update`);
    }

    res.send(JSON.stringify(mathematics));
});

// patch (we update specific parameters of an object)
routerMathematics.patch("/:id", (req, res) => {
    // get body
    const newInfo = req.body; 
    // get id
    const id = req.params.id; 
    // find index and assign
    const index = mathematics.findIndex(courses => courses.id == id);
    // if it exists
    if (index >= 0) {
        const objectToModify = mathematics[index]; 
        Object.assign(objectToModify, newInfo);
    }
    else if (index < 0) {
        res.status(404).send(`can't find requested course to update`);
    }

    res.send(JSON.stringify(mathematics));
});

// now we delete
routerMathematics.delete("/:id", (req, res) => {
    // get id
    const id = req.params.id; 
    // get index
    const index = mathematics.findIndex(courses => courses.id == id); 
    // if it exists
    if (index >= 0) {
        // splice the object out
        mathematics.splice(index, 1); 
    }
    else if (index < 0) {
        res.status(404).send(`can't find requested course to delete`);
    }

    res.send(JSON.stringify(mathematics));
}); 

// we export
module.exports = routerMathematics; // like this to directly assign it to the constant in app.js