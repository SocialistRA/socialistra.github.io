$('#ham-toggle').click(function() {
  if ($('#menu').css('display') == 'none') {
  	$('#ham-toggle i').attr("class", "fa fa-times");
  	$('#menu').css('display','block');
  	$('#logo img').attr("class", "menu-open");
  } else {
  	$('#ham-toggle i').attr("class", "fa fa-bars");
  	$('#menu').css('display','none');
  	$('#banner').css('margin-top','0');
  	$('#logo img').attr("class", "logo");
  }
});