

class DemoQAPracticeForm
{


   
    
    SetfirstName(firstName)
    {
        
        
        cy.get("#firstName").type(firstName);
       
     
        

    }

    SetlastName(lastName)
    {
        
        
       cy.get("#lastName").type(lastName);
     
        

    }

   
    SetuserEmail(userEmail)
    {
        
      
       cy.get("#userEmail").type(userEmail);
     
        

    }

    ClikGender()
    {
        //cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
        //cy.get("#gender-radio-2").click();
     
        

    }

    SetuserMobile(userMobile)
    {
        
       
        cy.get("#userNumber").type(userMobile);
     
        

    }
    
    SetSubjects(Subjects)
    {
        
        
        cy.get("").type(Subjects);
     
        

    }

    ClickHobies()
    {
        
        
      cy.get("").click();
     
        

    }

    SelectPicture()
    {
        
        
        cy.get("#uploadPicture").attachFile('image -Pic Test  Ctpress.jpg');
     
        

    }

    VerifyPicture()
    {
        
        
        cy.get("#uploadPicture").attachFile('image -Pic Test  Ctpress.jpg');
     
        cy.get("#uploadPicture").should('have.text','image -Pic Test  Ctpress.jpg')
        
        cy.get("#uploadPicture").should('not.have.text','picture')
    }
    
    SetCurrentAddress(CurrentAddress)
    {
        
        
        cy.get("").type(CurrentAddress);
     
        

    }

    SelectState()
    {
        
        
        cy.get("").select();
     
        

    }

    SelectCity()
    {
        
        
        cy.get("").select();
     
        

    }


    ClickSubmittButton()
    {
        
        
        cy.get("").select();
     
        

    }

}


export default DemoQAPracticeForm;