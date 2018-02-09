import { User } from './../js/main.js';


describe('User', function() {

  it('will test to see if a users age is converted into seconds', function() {
      let userInstance = new User(39);
      let ageInSec = userInstance.ageInSeconds();
      expect(ageInSec).toEqual(1230721128);
  });



});
