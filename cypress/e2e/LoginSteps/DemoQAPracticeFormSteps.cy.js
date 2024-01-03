
import DemoQAPracticeForm from  "../../PageObjects/DemoQAPracticeFormPage";

import Home from "../../PageObjects/DemoQAHomePage";


describe('DemoQA Practice Form', function() {

 it('practicForm Steps', function() {

   cy.visit('https://demoqa.com/');
   
   cy.wait(3000)
    const HomePage = new Home;
    HomePage.ClickFormButton();
    HomePage.ClickPracticeForm();
    HomePage.VerifyPracticeForm();
     

            
     

   cy.fixture('DataDemoQAPraticeForm').then((data)=>
    {
      const DemoQAPracticFormPage=new DemoQAPracticeForm;
             


          
      DemoQAPracticFormPage.SetfirstName(data.FirstName);
      DemoQAPracticFormPage.SetlastName(data.LastName);
      //DemoQAPracticFormPage.SetuserEmail(data.Email);
      //DemoQAPracticFormPage.ClickGender();
     //DemoQAPracticFormPage.SetuserMobile(data.Mobile);
     //DemoQAPracticFormPage.SetSubjects(data.Subjects);
     //DemoQAPracticFormPage.ClickHobies(data.Hobies);
     // DemoQAPracticFormPage.SelectPicture();
     // DemoQAPracticFormPage.VerifyPicture();
     // DemoQAPracticFormPage.SetCurrentAddress(data.CurrentAddress);
     //DemoQAPracticFormPage.SetState(dataState);
     //DemoQAPracticFormPage.SetCity(data.City);
     //DemoQAPracticFormPage.ClickSubmittButton();
               
    })


  })

})