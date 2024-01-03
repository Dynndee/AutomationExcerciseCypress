

class CRMDemoLogin
{

   SetUserName(login_user)
   
   {
       cy.get("#login_user").type(login_user)

    }

   SetPassword(login_pass)
   {
     cy.get("#login_pass").type(login_pass)

    }


   SetLanguage(login_lang)
   {
     cy.get("#login_lang").click().select(option[value="es_ES"])
      
     // cy.get("#login_lang").click()
     //cy.get("option[value='es_ES']").should('be.vissible');
     //cy.get("option[value='es_ES']").click()
     //cy.get('select').select(1).should('have.value',' es_ES')
     //cy.get("#login_lang").select(option[value="es_ES"])
    }

    SetLanguage(login_theme)
    {
      cy.get("#login_theme").click().select(option[value="Flex"])
       
      // cy.get("#login_lang").click()
      //cy.get("option[value='es_ES']").should('be.vissible');
      //cy.get("option[value='es_ES']").click()
      //cy.get('select').select(1).should('have.value',' es_ES')
      //cy.get("#login_lang").select(option[value="es_ES"])
    }


    SetLoginButton(login_button)
    {

         cyget("#login_button").click()

    }
}

export default CRMDemoLogin