/*
schema: 

id
title
language/theme
views
level
*/

let infoCourses = {
    "coding" : [
        {
            id: 1,
            title: "introduction to JavaScript",
            language: "JavaScript",
            views: 346342,
            level: "basic"
        },
        {
            id: 2,
            title: "6 JavaScript projects",
            language: "JavaScript",
            views: 143256,
            level: "intermedium"
        },
        {
            id: 3,
            title: "intermedium python",
            language: "Python",
            views: 432613,
            level: "intermedium"
        },
        {
            id: 4,
            title: "advances python",
            language: "Python",
            views: 321674,
            level: "advanced"
        },
    ],
    "mathematics" : [
        {
            id: 1,
            title: "basic algebra",
            theme: "algebra",
            views: 243197,
            level: "basic"
        },
        {
            id: 2,
            title: "basic calculus",
            theme: "Calculus",
            views: 246341,
            level: "basic"
        },
        {
            id: 3,
            title: "a deep dive into statistics",
            theme: "Statistics",
            views: 12879,
            level: "advanced"
        },
        {
            id: 4,
            title: "geometry exercises",
            theme: "Geometry",
            views: 547453,
            level: "intermedium"
        },
        {
            id: 5,
            title: "advanced calculus",
            theme: "algebra",
            views: 243197,
            level: "advanced"
        },
    ]
}

// we export
module.exports.infoCourses = infoCourses; 