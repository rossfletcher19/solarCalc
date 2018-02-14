import { User } from './../js/user.js';

var instanceOfUser;

beforeEach(function() {

  instanceOfUser = new User(39, '16 Jan 1986', "Jupiter");


})


describe('User', function() {

  it('will test to see if a users age is converted into seconds', function() {
      let ageInSec = instanceOfUser.ageInSeconds();
      expect(ageInSec).toEqual(1230721128);
  });

  it('will take a users birthdate and return them an accurate age', function () {
    let ageInMilli = instanceOfUser.accurateAge();
    let parsedAgeInYears = parseInt(ageInMilli);
    expect(parsedAgeInYears).toEqual(32);
  });

  it('will take a users age and return their age on a different planet', function () {
    let planetYrs = instanceOfUser.planetAge();
    expect(planetYrs).toEqual(3);
  });

});
