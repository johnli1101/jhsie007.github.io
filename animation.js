
$(".autumn").on("click", function(a){
  a.preventDefault();
  $("html, body").animate({scrollTop: $($(this).attr('href')).offset().top}, 750);
});
