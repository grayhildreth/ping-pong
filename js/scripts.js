var input = function(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      $("#output").append("<li>Ping Pong</li>");
    } else if ( i % 5 === 0) {
      $("#output").append("<li>Pong</li>");
    } else if (i % 3 === 0) {
      $("#output").append("<li>Ping</li>");
    } else
      $("#output").append("<li>" + i + "</li>");
  }
};

$(document).ready(function() {
  $("#pingPong").submit(function(event) {
    event.preventDefault();
    var num = $("#number").val();

    input(num);
  });
});
