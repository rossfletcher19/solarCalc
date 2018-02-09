import { User } from './../js/main.js';


$(document).ready(function() {
  $("#ageCalcForm").submit(function(event){
    event.preventDefault();
    debugger;
    let age = $('#userAge').val();
    let userAge = new User(age);
    let userAgeInSecs = userAge.ageInSeconds();
    $("#output").append(userAgeInSecs);

    $('#ageCalcForm').empty();
    // $('#nameOutput').hide();


  });
});
