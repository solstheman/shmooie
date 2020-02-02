var $window   = $(window),
	height    = $window.height(),
	width     = $window.width();


  window.onload = function(e) {
	  e.preventDefault();
	  $('.info_body').load('/wedding/home_page_nav.html')
  }

  //switch to home page
  $(function() {
	$('.home_page_nav').on('click', function (e) {
		page_switch(e, 'home_page_nav');
	});
  });
  
  //switch to details
  $(function() {
	$('.details_page_nav').on('click', function (e) {
		page_switch(e, 'details_page_nav');
	});
  });
	
  //switch to registry
  $(function() {
	$('.registry_page_nav').on('click', function (e) {
		$("script[src='https://widget.zola.com/js/widget.js']").remove()
		page_switch(e, 'registry_page_nav');
	});
  });

  function page_switch(e, page_name) {
	e.preventDefault();
	$('.info_body').load('/wedding/' + page_name + '.html', function() {
		$window.scrollTop(height);
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