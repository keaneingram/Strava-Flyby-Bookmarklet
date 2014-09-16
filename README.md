Strava-Flyby-Bookmarklet
========================

A bookmarklet to go from a Strava activity to the Activity Playback feature from Strava Labs. Essentially, all it does is take the URL (e.g. http://app.strava.com/activities/72129399), retrieve the activity ID (in this case 72129399) and adds it to the activity playback URL (http://labs.strava.com/flyby/viewer/#, making the full URL http://labs.strava.com/flyby/viewer/#72129399). The window location is then set to this URL. This will obviously break if either the Strava activity URL or the Activity Playback URL changes in the future!
