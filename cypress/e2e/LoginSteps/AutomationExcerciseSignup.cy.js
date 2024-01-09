
//multiple import

import { generateRandomValidSignUpData, generateRandomInvalidEmail, generateInvalidEmailWithTooManyDots, generateInvalidEmailWithTooManyCommas } from "..//../../Utility/RandomValidSignUpData";

// single import
//import generateRandomValidSignUpData from "../../../Utility/RandomValidSignUpData"

import AutomationExerciseSignup from "../../PageObjects/AutomationExerciseSignupPage";


// Happy Path Create Account
describe('AutomationExerciseSignup', function () {
  const signUpPage = new AutomationExerciseSignup();
   
  
  beforeEach(() => {

     cy.visit('https://automationexercise.com/');
     cy.url().should('include','automationexercise.com') 
     .should('eq', 'https://automationexercise.com/')
     .should('contain','automationexercise')  // true
     .should('not.contain', 'AutomationionDemo')  // negative
     
     // verify Signup Login Page
 
     cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    
     cy.get('.signup-form > h2').should('be.visible')

     cy.get('.login-form > h2').should('be.visible')


    });
 
   it('should sign up with valid credentials', function () {
     cy.fixture('AutomationExerciseSignupData').then((data) => {
       const validData = data.find(entry => entry.scenarioName === 'ValidSignUp').data;
 
       signUpPage.SetName(validData.Name);
       signUpPage.SetEmail(validData.Email);
       signUpPage.ClickSignupButton();
       signUpPage.VerifyEnterAccountInfo();
       signUpPage.ClickTitle()
       signUpPage.VerifyEmail()
       signUpPage.SetPassword(validData.Password)
       cy.wait(5000)
       //signUpPage.VerifyPasswordIsNotVissible();

       signUpPage. SelectDateofbirth()

       signUpPage.ClickCheckbox()
       
       signUpPage.SetFirstName(validData.first_name)
       signUpPage.SetLastName(validData.last_name)
       signUpPage.SetCompany(validData.Company)
       
       signUpPage.SetAddresss1(validData.Address1)
       signUpPage.SetAddress2(validData.Address2)
       signUpPage.SelectCountry()
       signUpPage.SetState(validData.State)
       signUpPage.SetCity(validData.City)
       signUpPage.SetZipcode(validData.Zipcode)
       signUpPage.SetMobileNumber(validData.mobile_number)
       signUpPage.ClickCreateAccoubtButton()
       signUpPage.VerifyAccountCreated()




      });
   });
 
   it.skip('should display an error message for invalid email', function () {
     cy.fixture('AutomationExerciseSignupData').then((data) => {
       const invalidEmailData = data.find(entry => entry.scenarioName === 'invalidEmail').data;
 
       signUpPage.SetName(invalidEmailData.Name);
       signUpPage.SetEmail(invalidEmailData.EmailAddress);
       signUpPage.ClickSignupButton();
   
   
       signUpPage.WaitForPopupToDisappear();
       signUpPage.VerifyPopupErrorMessage();

       //signUpPage.VerifyEnterAccountInfoNotVisible(invalidEmailData.Expected);
     });
   });
    
   it.skip('should display an error message for duplicate email', function () {
     cy.fixture('AutomationExerciseSignupData').then((data) => {
       const invalidSignUpData2 = data.find(entry => entry.scenarioName === 'InvalidSignUp2').data;
 
       signUpPage.SetName(invalidSignUpData2.Name);
       signUpPage.SetEmail(invalidSignUpData2['Email Address']);
       signUpPage.ClickSignupButton();
       signUpPage.WaitForPopupToDisappear();
       signUpPage.VerifyPopupErrorMessage();
       // signUpPage.VerifyEnterAccountInfoNotVisible(invalidSignUpData2.Expected);
      });

    });



    // Happy Path 
    it('Radom Testdata Valid SignUp', () => {
      cy.fixture('AutomationExerciseSignupData').then(() => {

       const randomData = generateRandomValidSignUpData();

       signUpPage.SetName(randomData.Name);
       signUpPage.SetEmail(randomData.Email);

       cy.screenshot("HomePage");
       signUpPage.ClickSignupButton();
       signUpPage.VerifyEnterAccountInfo();
       signUpPage.ClickTitle()
       signUpPage.VerifyEmail()
       signUpPage.SetPassword(randomData.Password)

       cy.wait(5000)
       //signUpPage.VerifyPasswordIsNotVissible();

       signUpPage. SelectDateofbirth()

       signUpPage.ClickCheckbox()
      
       signUpPage.SetFirstName(randomData.first_name)
       signUpPage.SetLastName(randomData.last_name)
       signUpPage.SetCompany(randomData.Company)      
       signUpPage.SetAddresss1(randomData.Address1)
       signUpPage.SetAddress2(randomData.Address2)
       signUpPage.SelectCountry()
       signUpPage.SetState(randomData.State)
       signUpPage.SetCity(randomData.City)
       signUpPage.SetZipcode(randomData.Zipcode)
       signUpPage.SetMobileNumber(randomData.mobile_number)
       cy.screenshot("ContactDetails");
       signUpPage.ClickCreateAccoubtButton()
       signUpPage.VerifyAccountCreated("AccountCreated")

       cy.screenshot("HappyPath");
      });
      

    });
    
    // Umhappy Paths with Invalid Emails 
   

    it('Radom TestData InValid Email', () => {
     

      const randomValidData = generateRandomValidSignUpData();

      signUpPage.SetName(randomValidData.Name);
    
        
      const invalidEmailWithoutAtSymbol = generateRandomInvalidEmail();


      signUpPage.SetEmail(invalidEmailWithoutAtSymbol);

        
    
      cy.screenshot("UnhappyPathInvalidEmail");
    
      signUpPage.ClickSignupButton();
        
     //Alert
      console.log('After clicking signup button');

      //cy.on('window:alert', (text) => {
      // Assert the content of the alert
      //expect(text).to.include('Please fill in this field');
        
      cy.on('window:alert', (text) => {
         
        console.log('Alert Text:', text);
      
       //Assert the content of the alert
        expect(text).to.include('Please include an @ in the email address.');

       //cy.wait(2000);

       cy.screenshot("InvalidEmail AccounfNotcreated")

       cy.get(' #form > div > div > div > h2 > b').should('not.be.visible');
    
       cy.wait(2000); 


    
      })
    
    })

    it('Random test data InvalidEmailWithTooManyDots', () => {

      const randomValidData = generateRandomValidSignUpData();

      signUpPage.SetName(randomValidData.Name);

      const invalidEmailWithTooManyDots = generateInvalidEmailWithTooManyDots();

      signUpPage.SetEmail(invalidEmailWithTooManyDots);

      cy.screenshot("InvalidEmailWithTooManyDots");

      signUpPage.ClickSignupButton();

      // Alert 
      console.log("After clicing Signup Buttom");

       cy.on('window alert', (text) => {
       
       console.log('Alert text', text);
      
       expect(text).to.include('is used at a wrong postion in');

       cy.screenshot("InvalidEmailWithTooManyDotsAccount is not  created");

       signUpPage.VerifyAccountIsNotCreated("InvalidEmailWithTooManyDotsAccount Account is not created ");
       
       cy.screenshot();


      })
    })


    it('RandomData InvalidEmailWithTooManyCommas', () => {

      const randomData = generateRandomValidSignUpData();

      signUpPage.SetName(randomData.Name);

      const InvalidEmailWithTooManyCommas = generateInvalidEmailWithTooManyCommas();

      signUpPage.SetEmail(InvalidEmailWithTooManyCommas);

      cy.screenshot("InvalidEmailWithTooManyCommas")

      signUpPage.ClickSignupButton();

      // Alert 

      console.log(' After clicking Signip button');

      cy.on('window alert', (text) => {

        console.lof('alert text', text);

        expect(text).to.include('A part following @ should not contain the symbol');

        cy.screenshot("InvalidEmailWithTooManyCommas Account is not  created");

        signUpPage.VerifyAccountIsNotCreated("InvalidEmailWithTooManyCommas Account is not created ");
       
        cy.screenshot();




      })





    })
      
    

   // UnjHappy Path With Empty Name field
  it('Invalid Empty Name Test', () => {
    
    // this called directly so no need for const =
    signUpPage.SetEmptyName();

    
   // signUpPage.SetName(invalidEmptyName);

    const randomValidData = generateRandomValidSignUpData();

  
    signUpPage.SetEmail(randomValidData.Email);
    
    
    
    //or when typing in email directly then delete/comment out   const randomValidData = generateRandomValidSignUpData();
    //signUpPage.SetEmail('joanna@gmail.com'); 
    
  
    cy.screenshot("Invalid Empty Name Test'");

    signUpPage.ClickSignupButton();

    console.log('After clicking signup button');

    //cy.on('window:alert', (text) => {
    // Assert the content of the alert
    //expect(text).to.include('Please fill in this field');
    
    cy.on('window:alert', (text) => {
      // Log the alert text
      console.log('Alert Text:', text);
  
      //Assert the content of the alert
      expect(text).to.include('Please fill in this field.');

      cy.wait(2000);
      cy.screenshot("Invalid Empty Name Test Account is not created");

      cy.get(' #form > div > div > div > h2 > b').should('not.be.visible');
    
      cy.wait(8000); 


    });

    

    
   

    
  });


    
  

 
  




 
});



