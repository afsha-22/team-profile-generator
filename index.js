// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const path = require("path");

teamArray = [];

function init() {
    manager();

    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "No, I don't want to add more team members"
                ],
                name: 'newMember'
            }
        ])
        .then(function(member) {
            if(member.newMember === "Engineer") {
                addEngineer()
            } else if(member.newMember === "Intern") {
                addIntern()
            } else {
                console.log("Team created!")
            }
        })
    }

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
        }
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.phone);
            teamArray.push(manager);
            createTeam();
        })
        .catch((err) => {
            console.error(err);
        })
    }
    
    function addEngineer() {
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
          },
          {
            type: "input",
            name: "id",
            message: "What is the engineer's employee ID number?" 
          },
          {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?"
          },
          {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
          }
        ]).then(answers => {
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
          teamArray.push(engineer);
          createTeam();
        })
        .catch((err) => {
            console.error(err);
        })
      }
    
      function addIntern() {
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
          },
          {
            type: "input",
            name: "id",
            message: "What is the intern's employee ID number?" 
          },
          {
            type: "input",
            name: "email",
            message: "What is the intern's email address?"
          },
          {
            type: "input",
            name: "school",
            message: "What school does the intern attend?"
          }
        ]).then(answers => {
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
          teamArray.push(intern);
          createTeam();
        })
        .catch((err) => {
            console.error(err);
        })
      }
}






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
init();