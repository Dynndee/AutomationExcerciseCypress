

class AutomationExerciseLogin
{   
    SetEmail(email)
    {


        cy.get("input[data-qa='login-email']").type(email)
    

    }


    SetPassword(password)
    {


        cy.get("input[placeholder='Password']").type(password)
    

    }


    ClickLoginButton()
    {


        cy.get("button[data-qa='login-button']").click();
    

    }

    

}




export default AutomationExerciseLogin;