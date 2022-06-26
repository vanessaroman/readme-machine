// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const { resolve } = require('path');

// fs.writeFile("index.html", "<h1>Bye Squirrels</h1>", (err) => {
//   if (err) throw err

//   console.log("success")

// })
// TODO: Create an array of questions for user input

// ![license](./assets/${response.license}.png)

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Project Title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the project about?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Steps required to Install your Project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'User Instructions:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Any contributors?',
      name: 'contributions',
    },
    {
      type: 'input',
      message: 'Application Tests (Provide Examples on how to run them):',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter your GitHub username: ',
      name: 'questions',
    },
    {
      type: 'input',
      message: 'Enter your email: ',
      name: 'email',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Select a license associated with this project',
      choices: [
          { name: 'Creative License', value: 'Creative License: You are free to do as you please! Just yell creative license and you will face no consequences!'},  
          { name: 'Coding License', value: 'Coding License: You are officially a coder. With this license, by law, you cannot be denied a coding job. Go ahead and give Google a call!' },
          { name: 'Magic License', value: 'Magic License: Wow! You sure know how to trick the system. Can you feel your hands buzzing? That is the magic doing its thing!' },]
    }
  ]).then((response) =>{
    console.table(response)
    fs.writeFile("README.md", `

    

# ${response.title}

## Table of Contents
* [About](#about-this-application)
* [Installation](#installation-instructions) 
* [Usage](#user-instructions)
* [License](#license)
* [Contributions](#contributions-by) 
* [Tests](#tests)
* [Questions](#any-questions)
  
## About this Application 
    ${response.description}
      
## Installation Instructions
    ${response.installation}

## User Instructions 
    ${response.usage}

## License
    ${response.license}

## Contributions By
    ${response.contributions}

## Tests 
    ${response.tests}

## Any questions?
Find me here: [github.com/${response.questions}](https://github.com/${response.questions})

Reach me at: ${response.email}

      `


      , (err) => {
      if (err) throw err
    
      console.log("success")
    
    })

  });


  


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log()
}

// Function call to initialize app
init();
