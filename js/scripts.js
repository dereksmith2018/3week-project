// backend
var trans= function(string) {
// why is the string posistion being shown?
  for (i = 0; i < string; i++) {
    if (i % 3 === 0 && i !== 0) {
        $(".answer").append("I'm sorry, Dave. I can't do that" + " ");

    } else if (i.toString().includes("1")) {
        $(".answer").append("boop" + " ");

    } else if (i.toString().includes("0")) {
        $(".answer").append("beep" + " ");

    } else {
        $(".answer").append(i + " ")
    }
  }


};



//front end.
$(document).ready(function(){
  $("form#userEntry").submit(function(event){
    event.preventDefault();
    var userInput = $("#textInput").val()
    var userEntry = parseInt(userInput);
    $(".answer").append("");
    var outResults= trans(userEntry)
    $("#textInput").val();



  });
});
