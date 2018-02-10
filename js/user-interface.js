import { User } from './../js/user.js';


$(document).ready(function() {
  $("#ageCalcForm").submit(function(event){
    event.preventDefault();
    // debugger;
    let age = $('#userAge').val();
    let userInstance = new User(age);
    let ageInSec = userInstance.ageInSeconds();
    $("#output").append(ageInSec);

    $('#ageCalcForm').empty();
    $('#nameOutput').hide();
    $('.ageConversions').show();
    $('.birthdateEntry').show();


  });
});