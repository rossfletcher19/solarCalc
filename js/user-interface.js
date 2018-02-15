import { User } from './../js/user.js';


$(document).ready(function() {
  $("#ageCalcForm").submit(function(event){
    event.preventDefault();
    // debugger;
    let age = $('#userAge').val();
    let userInstance = new User(age);
    let ageInSec = userInstance.ageInSeconds();
    console.log(ageInSec);
    $("#output").append(ageInSec);

    $('#ageCalcForm').empty();
    $('#nameOutput').hide();
    $('.ageConversions').show();
    $('.birthdateEntry').show();

  });
});

$(document).ready(function() {
  $("#bdayForm").submit(function(event){
    event.preventDefault();
    // debugger;

    let birthdate = $('#bday').val();
    let userInstance = new User(age, birthdate);
    let accurateAge = userInstance.accurateAge();

    $("#output").append(ageInSec);

    $('#ageCalcForm').empty();
    $('#nameOutput').hide();
    $('.ageConversions').show();
    $('.birthdateEntry').show();


  });
});
