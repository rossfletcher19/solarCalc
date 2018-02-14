export class User {
  constructor(age, birthdate, planet) {
    this.age = age;
    this.birthdate = birthdate;
    this.planet = planet;
  }

    ageInSeconds(age) {
    const YR_IN_SECS = 31556952;
    let ageInSec = this.age * YR_IN_SECS;
    return ageInSec;
    }

    accurateAge(birthdate) {
    let sinceEpochToBdayInMilli = Date.parse(this.birthdate);
    let d = new Date();
    let t_millis = d.getTime();
    let ageInMilli = t_millis - sinceEpochToBdayInMilli;
    let ageInYears = ageInMilli/31536000000;
    return ageInYears;
    }

    planetAge(age, planet) {
      if (this.planet === "Mercury") {
        let planetYrs = this.age / .24;
        return parseInt(planetYrs);
      } else if (this.planet === "Venus") {
        let planetYrs = this.age / .62;
        return parseInt(planetYrs);
      } else if (this.planet === "Mars") {
        let planetYrs = this.age / 1.88;
        return parseInt(planetYrs);
      } else if (this.planet === "Jupiter") {
        let planetYrs = this.age / 11.86;
        return parseInt(planetYrs);
      } else {
        console.log("end of if");
      }

    }



};
