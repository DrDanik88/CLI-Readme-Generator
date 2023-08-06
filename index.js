// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //questions plugin
const fs = require('fs'); //file system plugin to write file

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 
      'What was your motivation? - Why did you build this project? - What problem does it solve? - What did you learn?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe how to install your project.Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'link',
      message: 'Type a link to the deployed application or type na if not applicable.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    },
    {
      type: 'list',
      message: 'Would you like to include a license?',
      name: 'license',
      choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
  ];

  inquirer.prompt(questions).then(answers => {
    const readmeContent = `
  # ${answers.title}
  
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)
  

  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  ${answers.link}
  
  ## Usage
  ${answers.usage}
  
  ## Credits
  ${answers.contribution}

  ## License
  ${answers.license}
  
  ## Tests
  ${answers.tests}
  `;
  
    fs.writeFile('README.md', readmeContent, err => {
      if (err) {
        console.error('Error writing README.md:', err);
      } else {
        console.log('README.md has been successfully created!');
      }
    });
  });




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
