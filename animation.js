$('a[href^="#"]').on('click', function(event){
  var path = $(this.getAttribute('href'));

  if(path.length){
    event.preventDefault();

    $('html, body').stop.animate({scrollTop: path.offset().top}, 750);
  }
});
