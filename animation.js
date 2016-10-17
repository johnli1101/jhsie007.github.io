$(function(){
  $('.autumn').click(function(){
    var path = $(this).attr('href');
    $('html, body').animate({scrollTop: $(path).offset().top}, 700);
    return false;
  });

});

$(document).ready(function(){
var modal = document.getElementById('re_modal');
var modal_image = document.getElementById('re_modal_image');
var re_bot = document.getElementById("re_bot");
var re_heart = document.getElementById("re_heart");

re_bot.onclick = function() {
  modal.style.display = "block";
}

re_heart.onclick = function() {
  modal.style.display = "block";
}


window.onclick = function(event) {
  if(event.target == modal || event.target == re_modal_image) {
    modal.style.display = "none";
  }
}

});
