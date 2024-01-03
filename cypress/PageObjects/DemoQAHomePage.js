

class Home
{
    ClickElement()
    {

        cy.get("").click()


    }


   ClickFormButton()
    {
        cy.get(':nth-child(2) > :nth-child(1) > .card-body > h5').click();

        //cy.get("//*[@id='app']/div/div/div[2]/div/div[2]").click()


    }     


    ClickPracticeForm()
    {
        
        
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click();
      
        

    }

    VerifyPracticeForm()
    {
        
        
        cy.get('.main-header').should('have.text', 'Practice Form');
   
        cy.get('.main-header').should('not.have.text', 'Sweets Form');
        

    }
}

export default Home;