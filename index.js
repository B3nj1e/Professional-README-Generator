// Packages required for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = ["What is the title of your project?", "what is your GitHub username?", "What is your email address?", "Please enter a brief description of your project", "Please enter the installation instructions for this project", "Please enter usage instructions for this project", "Please enter the contribution guidelines", "Please enter the test instructions for this project", "Do you have any questions relating to your project?", "Please choose a licence for your application from the list of options"];

// array of names for user input
const names = ["title", "github", "email", "description", "installation", "usage", "contribution", "test", "license"]

// inquirer package user prompt questions/input/names
inquirer   
    .prompt([
        {
        type: 'input', 
        message: questions[0],
        name: names[0],
    },
    {
        type: 'input', 
        message: questions[1],
        name: names[1],
    },
    {
        type: 'input', 
        message: questions[2],
        name: names[2],
    },
    {
        type: 'input', 
        message: questions[3],
        name: names[3],
    },
    {
        type: 'input', 
        message: questions[4],
        name: names[4],
    },
    {
        type: 'input', 
        message: questions[5],
        name: names[5],
    },
    {
        type: 'input', 
        message: questions[6],
        name: names[6],
    },
    {
        type: 'input', 
        message: questions[7],
        name: names[7],
    },
    {
        type: 'list', 
        message: questions[8],
        name: names[8],
        choices: ["no license", "The Unlicense", "MIT license", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0"]
    },
    ]).then((data) => {
        console.log(data);
        generateMarkdown(data);}).catch((error) => {
        console.log(error)
        })
    

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();