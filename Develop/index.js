// Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Convert fs.writeFile into Promise version of same
const writeFileAsync = util.promisify(fs.writeFile);

// Questions for user 
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: [
      'MIT',
      'Apache 2.0',
      'GPL 3.0',
      'BSD 3',
      'None',
    ],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please describe how other developers can contribute to your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide examples of how to run tests for your application.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
])
.then((answers) => {
  // Generate README content
  const readMeContent = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
[![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})
This application is covered by the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at https://github.com/${answers.github}.
`;

  // Write README file
  return writeFileAsync('README.md', readMeContent);
})
.then(() => console.log('Successfully generated README.md file'))
.catch((err) => console.error(err));
