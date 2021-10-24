// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `# License 
${license} 
${renderLicenseBadge(license)} ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Desciption 
${data.description}
# Table of Contents
${data.contents}
# Installation
${data.installation}
# Usage
${data.usage}
${renderLicenseSection(data.license)}
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
