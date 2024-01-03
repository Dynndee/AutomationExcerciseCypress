
// import the Page class  // specify class name you want have dinined as expaut defauly
// write code to enable inport of Pom b4 describle block-import Login from "../Pageobjects/Pompagename" Login = require('../../path/to/LoginPage');
import Login from "../../PageObjects/LoginPage";


import Login2 from "../../PageObjects/Aprroach2LoginPage"; 

//import DataOrangeHrm from "../../fixtures/DataOrangeHrm";//  not workin -see video AB Autumation hub Pom Series


'cypress-file-upload';


describe('PageObjects', function() {
  
//Appraoch 1

  it.only('LoginPage', function() {


   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
   //importing page object class  
   // then write a declare object of the Login class to acess the method
   // is ref of ojbect ref  variable 
   
   
    const LoginPage = new Login;
   
   LoginPage.SetUsername("Admin")
   LoginPage.SetPassword("admin123")
   LoginPage.ClickLoginButton();
   LoginPage.VerifyLogin();
   
   
    
  })

  //Appraoch 2
  it('LoginPage2', function() {


    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   
    //importing page object class  
    // then write a declare object of the Login class to acess the method
    // is ref of ojbect ref  variable 
    
    
     const LoginPage2 = new Login2;
    
     LoginPage2.SetUsername("Admin")
     LoginPage2.SetPassword("admin123")
     LoginPage2.ClickLoginButton();
     LoginPage2.VerifyLogin();
    
    
     
  })

 

  //Approach 3 Pom with fixttures // code not working 

  it('LoginPage', function() {
   

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   
  

    cy.fixture('DataOrangeHrm').then((data)=>{

      const LoginPage=new Login();
      
      LoginPage.SetUsername(data.username);
      LoginPage.SetPassword(data.password);
      LoginPage.ClickLoginButton();
      LoginPage.VerifyLogin();
      
    })



  })

    
    



  
    
 
     
    
    
     
  

})
    



  




    
    
    
    
    