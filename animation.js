$(function(){
  $('.autumn').click(function(){
    var path = $(this).attr('href');
    $('html, body').animate({scrollTop: $(path).offset().top}, 700);
    return false;
  });

});


function display_modal(modal_id) {
  var modal_identity = modal_id;
  
  modal_identity.style.display = "block";
}

function hide_modal(modal_id) {
  var modal_identity = modal_id;

  modal_identity.style.display = "none";
}

function touch() {
}

function menu() {
  var menu = document.getElementById("Re_Menu");
  var world = document.getElementById("Re_World");
  var offset = world.scrollTop;
  if(offset != 0) {
    menu.style.top = 0;
    menu.style.marginTop = "0";
  }
  else {
    menu.style.top = "";
    menu.style.marginTop = "";
  }
}

$(document).ready(function() {

})
