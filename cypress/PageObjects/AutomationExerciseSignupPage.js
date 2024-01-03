//import 'cypress-iframe';

class AutomationExerciseSignup
{

   

    SetName(name)
    {

       cy.get(" div > form > input[type=text]:nth-child(2)").type(name)
       
    

    }


    SetEmail(email)
    {


        cy.get("input[data-qa='signup-email']").type(email)
    

    }


    ClickSignupButton()
    {

       
        cy.get("button[data-qa='signup-button']").click();
    

    }
   
    VerifyPOPupErrorMessage()
    {
        
        
        cy.get('[data-qa=error-popup]').should('not.have.text','Enter Account Information');
       

    }

    VerifyEnterAccountInfo()
    {
        
        
        cy.get(':nth-child(1) > b').should('have.text', 'Enter Account Information');
       

    }

   
  
    VerifyEnterAccountInfoNotVisible()
    {
        
        
       cy.get(':nth-child(1) > b').should('not.have.text','Enter Account Information');
       

    }
   
    ClickTitle()
    
    {

      

        cy.get('#id_gender2').click();
        //verify u cannot click both radiobuttons

        //cy.get("#id_gender1").should('not.be.checked','');

    }

   
    VerifyName()
    {
        // verfy name is auto ppulated

       cy.get("#name").should('be.visible');


    }



    VerifyEmail()
    {  
        // verify email is auto populated


        cy.get("#email").should('be.visible')

    }



    SetPassword(password)
    
    {
       
       cy.get("#password").type(password);

       //cy.get("#password").type(Cypress.env(password),{ log: false }) // check code to validate password not visible

    }

    VerifyPasswordIsNotVissible()
    
    {
       
        //cy.get('#password').should('not.be.visible');

      //cy.get('[data-qa="password"]').should('be.visible'),{ log: false })
       

    }
    
    SelectDateofbirth()
  
    {
         
        
        // select days
        cy.get("#days").scrollIntoView({duration:3000})

        cy.get("#days").select('23').should('be.visible')
     
    
        
       
       //select month
      

        cy.get("#months").scrollIntoView({duration:3000})

        cy.get("#months").select('June').should('be.visible')
     

       //select year
    
       cy.get("#years").scrollIntoView({duration:3000})

       cy.get("#years").select('2012').should('be.visible')




    }


    ClickCheckbox()
    {
        //check all 

       // cy.get("[type='checkbox']").check();
       cy.get('#newsletter').should('not.be.checked');
       cy.get('#optin').check();



    }


    SetFirstName(first_name)
    
    {
        cy.get("#first_name").type(first_name)
        
             
       cy.get("#first_name").should('be.visible')
          

       
    }


    SetLastName(last_name)
    
    {
       
       cy.get('#last_name').type(last_name)
       cy.get("#last_name") .should('be.visible')
       
    }


    

    SetCompany(company)
    
    {

        cy.get("#company").type(company)


    }


    SetAddresss1(address1)
    
    {

        cy.get("#address1").type(address1)


    }

    SetAddress2(address2)
    
    {

        cy.get("#address2").type(address2)


    }
    
    SelectCountry()
    {

       // cy.get("#country").contains('Canada').click()
       // cy.get("#country").select('Canada').should('be.visible')
     
        cy.get("#country").select('Canada').should('be.visible')

    }


    SetState(state)

    {

        cy.get("#state").type(state)


    }
   
    SetCity(city)
    {

        cy.get("#city").type(city)


    }

    SetZipcode(zipcode)
    {

        cy.get("#zipcode").type(zipcode)


    }

    
    SetMobileNumber(mobile_number)
    {

        cy.get("#mobile_number").type(mobile_number)


    }

    ClickCreateAccoubtButton()
    {

        cy.get("button[data-qa='create-account']").click();


    }
     
    
    VerifyAccountCreated()
    {
        
         //  cy.get('b').should('have.text','Account Created!');
        //
        cy.get(' #form > div > div > div > h2 > b').should('have.text','Account Created!');
    }





}

export default AutomationExerciseSignup;