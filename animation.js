$(function(){
  $('.autumn').click(function(){
    var path = $(this).attr('href');
    $('html, body').animate({scrollTop: $(path).offset().top}, 700);
    return false;
  });

});

$(document).ready(function(){
var modal = document.getElementById('re_modal');
var re_bot = document.getElementById("re_bot");


re_bot.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if(event.target == modal || event.target == re_bot) {
    modal.style.display = "none";
  }
}

});
