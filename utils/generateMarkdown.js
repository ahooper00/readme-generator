// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return '![Apache](https://badgen.net//github/license/micromatch/micromatch) (https://www.apache.org/licenses/LICENSE-2.0)';
  } else if (license === 'MIT') {
    return '![MIT](https://badgen.net//github/license/micromatch/micromatch) (https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU GPLv3') {
    return '![GNU GPLv3](https://badgen.net//github/license/micromatch/micromatch) (https://www.gnu.org/licenses/gpl-3.0.en.html)';
  } else if (license === 'GNU AGPLv3') {
    return '![GNU AGPLv3](https://badgen.net//github/license/micromatch/micromatch) (https://www.gnu.org/licenses/agpl-3.0.en.html)';
  } else if (license === 'Mozilla Public') {
    return '![Mozilla Public](https://badgen.net//github/license/micromatch/micromatch) (https://www.mozilla.org/en-US/MPL)';
  } else {
    return 'No license selected';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `# License 
${license} 
${renderLicenseBadge(license)}`;
  } else {
    return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseSection(data.license)}
# ${data.title}
# Desciption 
${data.description}
# Table of Contents
Installation\nUsage\nContributing\nTests\nQuestions
# Installation
${data.installation}
# Usage
${data.usage}
# Contributing
${data.contributing}
# Tests
${data.tests}
# Questions
${data.github}
${data.email}
`;
}
module.exports = generateMarkdown;
