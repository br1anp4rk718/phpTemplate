// play video for secondary play button - video ID is myPlayerID
function playVideo() {
	videojs.getPlayer('myPlayerID').ready(function () {
		var myPlayer = this;
		myPlayer.play();
	});
}
// hide secondary play button for video pages - ID to call is #secondPlayButton
function hideVideoPlayButton() {
	document.getElementById('secondPlayButton').style.display = "none";
}
// should be used to differentiate mobile/desktop timers
function isMobile() {
    return /Mobi/.test(navigator.userAgent);
}