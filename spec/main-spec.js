import { User } from './../js/main.js';

var userAge;

beforeEach(function() {
  userAge = new User(age);
})

describe('User', function() {

  it('will test to see if a users age is converted into seconds', function() {
    let output = "";
    output = userAge.ageInSeconds

    // let output = userAge.ageInSeconds(34);
    // expect(output).toEqual(1,072,936,368);

  });



});
