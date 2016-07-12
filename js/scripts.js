$(document).ready(function(){
  $("#pingPong").submit(function(event){
    var num = $("#number").val()

    for (var i = 1; i <= num; i++) {
      if (i % 15 === 0) {
        $("#output").append("<li>"+"Ping-Pong"+"<li>");}
      else if (i % 3 === 0) {
        $("#output").append("<li>"+"Ping"+"<li>");}
      else if (i % 5 === 0) {
        $("#output").append("<li>"+"Pong"+"<li>");}
      else{
        $("#output").append("<li>"+i+"<li>");}

    };

  event.preventDefault();

  });
});
