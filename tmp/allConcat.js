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


// $(document).ready(function() {
//   $("#ageCalcForm").submit(function(event){
//     event.preventDefault();
//     // debugger;
//     let age = $('#userAge').val();
//     let userInstance = new User(age);
//     let ageInSec = userInstance.ageInSeconds();
//     console.log(ageInSec);
//     $("#output").append(ageInSec);
//
//     $('#ageCalcForm').empty();
//     $('#nameOutput').hide();
//     $('.ageConversions').show();
//     $('.birthdateEntry').show();
//
//   });
// });

$(document).ready(function() {
  $("#bdayForm").submit(function(event){
    event.preventDefault();
    // debugger;
    let age = $('#userAge').val();
    let birthdate = $('#bday').val();
    let planet = $("input:radio[name=planet]:checked").val();
    let userInstance = new User(age, birthdate, planet);

    let accurateAge = userInstance.accurateAge();
    userInstance.age = accurateAge;
    let longLife = userInstance.surpassedLifeExpectancy(age);
    let planetAge = userInstance.planetAge();
    console.log(longLife);
    console.log(planetAge);
    console.log(userInstance);
    console.log(accurateAge);





  });
});
