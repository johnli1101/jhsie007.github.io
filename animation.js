
$('a[href^="#"]').on('click', function(autumn){
  var path = $(this.getAttribute('href'));

  if(path.length){
    //Prevent from opening new browser
    autumn.preventDefault();
    $('html, body').stop().animate({scrollTop: path.offset().top}, 750);
  }

});
