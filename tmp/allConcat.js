import { Birthdate } from './../js/birthdate.js';

$(document).ready(function() {
  $("#bdayForm").submit(function(event){
    event.preventDefault();

    // debugger;
    var x = document.getElementById("bday").value;
    var date = new Date(x);
    var milliseconds = date.getTime();
    console.log(milliseconds);
    document.getElementById("milliseconds").innerHTML = milliseconds;



  });
});

import { User } from './../js/main.js';


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

$(document).ready(function () {
  $('#signup').submit(function (event) {
    event.preventDefault();
    var name = $('#name').val();
    $('#signup').hide();
    $('#nameOutput').prepend('<p>Thank you, ' + name + ' , now enter your age to see it in seconds!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});
