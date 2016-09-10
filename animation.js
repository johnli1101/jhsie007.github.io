
$('a[href^="#"').on('click', function(autumn){
  var path = $(this.getAttribute('href'));

  if(path.length){
    autumn.preventDefault();
    $('html, body').stop().animate({scrollTop: path.offset().top}, 1000);
  }

});
