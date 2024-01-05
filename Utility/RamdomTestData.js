
// TestData.js
import faker from 'faker';

export default class RandomTestData {
  static getRandomSignUpData() {
    return {
      Name: faker.name.Name(),
      Email: faker.internet.email(),
      Password: faker.internet.password(),
      'Date of Birth': TestData.getRandomDateOfBirth(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      Company: faker.company.companyName(),
      Address1: faker.address.streetAddress(),
      Address2: faker.address.secondaryAddress(),
      Country: faker.address.country(),
      State: faker.address.state(),
      City: faker.address.city(),
      Zipcode: faker.address.zipCode(),
      mobile_number: faker.phone.phoneNumber(),
    };
  }

  static getRandomDateOfBirth() {
    const randomBirthDate = faker.date.between('1940-01-01', '2003-12-31');
    return `${randomBirthDate.getMonth() + 1}/${randomBirthDate.getDate()}/${randomBirthDate.getFullYear()}`;
  }
}

  