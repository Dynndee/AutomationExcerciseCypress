

class Login2
{
   textUsername ="input[placeholder='username']"
   textPassword ="input[placeholder='password']"
   btnSubmit    ="button[type='submit']"
   labelMsg     =".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

  SetUsername(Username)  
    {

        cy.get(this. textUsername).type(Username);

    }


    SetPassword(Password)
    {
      
        cy.get(this.textPassword).type(Password);
        

    }


    ClickLoginButton()
    {
      
        cy.get(this.btnSubmit).click();
        

    }

    VerifyLogin()
    {
      
     cy.get(this.labelMsg).should('have.text','Dashboard');
        

    }


   


}

export default Login2;