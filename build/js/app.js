(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
    function User(age, birthdate) {
        _classCallCheck(this, User);

        this.age = age;
        this.birthdate = birthdate;
    }

    _createClass(User, [{
        key: "ageInSeconds",
        value: function ageInSeconds(age) {
            var YR_IN_SECS = 31556952;
            var ageInSec = this.age * YR_IN_SECS;
            return ageInSec;
        }
    }, {
        key: "accurateAge",
        value: function accurateAge(birthdate) {
            var sinceEpochToBdayInMilli = Date.parse(this.birthdate);
            var d = new Date();
            var t_millis = d.getTime();
            var ageInMilli = t_millis - sinceEpochToBdayInMilli;
            var ageInYears = ageInMilli / 31536000000;
            return ageInYears;
        }
    }]);

    return User;
}();

;

},{}],2:[function(require,module,exports){
"use strict";

var _user = require("./../js/user.js");

$(document).ready(function () {
  $("#bdayForm").submit(function (event) {
    event.preventDefault();

    // debugger;
    var x = document.getElementById("bday").value;
    var date = new Date(x);
    var milliseconds = date.getTime();
    console.log(milliseconds);
    document.getElementById("milliseconds").innerHTML = milliseconds;
  });
});

$(document).ready(function () {
  $('#signup').submit(function (event) {
    event.preventDefault();
    var name = $('#name').val();
    $('#signup').hide();
    $('#nameOutput').prepend('<p>Thank you, ' + name + ' , now enter your age to see it in seconds!</p>');
  });
});

$(document).ready(function () {
  $('#time').text(moment());
});

$(document).ready(function () {
  $("#ageCalcForm").submit(function (event) {
    event.preventDefault();
    // debugger;
    var age = $('#userAge').val();
    var userInstance = new _user.User(age);
    var ageInSec = userInstance.ageInSeconds();
    $("#output").append(ageInSec);

    $('#ageCalcForm').empty();
    $('#nameOutput').hide();
    $('.ageConversions').show();
    $('.birthdateEntry').show();
  });
});

},{"./../js/user.js":1}]},{},[2]);
