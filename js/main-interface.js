import { User } from './../js/main.js';


$(document).ready(function() {
  $("#ageCalcForm").submit(function(event){
    event.preventDefault();
    debugger;
    let age = $('#userAge').val();
    let userInstance = new User(age);
    let userAge = userInstance.age;
    $("#output").append(userAgeInSecs);

    $('#ageCalcForm').empty();
    // $('#nameOutput').hide();


  });
});
