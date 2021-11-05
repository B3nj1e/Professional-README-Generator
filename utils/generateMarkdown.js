// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');

let licenseType = ""

function renderLicenseBadge(license) {
  licenseColor = 'success'
  licenseName = license.split(' ').join('')
  licenseBadgeLink = `https://img.shields.io/static/v1?label=License&message=${licenseName}&color=${licenseColor}`;
  licenseBadge = `![license badge](${licenseBadgeLink})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  licenseLink = "";

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "no lience") {
    licenseType = "";
  } else if (license == "MIT license") {
    licenseType = `MIT License
    
       Copyright (c) 2021
       
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated documentation files (the "Software"), to deal
       in the Software without restriction, including without limitation the rights
       to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       copies of the Software, and to permit persons to whom the Software is
       furnished to do so, subject to the following conditions:
       
       The above copyright notice and this permission notice shall be included in all
       copies or substantial portions of the Software.
       
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       SOFTWARE.`;
  } else if (license == "The Unlicense") {
    licenseType = `This is free and unencumbered software released into the public domain.
    
       Anyone is free to copy, modify, publish, use, compile, sell, or
       distribute this software, either in source code form or as a compiled
       binary, for any purpose, commercial or non-commercial, and by any
       means.
       
       In jurisdictions that recognize copyright laws, the author or authors
       of this software dedicate any and all copyright interest in the
       software to the public domain. We make this dedication for the benefit
       of the public at large and to the detriment of our heirs and
       successors. We intend this dedication to be an overt act of
       relinquishment in perpetuity of all present and future rights to this
       software under copyright law.
       
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
       EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
       MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
       IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
       OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
       ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
       OTHER DEALINGS IN THE SOFTWARE.
       
       For more information, please refer to <https://unlicense.org>`;
  } else if (license == "GNU AGPLv3") {
    licenseType = `GNU AFFERO GENERAL PUBLIC LICENSE
       Version 3, 19 November 2007
    
      Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
      Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.`;
  } else if (license == "GNU GPLv3") {
    licenseType = `GNU GENERAL PUBLIC LICENSE
      Version 3, 29 June 2007
    
      Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
      Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.`;
  } else if (license == "GNU LGPLv3") {
    licenseType = `GNU LESSER GENERAL PUBLIC LICENSE
      Version 3, 29 June 2007
    
      Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
      Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.`;
  } else if (license == "Mozilla Public License 2.0") {
    licenseType = `Mozilla Public License Version 2.0
      ==================================`;
  } else if (license == "Apache License 2.0") {
    licenseType = `Apache License
      Version 2.0, January 2004
      http://www.apache.org/licenses/`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseSection(data.license);
  let readmeContent =
    `
# ${data.title} 
${licenseBadge}

## Table of Contents
* [GitHub](#GitHub)
* [Description](#description)
* [Installation Instructions](#installation)
* [Usage Instructions](#usage)
* [Contribution Guidelines](#contribution)
* [Test](#test)
* [Questions](#questions)
* [License](#license)

## GitHub
My GitHub username is ${data.github}. 
Please click [here](https://github.com/${data.github}) to access my GitHub profile.

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## Questions
If you have any questions, please contact me vie my email at ${data.email}. Alternative contact me via my GitHub account listed above. 

## License
If you require more information concerning the license, please click [here](https://choosealicense.com/licenses/).

${licenseType}

`;


  fs.writeFile("README.md", readmeContent, (err) => {
    if (err) { console.log(err) } else { console.log("second success"); fs.readFileSync("README.md", "utf-8") }
  });

}

module.exports = generateMarkdown;
