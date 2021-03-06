export class User {
  constructor(age, birthdate, planet) {
    this.age = age;
    this.birthdate = birthdate;
    this.planet = planet;
  }

    ageInSeconds(age) {
    const YR_IN_SECS = 31556952;
    let ageInSec = age * YR_IN_SECS;
    return ageInSec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } // regex uses 2 lookahead assertions: a positive one to look for any point in the string that has a multiple of 3 digits in a row after it, and a negative assertion to make sure that point only has exactly a multiple of 3 digits. The replacement expression puts a comma there

    accurateAge(birthdate) {
    let sinceEpochToBdayInMilli = Date.parse(this.birthdate);
    let d = new Date();
    let t_millis = d.getTime();
    let ageInMilli = t_millis - sinceEpochToBdayInMilli;
    let ageInYears = ageInMilli/31536000000;
    return ageInYears.toFixed(2);
    }

    surpassedLifeExpectancy(age) {
        if(age > 79) {
          return "Wow you've surpassed the avg. life expectancy! You must be doing something right. Keep it up!!!";
        } else if (age <= 79) {
          return "Life is too short to sit around not learning something challenging like Javascript, Java, and Android... So get to it!!";
        } else {
      }
    }



    planetAge(planet) {
      if (this.planet === "Mercury") {
        let planetYrs = (this.age / '.24').toFixed(2);
        return planetYrs;
      } else if (this.planet === "Venus") {
        let planetYrs = (this.age / '.62').toFixed(2);
        return planetYrs;
      } else if (this.planet === "Mars") {
        let planetYrs = (this.age / '1.88').toFixed(2);
        return planetYrs;
      } else if (this.planet === "Jupiter") {
        let planetYrs = (this.age / '11.86').toFixed(2);
        return planetYrs;
      } else {
        console.log("end of if");
      }
    }

    lifeLeftOnPlanets(age, planet) {
      const avgLifeYrs = 79;
      if (this.planet === "Mercury") {
        let lifeLeftOnPlanet = (avgLifeYrs / '.24') - (this.age / '.24');
        return lifeLeftOnPlanet.toFixed(2);
      } else if (this.planet === "Venus") {
        let lifeLeftOnPlanet = (avgLifeYrs / '.62') - (this.age / '.62');
        return lifeLeftOnPlanet.toFixed(2);
      } else if (this.planet === "Mars") {
        let lifeLeftOnPlanet = (avgLifeYrs / '1.88') - (this.age / '1.88');
        return lifeLeftOnPlanet.toFixed(2);
      } else if (this.planet === "Jupiter") {
        let lifeLeftOnPlanet = (avgLifeYrs / '11.86') - (this.age / '11.86');
        return lifeLeftOnPlanet.toFixed(2);
      } else {

      }
    }

}
