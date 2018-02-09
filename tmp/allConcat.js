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

$(document).ready(function () {
  $('#signup').submit(function (event) {
    event.preventDefault();
    var name = $('#name').val();
    $('#signup').hide();
    $('#nameOutput').prepend('<p>Thank you, ' + name + ' , now enter your age to see it in different solar years!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});
