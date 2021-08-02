# team-profile-generator

![The Team Profile generator application](./asset/demo_image.png)

> **Note**: The above mockup is not the true representation. Please try yourself for better experience.

Demonstration video including walkthrough of the functionalities :

## Objectives & Functionalities:

1. User can generate profile of the entire team file using application.
2. They will be prompted with series of questions. None of the questions are mandotary.
3. The first series of questions will include details of the Manager ie Name, Id, Email and Phone number.
4. User will be then asked if they want to add new employee ie Engineer or Intern, or done with adding everyone.
5. If chosen to add new employee, series of questions will be presented.
6. Once user is done with adding everyone, new html will be created under "output" folder named as "team.html".
7. For all the classes created for this application, respective unit test cases have been added.

## How to run it

1. Download the copy of the project and open it in an IDE (preferably Visual Studio).
2. Run npm install from the root folder to install all the dependencies.
3. To generate the team profile, run `node index.js`, you will be present with series of questions.
4. Once all the questions are answered, html file will be generated with the information provided by you under `output` folder.
5. Open the `team.html` file in the browser to see the generated team profile.
6. To run the unit tests and see the result, run `npm run test`.
