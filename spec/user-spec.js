import { User } from './../js/user.js';

var instanceOfUser;

beforeEach(function() {
  instanceOfUser = new User(32, "1986-01-16", "Mars");
})

describe('User', function() {

  it('will test to see if a users age is converted into seconds', function() {
      let ageInSec = instanceOfUser.ageInSeconds();
      expect(ageInSec).toEqual('1,009,822,464');
  });

  it('will take a users birthdate and return them an accurate age', function () {
    let age = instanceOfUser.accurateAge();
    expect(age).toEqual('32.11');
  });

  it('will take a users age and return their age on a different planet', function () {
    let planetYrs = instanceOfUser.planetAge();
    expect(planetYrs).toEqual('17.02');
  });

  it('will take a users age and return their life left on the planet', function () {
    let lifeLeftOnPlanet = instanceOfUser.lifeLeftOnPlanets();
    expect(lifeLeftOnPlanet).toEqual('25.00')
  });

  it('will provide a message if the user is pass the avg. life expectancy', function () {
    let instanceOfUser2 = new User(81, '16 Jan 1936', "Mars");
    let age = instanceOfUser2.accurateAge();
    let lifeMessage = instanceOfUser2.surpassedLifeExpectancy(age);
    expect(lifeMessage).toEqual("Wow you've surpassed the avg. life expectancy! You must be doing something right. Keep it up!!!");
  });

});
