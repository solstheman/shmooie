$(function() {
	$('.menu_button').on('click', function (e) {
		e.preventDefault();
		$('.menu_panel').toggleClass('menu_open');
		$('.menu_button').toggleClass('menu_open');
	});
  });

  //switch to about me
$(function() {
	$('.main_page').on('click', function (e) {
		e.preventDefault();
		$('.main_content').load('main_page.html', function() {
			  $('body').scrollTop(0);
		});
	});
  });
  
  //switch to dog page
  $(function() {
	$('.rsvp_page').on('click', function (e) {
		e.preventDefault();
		$('.main_content').load('rsvp_page.html', function() {
			  $('body').scrollTop(0);
		});
	});
  });
  
  //switch back to home
  $(function() {
	$('.details_page').on('click', function (e) {
		e.preventDefault();
		$('.main_content').load('details_page.html', function() {
			  $('body').scrollTop(0);
		});
	});
  });
    
  //switch back to home
  $(function() {
	$('.registry_page').on('click', function (e) {
		e.preventDefault();
		$('.main_content').load('registry_page.html', function() {
			  $('body').scrollTop(0);
		});
	});
  });