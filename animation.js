$(function(){
  $('.autumn').click(function(){
    var path = $(this).attr('href');
    $('html, body').animate({scrollTop: $(path).offset().top}, 700);
    return false;
  });

});

$(document).ready(function(){
var modal = document.getElementById('re_modal');
var image = document.getElementById("re_bot");
var rem = document.getElementByID("re_rem");

image.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if(event.target == modal|| event.target == rem) {
    modal.style.display = "none";
  }
}

});
