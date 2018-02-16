(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
  function User(age, birthdate, planet) {
    _classCallCheck(this, User);

    this.age = age;
    this.birthdate = birthdate;
    this.planet = planet;
  }

  _createClass(User, [{
    key: "ageInSeconds",
    value: function ageInSeconds(age) {
      var YR_IN_SECS = 31556952;
      var ageInSec = this.age * YR_IN_SECS;
      return ageInSec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } // regex uses 2 lookahead assertions: a positive one to look for any point in the string that has a multiple of 3 digits in a row after it, and a negative assertion to make sure that point only has exactly a multiple of 3 digits. The replacement expression puts a comma there

  }, {
    key: "accurateAge",
    value: function accurateAge(birthdate) {
      var sinceEpochToBdayInMilli = Date.parse(this.birthdate);
      var d = new Date();
      var t_millis = d.getTime();
      var ageInMilli = t_millis - sinceEpochToBdayInMilli;
      var ageInYears = ageInMilli / 31536000000;
      return ageInYears.toFixed(2);
    }
  }, {
    key: "surpassedLifeExpectancy",
    value: function surpassedLifeExpectancy(age) {
      if (age > 79) {
        return "Wow you've surpassed the avg. life expectancy! You must be doing something right. Keep it up!!!";
      } else if (age <= 79) {
        return "Life is too short to sit around not learning something challenging like Javascript, Java, and Android... So get to it!!";
      } else {}
    }
  }, {
    key: "planetAge",
    value: function planetAge(planet) {
      if (this.planet === "Mercury") {
        var planetYrs = (this.age / '.24').toFixed(2);
        return planetYrs;
      } else if (this.planet === "Venus") {
        var _planetYrs = (this.age / '.62').toFixed(2);
        return _planetYrs;
      } else if (this.planet === "Mars") {
        var _planetYrs2 = (this.age / '1.88').toFixed(2);
        return _planetYrs2;
      } else if (this.planet === "Jupiter") {
        var _planetYrs3 = (this.age / '11.86').toFixed(2);
        return _planetYrs3;
      } else {
        console.log("end of if");
      }
    }
  }, {
    key: "lifeLeftOnPlanets",
    value: function lifeLeftOnPlanets(age, planet) {
      var avgLifeYrs = 79;
      if (this.planet === "Mercury") {
        var lifeLeftOnPlanet = avgLifeYrs / '.24' - this.age / '.24';
        return lifeLeftOnPlanet.toFixed(2);
      } else if (this.planet === "Venus") {
        var _lifeLeftOnPlanet = avgLifeYrs / '.62' - this.age / '.62';
        return _lifeLeftOnPlanet.toFixed(2);
      } else if (this.planet === "Mars") {
        var _lifeLeftOnPlanet2 = avgLifeYrs / '1.88' - this.age / '1.88';
        return _lifeLeftOnPlanet2.toFixed(2);
      } else if (this.planet === "Jupiter") {
        var _lifeLeftOnPlanet3 = avgLifeYrs / '11.86' - this.age / '11.86';
        return _lifeLeftOnPlanet3.toFixed(2);
      } else {}
    }
  }]);

  return User;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _user = require('./../js/user.js');

// $(document).ready(function () {
//   $('#signup').submit(function (event) {
//     event.preventDefault();
//     // var name = $('#name').val();
//     // $('#signup').hide();
//     // $('#nameOutput').prepend('<p>Thank you, ' + name + ' , now enter your age to see it in seconds!</p>');
//   });
// });

$(document).ready(function () {
    $('#time').text(moment());
});

$(document).ready(function () {
    $("#bdayForm").submit(function (event) {
        event.preventDefault();
        // debugger;
        var age = $('#userAge').val();
        var birthdate = $('#bday').val();
        var planet = $("input:radio[name=planets]:checked").val();
        var userInstance = new _user.User(age, birthdate, planet);

        var accurateAge = userInstance.accurateAge();
        userInstance.age = accurateAge;
        var longLife = userInstance.surpassedLifeExpectancy(age);
        var planetAge = userInstance.planetAge();
        var ageInSec = userInstance.ageInSeconds(accurateAge);
        var lifeLeft = userInstance.lifeLeftOnPlanets();

        $('#longLife').empty();
        $('#longLife').append(longLife);

        $('#seconds').empty();
        $('#seconds').append(ageInSec);

        $('#accurateAge').empty();
        $('#accurateAge').append(accurateAge);

        $('.planet').empty();
        $('.planet').append(planet);

        $('#planetAge').empty();
        $('#planetAge').append(planetAge);

        $('#timeLeftOnPlanet').empty();
        $('#timeLeftOnPlanet').append(lifeLeft);
        $('#lifeAndAgeCalcs').show();
    });
});

},{"./../js/user.js":1}]},{},[2]);
