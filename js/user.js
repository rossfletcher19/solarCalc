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
    let ageDifsMs = Date.now() - Date.getTime(birthdate);
    let ageDate = new Date(ageDifsMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  

    }

};
