
// Run this command in terminalo
// npm i -D allure-playwright details hmention here https://www.npmjs.com/package/allure-playwright

// How to run in config we have html reporter so we add here allure first line and then it parse

// npx playwright test --grep @run --reporter=line,allure-playwright
// you will see 1 folder called allure report in the root
// ----commandline -> allure generate ./allure-results --clean
// (path of allure result)
// --it will generate 1 consoldite file --clean  will claean rest of the files

// if you get error allure not found install npm install -g allure-commandline --save-dev
// it will create allure-report
// to open report -> allure open ./allure-report