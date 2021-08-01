// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

function manager() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of team manager?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the id of team manager?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email of team manager?',
      },
      {
        type: 'input',
        name: 'phone',
        message: 'What is the office phone number of team manager?',
      },
      {
        type: "list",
        message: "Which type of team member you would like to add",
        choices: [
            "Engineer",
            "Intern"
        ],
        name: "role"
      },
      {
        type: 'list',
        message: "Which type of team member would you like to add?",
        choices: [
            "Engineer",
            "Inter",
            "No, I don't want to add more team members"
        ],
        name: 'additionalMember'
      }
    ])
    .then(function() {
        let newMember;
        if(additionalMember === "Engineer") {

        } else if(additionalMember === "Intern") {

        } else {
            completeHTML();
        }
    })
  };

// TODO: Create a function to write README file
// function write(data) {
//    writeFileAsync('./generatedREADME/README.md', generateHTML(data))
// }

// TODO: Create a function to initialize app
// const init = () => {
//     questions()
//       .then((data) => write(data))
//       .then(() => console.log('Successfully wrote to README.md'))
//       .catch((err) => console.error(err));
//   };

// Function call to initialize app
// init();
manager();