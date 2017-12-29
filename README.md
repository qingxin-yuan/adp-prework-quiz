# App Developer Entrance Project
A simple client-side quiz app based on the provided requirements, data and views as RED Academy App Dev entrance test. Cloned from https://github.com/redacademy/

## Setup
**1. Install dependencies**
`> npm install`
**2. Run json-server**
`> json-server --watch src/quiz.json`
**3. Run Gulp**
`> gulp`

## Features
* JS ES6 syntax, jQuery 
* CSS/SASS

## Dev Tools
* Gulp - minimizing files for production, eslint
* Babel - transpiling ES6 into ES5

## Screenshot
![Alt Text](/diagrams/quiz-start-screen.png?raw=true "quiz start screen")
![Alt Text](/diagrams/quiz-question-screen.png?raw=true "quiz questioin screen")

## What I learned
* One of the hiccups during development is to pulling data from .json file. Because the .json file is local, ajax request is not possible without any extra setup. I used a node module `json-server` to locally serve the .json file hence ajax request works. Another possible solution was to copy paste the data directly into the .js file, and pull data through object properties. 
* Another success is to familiarize myself with JS ES6 syntax, especially the arrow function. However, despite the upgraded, simplified syntax, there was some unexpected behavior when I tried to combine `.on('click',()=>{ }` with `$(this)` in the callback function. The solution I found was to use `event.target` instead, and it behaved as expected. 