const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license:',
    choices: ['MIT', 'GPLv3', 'Apache-2.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address:',
  },
]).then((answers) => {
  const { title, description, installation, usage, contributing, tests, license, github, email } = answers;
  const filename = 'README.md';

  // Generate the README content
  const content = `
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
This project is licensed under the ${license} license.

## Questions
For questions about this project, please see my GitHub at [${github}](https://github.com/${github}), or email me at ${email}.
  `;

  // Write the content to the README.md file
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File '${filename}' successfully created!`);
    }
  });
});
