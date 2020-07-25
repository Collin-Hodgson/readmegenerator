const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
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
      name: "installation",
    },
    {
      type: "input",
      message: "Enter usage informtion.",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter all contributors to the project.",
      name: "contribution",
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
  ]);
}

function generateReadMe(answers) {
  return `
  # ${answers.title}

  ![${answers.license}](https://img.shields.io/badge/License-${encodeURI(
    answers.license
  )}-green.svg)

  # Description

  ${answers.description}

  # Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contribution](#Contribution)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  # Installation

  ${answers.installation}

`;
}

promptUser()
  .then(function (answers) {
    const readme = generateReadMe(answers);

    return writeFileAsync("ReadMe.md", readme);
  })
  .then(function () {
    console.log("Successfully wrote to ReadMe.md");
  })
  .catch(function (err) {
    console.log(err);
  });
