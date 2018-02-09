import { User } from './../js/main.js';

var userInstance;

beforeEach(function() {
  userInstance = new User();
})

describe('User', function() {

  it('will test to see if a users age is converted into seconds', function() {
    let output = "";
    output = userInstance.ageInSeconds(34);

    // let output = userAge.ageInSeconds(34);
    expect(output).toEqual(1,072,936,368);

  });



});
