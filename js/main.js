export class User {
  constructor(age) {
    this.age = age;
  }


    ageInSeconds(this.age) {
    // debugger;
    const YR_IN_SECS = 31556952;
    let ageInSec = this.age * YR_IN_SECS;
    return ageInSec;

    }

};
