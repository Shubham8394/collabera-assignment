*****************************************FOLDER STRUCTURE*******************************************

> .vscode
This folder contains the configuration for stepDefinition and feature files so that navigation from a Gherkin Step to its step definition file could be easy.

> allure-report
The allure report will be stored in this folder, once you execute a scenario for the first time then this folder will be automatically generated (not commited in git).

> data
This folder contains the sample data which will be used for test scenario execution (data.json)

> features
This folder contains all the required feature files which is written in Gherkin Language (myStore.feature)

> lib
This folder contains helpers.js file which is having all the utility functions like click, getText, etc. which are most frequently used functions in the framework for performing any operation on the application.

> locators
This folder contains the objectRepository.js file which is having all the objects/locators of an application (used for test scenario execution) written in css, xpath form.

> node_modules
Once you install all the dependencies then this folder will be created automatically storing all the libraries which is required for automation execution.

> reports
The screenshots which will be taken after every Gherkin Step execution will be stored under this folder. This folder will be automatically created once you execute the scenario for the first time.

> stepDefs
This folder contains all the step definition files which actually defines the set of operations will be performed for every Gherkin step (myStoreSteps.js)

> .gitignore
We can specify the files and folders under this file which we don't want to commit to git.

> babel.config.js
In this file, we only have to specify the node version installed on your system. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

> package.json
This file contains all the dependencies which is used for performing automation and also you need to specify the scripts (command for test execution) which you want to execute.

> wdio.conf.js
This is the main configuration file of the WebdriverIO framework where we specify the feature files path, step definition files path, tag name, timeout, reporting configuration, etc.



***************************************STEPS TO EXECUTE THE SCRIPT*****************************************

> Open the terminal and execute this command - "npm i"
This command will install all the dependencies (specified in package.json) and create node_modules folder which will be having all the libraries required for automation execution.

> Once the above command is executed then run this command on the terminal - "npm run test"
This command will start the test execution and perform all the operations specified in feature file.

> allure-report and reports
These folders will be automatically generated once the execution is completed and it will automatically open the allure report in chrome browser (or in your system's default browser) where you can view Pie Charts, Graphs, Timeline, Screenshots attached with each Step (under Suites section).

> Deploy reports on remote server
Navigate to this url - "https://app.netlify.com/" and login with your GitHub credentials after that under "Sites" section drag & drop the "allure-report" folder which will auto-generate a url so that whenever you want to access your report then you can launch that auto-generated url to view your reports.


Report Link - https://collabera-assignment.netlify.app/
