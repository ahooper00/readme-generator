// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the desciption of your project?',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'What is the table of contents of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How will a new user set up for this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['Apache', 'MIT', 'GNU GPLv3', 'GNU AGPLv3', 'Mozilla Public'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would someone contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How did you use tests for this application?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter you email address',
    }
];
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        console.log(markdown);
        writeToFile(markdown);
    });
}

// Function call to initialize app
init();



