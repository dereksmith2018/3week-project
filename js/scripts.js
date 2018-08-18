var translation= function(input){
  var result=[]

  for((parseInt(i = 0; i < number.length; i++)){
    if ((parseint(i % 3 === 0 && ! = 0)){
        return "I'm sorry, Dave. I can't do that";

    } else if (userInput.includes("1")) {
        return "beep";

    } else ( userInput.inculdes("0")) {
      return "beep";
    }
  }


}



//front end.
$(document).ready(function(){
  $("form#userEntry").submit(function(event){
    event.preventDefault();
    var userInput = $("#textInput").val()
    outResults= translation(userInput)
    $("#answer").text(outResults);

  )}
)}
