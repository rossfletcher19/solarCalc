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
    console.log(birthdate);
    console.log(planet);
    let userInstance = new User(age, birthdate, planet);
    console.log(userInstance);
    let accurateAge = userInstance.accurateAge();
    userInstance.age = accurateAge;
    console.log(accurateAge);





  });
});
