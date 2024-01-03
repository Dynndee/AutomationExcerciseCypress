


class Login
{

    SetUsername(username)
    {
        
        
         cy.get("input[placeholder='Username']").type(username);
     
        

    }

    SetPassword(password)
    {
      
        cy.get("input[placeholder='Password']").type(password);
        

    }


    ClickLoginButton()
    {
      
        cy.get("button[type='submit']").click();
        

    }

    VerifyLogin()
    {
      
     cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard');
        

    }

   
   

}

export default Login;

