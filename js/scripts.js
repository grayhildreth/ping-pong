function logic (number {
   if (number % 15 === 0) {
    return "pingpong";
  } else if (number % 5 === 0) {
    return "pong";
  } else if (number % 3 === 0) {
    return "ping";
  } else {
    return number;
  }
})



$(document).ready(function(){
  $("#pingpong").submit(function(event) {
    event.preventDefault();
}
