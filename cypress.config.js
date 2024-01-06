const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //html
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
       screenshotOnRunFailure=true;  // screenshot
       //to generate hTML repoter
       require('cypress-mochawesome-reporter/plugin')(on); 
       
       
       //"reporter": "cypress-mochawesome-reporter"
     
  
      
    },
  },
});

{
  "chromeWebSecurity"; false
}