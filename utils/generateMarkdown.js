// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[ GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3-Clause") {
    return "[BSD 3-clause](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

let sections = [];

function renderSection(title, content) {
  if (!content || content === "") {
    return "";
  }
  sections.push(title);
  return ` ## ${title}
  
${content}
  `;
}

// TODO: Create a function to generate markdown for README

function renderQuestionsSection(github, email) {
  let section = ``;

  if (github) {
    section += `- [GitHub](https://github.com/${github})\n`;
  }

  if (email) {
    section += `- [Email](mailto:${email})\n`;
  }

  return section;
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

${renderSection("Description", data.description)}

## Table of Contents

- [Installation](#Installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Testing](#Test)
- [Questions](#questions)
- [License](#license)

${renderSection("Installation", data.installation)}

${renderSection("Usage", data.usage)}

${renderSection("Contributions", data.contributions)}
  
${renderSection("Testing", data.test)}

${renderSection("Questions", renderQuestionsSection(data.github, data.email))}

${renderSection("License", renderLicenseLink(data.license))}
`;
}

module.exports = generateMarkdown;
