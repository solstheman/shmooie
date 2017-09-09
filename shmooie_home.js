document.addEventListener('DOMContentLoaded', function () {
	loadTitle();
});

function loadTitle() {
	var titleArray = [
		"Hello Squirrels",
		"Adopt a puppy at your local shelter!",
		"Live fast, bark loud, bad dogs do it right",
		"My puppy just turned two, so we are celebrating his Bark-Mitzvah",
		"Barking at strangers is more than just a passion, it's a way of life",
		"Help, I am trapped in a witty dog title factory and I can't get out!",
		"If you refresh this page enough, you can witness my slow descent into madness",
		"Check out the craziness ---------------------------->"
	];

	var selected = Math.floor(titleArray.length * Math.random());
	var element = document.getElementById("fun_title").innerHTML = '<h3>' + titleArray[selected] + '</h3>';
};

$(function() {
  $('.menu_button').on('click', function (e) {
	  e.preventDefault();
	  $('.menu_panel').toggleClass('menu_open');
	  $('.menu_button').toggleClass('menu_open');
  });
});

//switch to about me
$(function() {
  $('.about_me').on('click', function (e) {
	  e.preventDefault();
	  $('.main_content').load('about_me.html');
	  $('body').scrollTop(0);
  });
});

//switch to dog page
$(function() {
  $('.dogs_page').on('click', function (e) {
	  e.preventDefault();
	  $('.main_content').load('dogs.html');
	  $('body').scrollTop(0);
	  make_an_excuse();
  });
});

//switch back to home
$(function() {
  $('.main_page').on('click', function (e) {
	  e.preventDefault();
	  $('.main_content').load('home_page.html');
  	  $('body').scrollTop(0);
  });
});

function make_an_excuse() {
	var excuseArray = [
		'digging holes in the back yard',
		'eating our vegetables',
		'doing something important',
		'building the future',
		'watering my plants',
		'propogating succulents',
		'watching Call the Midwife',
		'looking outside and dreaming of salvation',
		'poopin\'',
		'providing for my family',
		'watching you through your window',
		'digging around craigslist',
		'rotating my tires',
		'settling lawsuits'
	];

	var selected = Math.floor(excuseArray.length * Math.random());
	$("#apology_sign_punch_line").html(excuseArray[selected]);
};