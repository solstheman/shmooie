document.addEventListener('DOMContentLoaded', function () {
	loadTitle();
});

function loadTitle() {
	var titleArray = [
		"Hello Squirrels",
		"Adopt a puppy at your local shelter!",
		"Live fast, bark loud, bad dogs do it right",
		"My puppy just turned two, so we are celebrating his Bark-Mitzvah"
	];

	var selected = Math.floor(titleArray.length * Math.random());
	var element = document.getElementById("fun_title").innerHTML = '<h1>' + titleArray[selected] + '</h1>';
};