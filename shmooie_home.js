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
		"If you refresh this page enough, you can witness my slow dissent into madness",
		"Check out the craziness ---------------------------->"
	];

	var selected = Math.floor(titleArray.length * Math.random());
	var element = document.getElementById("fun_title").innerHTML = '<h3>' + titleArray[selected] + '</h3>';
};