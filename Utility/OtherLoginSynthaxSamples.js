// TestData.js
import faker from 'faker';
//Faker.js is designed to generate realistic and valid data, including names.
// If you want to create "invalid" names, such as those containing special characters or other non-standard elements, //you may need to implement your own function to generate such data.

//Here's an example of a function that generates invalid names:

//

function generateInvalidName() {
    // Use a combination of valid characters and special characters
    const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*()_+{}[]|;:,.<>?';
    
    // Generate a random invalid name with a mix of valid and special characters
    let invalidName = '';
    for (let i = 0; i < 10; i++) {
      const charSet = i % 2 === 0 ? validChars : specialChars;
      const randomChar = charSet.charAt(Math.floor(Math.random() * charSet.length));
      invalidName += randomChar;
    }
  
    return invalidName;
  }
  
  // Example usage
  const invalidName = generateInvalidName();
  console.log('Invalid Name:', invalidName);

  // allows special characters

  import faker from 'faker';

function generateRandomSignUpData() {
  const randomName = Math.random() < 0.3 ? '' : generateRandomName();
  const randomEmail = generateRandomEmail(randomName);
  const randomPassword = "Password" + Math.floor(Math.random() * 1000);

  // ... (rest of the code remains the same)

  return {
    Name: randomName,
    Email: randomEmail,
    Password: randomPassword,
    // ... (other fields)
  };
}

function generateRandomName() {
  const allowSpecialChars = Math.random() < 0.5;
  const nameLength = allowSpecialChars ? 8 + Math.floor(Math.random() * 5) : 10 + Math.floor(Math.random() * 5);
  
  // Use faker's random.words method to generate a string without special characters
  return faker.random.words(nameLength).replace(/\W/g, '');
}

function generateRandomEmail(name) {
  const emailDomain = faker.internet.domainName();
  return `${name}@${emailDomain}.com`;
}

export default generateRandomSignUpData;

// Example usage
const testData = generateRandomSignUpData();
console.log(testData);

  