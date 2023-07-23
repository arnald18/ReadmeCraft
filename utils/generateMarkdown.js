// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderSection(title, content) {
  return ` ## ${title}
  
${content}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let questionsSection = `- [GitHub](https://github.com/${data.github})
  - [Email](mailto:${data.email})
  `;

  return `# ${data.title}

  ${renderSection("Description", data.description)}


  ${renderSection("Installation", data.installation)}


  ${renderSection("Usage", data.usage)}


  ${renderSection("Contributions", data.contributions)}
  
 
  ${renderSection("Testing", data.test)}



`;
}

module.exports = generateMarkdown;
