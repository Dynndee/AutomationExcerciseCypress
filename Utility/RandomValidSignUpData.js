
import faker from 'faker';

//const faker = require('faker');

function generateRandomValidSignUpData() {
    const randomName = "TestUser" + Math.floor(Math.random() * 1000);
    const randomEmail = `test${Math.floor(Math.random() * 1000)}@example.com`;
    const randomPassword = "Password" + Math.floor(Math.random() * 1000);
    
    // Generate a random date of birth within a reasonable range
    const randomYearOfBirth = 1980 + Math.floor(Math.random() * 20);
    const randomMonthOfBirth = 1 + Math.floor(Math.random() * 12);
    const randomDayOfBirth = 1 + Math.floor(Math.random() * 28);
    const randomDateOfBirth = `${randomMonthOfBirth}/${randomDayOfBirth}/${randomYearOfBirth}`;
  
    const randomFirstName = "FirstName" + Math.floor(Math.random() * 1000);
    const randomLastName = "LastName" + Math.floor(Math.random() * 1000);
    const randomCompany = "Company" + Math.floor(Math.random() * 1000);
    const randomAddress1 = "Address1" + Math.floor(Math.random() * 1000);
    const randomAddress2 = "Address2" + Math.floor(Math.random() * 1000);
    const randomCountry = "Canada"; // You can modify this to generate a random country
    const randomState = "State" + Math.floor(Math.random() * 1000);
    const randomCity = "City" + Math.floor(Math.random() * 1000);
    const randomZipcode = "Zip" + Math.floor(Math.random() * 1000);
    const randomMobileNumber = "555" + Math.floor(Math.random() * 100000000); // You can modify this to generate a random mobile number
  
    return {
      Name: randomName,
      Email: randomEmail,
      Password: randomPassword,
      DateOfBirth: randomDateOfBirth,
      first_name: randomFirstName,
      last_name: randomLastName,
      Company: randomCompany,
      Address1: randomAddress1,
      Address2: randomAddress2,
      Country: randomCountry,
      State: randomState,
      City: randomCity,
      Zipcode: randomZipcode,
      mobile_number: randomMobileNumber
    };
}
   
export default generateRandomValidSignUpData;

// Example usage
const testData = generateRandomValidSignUpData();
console.log(testData);