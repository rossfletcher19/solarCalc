

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
