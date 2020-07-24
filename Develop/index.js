const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Enter the title of your project.",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description for your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Enter instruction on how to install the project.",
    name: "instruction",
  },
  {
    type: "input",
    message: "Enter usage informtion.",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter all contributors to the project.",
    name: "contributors",
  },
  {
    type: "input",
    message: "Enter testing instructions.",
    name: "testing",
  },
  {
    type: "input",
    message: "What license would you like to use?",
    name: "license",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "Apache",
      "MIT",
      "Boost",
      "Unlicense",
    ],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
