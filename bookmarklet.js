javascript:(function() {
	var activity = location.pathname.substr(12);
	if (activity % 1 == 0) {
		window.location = 'http://labs.strava.com/flyby/viewer/#' + activity;
	} else {
		alert('This should only be used on a Strava activity page.');
	}
})();
