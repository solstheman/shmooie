var $window   = $(window),
	height    = $window.height(),
	width     = $window.width();


  window.onload = function(e) {
	  e.preventDefault();
	  $('.info_body').load('./wedding/home_page_nav.html', function() {
		$('#stream_frame').height(window.height * 0.70);
	  });
	  
  }

  //switch to home page
  $(function() {
	$('body').on('click', '.home_page_nav', function (e) {
		page_switch(e, 'home_page_nav', function() {
			$('#stream_frame').height(window.height * 0.70);
		});
	});
  });
  
  //switch to details
  $(function() {
	$('body').on('click', '.details_page_nav', function (e) {
		page_switch(e, 'details_page_nav');
	});
  });
	
  //switch to registry
  $(function() {
	$('body').on('click', '.registry_page_nav', function (e) {
		$("script[src='https://widget.zola.com/js/widget.js']").remove()
		page_switch(e, 'registry_page_nav');
	});
  });

  //switch to details and scroll to hotels
  $(function() {
	$('body').on('click', '.hotels_nav', function (e) {
		page_switch(e, 'details_page_nav');
	});
  });

  function page_switch(e, page_name, callback = function(){}) {
	e.preventDefault();
	$('.info_body').load('./wedding/' + page_name + '.html', callback);
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