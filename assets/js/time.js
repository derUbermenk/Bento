// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

	var d = new Date();
	var mm = monthNames[d.getMonth()];
	var dd = d.getDate();
	var wd = dayNames[d.getDay()];
	var min = (mins = ('0' + d.getMinutes()).slice(-2));
	var hh = d.getHours();
	var ampm = '';

	if (CONFIG.twelveHourFormat) {
		ampm = hh >= 12 ? ' pm' : ' am';
		hh = hh % 12;
		hh = hh ? hh : 12;
	}

	document.getElementById('hour').innerText = hh;
	document.getElementById('separator').innerHTML = ' : ';
	document.getElementById('minutes').innerText = min + ampm;

	document.getElementById('month').innerText = mm;
	document.getElementById('day').innerText = dd;
	document.getElementById('dateSeparator').innerHTML= '<span>,&nbsp</span>' ;
	document.getElementById('weekday').innerText = wd;

	setTimeout(displayClock, 1000);
}
