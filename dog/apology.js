document.addEventListener('DOMContentLoaded', function () {
	make_an_excuse();
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
	var element = document.getElementById("apology_sign_punch_line").innerHTML = excuseArray[selected];
};