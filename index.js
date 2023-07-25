// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are usage instructions?",
  },
  {
    type: "input",
    name: "contributions",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "test",
    message: "What are testing instructions?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "list",
    name: "license",
    message: "What is the license for this project?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, () => {});
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    let markdown = generateMarkdown(answers);

    writeToFile("READ.md", markdown);
  });
}

// Function call initialize app
init();
