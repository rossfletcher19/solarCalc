export class User {
  constructor(age, birthdate) {
    this.age = age;
    this.birthdate = birthdate;
  }

    ageInSeconds(age) {
    // debugger;
    const YR_IN_SECS = 31556952;
    let ageInSec = this.age * YR_IN_SECS;
    return ageInSec;
    }
    // debugger;
    accurateAge(birthdate) {
    let sinceEpochToBdayInMilli = Date.parse(this.birthdate);
    let d = new Date();
    let t_millis = d.getTime();
    let ageInMilli = t_millis - sinceEpochToBdayInMilli;
    let ageInYears = ageInMilli/31536000000;


    // console.log(ageInMilli);
    return ageInYears.toFixed(2);



    }

};
