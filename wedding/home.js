var $window   = $(window),
    height    = $window.height(),
	width     = $window.width();

$(function() {
	$('.menu_button').on('click', function (e) {
		e.preventDefault();
		$('.menu_panel').toggleClass('menu_open');
		$('.menu_button').toggleClass('menu_open');
	});
  });

  //switch to home page
$(function() {
	$('.home_page_nav').on('click', function (e) {
		page_switch('home_page');
	});
  });
  
  //switch to details
  $(function() {
	$('.details_page_nav').on('click', function (e) {
		page_switch('details_page_nav');
	});
  });
    
  //switch to registry
  $(function() {
	$('.registry_page').on('click', function (e) {
		page_switch('registry_page_nav');
	});
  });

  function page_switch(page_name) {
	e.preventDefault();
	$('.page_section').load(page_name + '.html', function() {
			$('page_section').scrollTop(0);
	});
  }

  function sticky(){
	var scrollTop = $window.scrollTop();
	if (scrollTop > (height - $('#nav_wrap').height())) {
	  $('#nav_wrap').addClass('sticky');
	  $('#nav_wrap').removeClass('not_sticky');
	} else {
	  $('#nav_wrap').removeClass('sticky');
	  $('#nav_wrap').addClass('not_sticky');
	}
  } 
  $window.on('touchmove', sticky);
  $window.on('scroll', sticky);  