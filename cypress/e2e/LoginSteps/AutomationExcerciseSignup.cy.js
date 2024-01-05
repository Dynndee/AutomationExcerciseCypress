
//import AutomationExerciseLogin from "../../PageObjects/AutomationExerciseLoginPage";

//import RandomTestData from "../../../Utility/RamdomTestData";
import generateRandomValidSignUpData from "../../../Utility/RandomValidSignUpData"
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
 
   it('should display an error message for invalid email', function () {
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
 
   it('should display an error message for duplicate email', function () {
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




    it.only('Radom Testdata Valid SignUp', () => {
      cy.fixture('AutomationExerciseSignupData').then(() => {

       const randomData = generateRandomValidSignUpData();
       signUpPage.SetName(randomData.Name);
       signUpPage.SetEmail(randomData.Email);

       cy.screenshot();
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
       cy.screenshot();
       signUpPage.ClickCreateAccoubtButton()
       signUpPage.VerifyAccountCreated()


       cy.screenshot();
      });
      

    });


    
  
    

  
  

 
  




 
});



