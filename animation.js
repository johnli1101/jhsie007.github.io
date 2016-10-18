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

