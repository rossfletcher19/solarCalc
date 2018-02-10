import { User } from './../js/user.js';

var instanceOfUser;

beforeEach(function() {

  instanceOfUser = new User(39, 'January 17, 1986');

})


describe('User', function() {

  it('will test to see if a users age is converted into seconds', function() {
      // let instanceOfUser = new User(39);
      let ageInSec = instanceOfUser.ageInSeconds();
      expect(ageInSec).toEqual(1230721128);
  });

  it('will take a users birthdate and return them an accurate age', function () {
    // let ageFromBday = instanceOfUser.accurateAge();
    // console.log(ageFromBday);

  });



});
