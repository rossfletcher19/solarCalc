// $(document).ready(function () {
//   $('#signup').submit(function (event) {
//     event.preventDefault();
//     // var name = $('#name').val();
//     // $('#signup').hide();
//     // $('#nameOutput').prepend('<p>Thank you, ' + name + ' , now enter your age to see it in seconds!</p>');
//   });
// });

$(document).ready(function(){
  $('#time').text(moment());
});

import { User } from './../js/user.js';

$(document).ready(function() {
  $("#bdayForm").submit(function(event){
    event.preventDefault();
    // debugger;
    let age = $('#userAge').val();
    let birthdate = $('#bday').val();
    let planet = $("input:radio[name=planets]:checked").val();
    let userInstance = new User(age, birthdate, planet);

    let accurateAge = userInstance.accurateAge();
    userInstance.age = accurateAge;
    let longLife = userInstance.surpassedLifeExpectancy(age);
    let planetAge = userInstance.planetAge();
    let ageInSec = userInstance.ageInSeconds(accurateAge);
    let lifeLeft = userInstance.lifeLeftOnPlanets();



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
