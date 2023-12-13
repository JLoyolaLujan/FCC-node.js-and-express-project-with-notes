// import express
const express = require("express");
// import courses
const { coding } = require("../data/courses").infoCourses;
// router
const routerCoding = express.Router();

// middleware (remember that executes after a request and before a response)
routerCoding.use(express.json()); // to be able to process the body of a POST request in JSON format

/*
get and ?order=views (check)
get by language (check)
get by language and level ---> /api/courses/language/level (check)

---

put
patch 
delete
*/

// get and sort by views
routerCoding.get("/", (req, res) => {
    if (req.query.order === "views") {
        return res.send(JSON.stringify(coding.sort((a, b) => b.views - a.views)));
    }
    else if (!req.query.order) {
        return res.send(JSON.stringify(coding.sort((a, b) => a.id - b.id)));
    }
});

// get by language 
routerCoding.get("/:language", (req, res) => {
    // get parameter
    const language = req.params.language; 
    // filter and assign
    const results = coding.filter(courses => courses.language.toLocaleLowerCase() === language); 
    // if nothing found
    if (results.length === 0) {
        return res.status(404).send(`can't find ${language} course`); 
    }
    res.send(JSON.stringify(results));
}); 

// get by language and level
routerCoding.get("/:language/:level", (req, res) => {
    // get language parameter
    const language = req.params.language; 
    // get level parameter
    const level = req.params.level; 
    // filter and assign
    const results = coding.filter(courses => courses.language.toLowerCase() === language && courses.level.toLowerCase() === level);
    // if nothing found
    if (results.length === 0) {
        return res.status(404).send(`can't find ${language} course of ${level} level`);
    }
    res.send(JSON.stringify(results));
}); 

// post
routerCoding.post("/", (req, res) => {
    // get body of request
    const newCourse = req.body; 
    // push
    coding.push(newCourse); 
    res.send(JSON.stringify(coding));
});

// put (update by replacing)
routerCoding.put("/:id", (req, res) => {
    // get body of request
    const newCourse = req.body; 
    // get id
    const id = req.params.id; 
    // get index 
    const index = coding.findIndex(courses => courses.id == id);
    // if it exists
    if (index >= 0) {
        coding[index] = newCourse;
    }
    else if (index < 0) {
        return res.status(404).send("can't find requested course to update");
    }
    res.send(JSON.stringify(coding));
});

// patch (update a specific property)
routerCoding.patch("/:id", (req, res) => {
    // get body 
    const newInfo = req.body; 
    // get id
    const id = req.params.id;
    // get index 
    const index = coding.findIndex(courses => courses.id == id);
    // if it exists
    if (index >= 0) {
        const objectToModify = coding[index]; 
        Object.assign(objectToModify, newInfo); 
    }
    else if (index < 0) {
        return res.status(404).send("can't find requested course to update");
    }
    res.send(JSON.stringify(coding));
}); 

// delete 
routerCoding.delete("/:id", (req, res) => {
    // get id
    const id = req.params.id; 
    // get index
    const index = coding.findIndex(courses => courses.id == id);
    // if it exists
    if (index >= 0) {
        coding.splice(index, 1); 
    }
    else if (index < 0) {
        return res.status(404).send("can't find requested course to delete");
    }
    res.send(JSON.stringify(coding));
}); 

// we export

module.exports = routerCoding;