// i stole this from someones neocities website i dont remember who im sorry

// music player scripts
// initiate variables
let track_name = document.querySelector(".songtitle");
let track_link = document.getElementById("track-link");
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
let seek_slider = document.querySelector(".seek_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let track_index = 0;
let isPlaying = false;
let updateTimer;

function togglePlayer() {
	document.getElementById("musicplayer").classList.toggle("open");
}

// create new audio element
let curr_track = document.getElementById("music");
let track_list = [
	{
		name: "yuzu - Welcome to the Green Room [Arrangement]",
		path: "https://file.garden/ad5_FaJMmVnp7v37/greenroom_128kbps_edit.mp3",
		dl: "https://soundcloud.com/yuzuberri/welcome-to-the-green-room"
	},
	{
		name: "yuzu & lor - Spirit Raiser",
		path: "https://file.garden/ad5_FaJMmVnp7v37/spiritraiser_128kbps_edit.mp3",
		dl: "https://soundcloud.com/yuzuberri/spirit-raiser"
	},
	{
		name: "yuzu & xyy - Aisle",
		path: "https://file.garden/ad5_FaJMmVnp7v37/mintendo_128kbps_edit.mp3",
		dl: "https://soundcloud.com/yuzuberri/aisle"
	},
	{
		name: "UNTITLED 1/15/24 7:09PM",
		path: "https://file.garden/ad5_FaJMmVnp7v37/Pattern%201_192%20-%20Loop_3.mp3",
		dl: "https://file.garden/ad5_FaJMmVnp7v37/Pattern%201_192%20-%20Loop_3.mp3"
	},
	{
		name: "yuzu - Until Next Time (Battle 3) [Arrangement]",
		path: "https://file.garden/ad5_FaJMmVnp7v37/untilnexttime_128kbps_edit.mp3",
		dl: "https://file.garden/ad5_FaJMmVnp7v37/untilnexttime_128kbps_edit.mp3"
	},
	{
		name: "lynU - debris [ending only]",
		path: "https://file.garden/ad5_FaJMmVnp7v37/debrisending_128kbps_edit.mp3",
		dl: "https://soundcloud.com/v_letical/debris"
	},
	{
		name: "sienna - Not interested in ordinary people ...",
		path: "https://file.garden/ad5_FaJMmVnp7v37/ordinary_128kbps_edit.mp3",
		dl: "https://soundcloud.com/siennacell/ordinary"
	},
	{
		name: "sienna - lizard food",
		path: "https://file.garden/ad5_FaJMmVnp7v37/lizardfood_128kbps_edit.mp3",
		dl: "https://soundcloud.com/siennacell/lizard-food"
	},
	{
		name: "UNTITLED 2/16/25 3:24AM",
		path: "https://file.garden/ad5_FaJMmVnp7v37/rldafraid_128kbps_edit.mp3",
		dl: "https://file.garden/ad5_FaJMmVnp7v37/rldafraid_128kbps_edit.mp3"
	},
	{
		name: "UNTITLED 12/23/22 9:50PM",
		path: "https://file.garden/ad5_FaJMmVnp7v37/harbor_128kbps_edit.mp3",
		dl: "https://file.garden/ad5_FaJMmVnp7v37/harbor_128kbps_edit.mp3"
	},
	{
		name: "UNTITLED 12/25/22 4:56AM",
		path: "https://file.garden/ad5_FaJMmVnp7v37/fade2gray_128kbps_edit.mp3",
		dl: "https://soundcloud.com/c4lol/fade-to-gray"
	},
	{
		name: "UNTITLED 10/28/25 4:02PM",
		path: "https://file.garden/ad5_FaJMmVnp7v37/ahyeah_128kbps_edit.mp3",
		dl: "https://file.garden/ad5_FaJMmVnp7v37/ahyeah_128kbps_edit.mp3"
	}
];

function loadTrack(track_index) {
	clearInterval(updateTimer);
	resetValues();

	// load a new track
	curr_track.src = track_list[track_index].path;
	curr_track.load();

	// update details of the track
	//track_name.textContent =
	//	"Song " + (track_index + 1) + "/" + track_list.length + ": " + track_list[track_index].name;
	track_name.innerHTML =
		'<span class="title-text"><span class="music-note">♪</span> ' + track_list[track_index].name + "</span>";

	const titleText = track_name.querySelector(".title-text");

	const availableWidth =
		track_name.clientWidth -
		parseFloat(getComputedStyle(track_name).paddingLeft) -
		parseFloat(getComputedStyle(track_name).paddingRight);

	const textWidth = titleText.scrollWidth;
	const distance = textWidth - availableWidth;

	if (distance > 0) {
		track_name.classList.add("scrolling");

		const duration = Math.max(3, distance / 50);

		track_name.style.setProperty("--scroll-distance", `${distance}px`);
		track_name.style.setProperty("--scroll-duration", `${duration}s`);
	} else {
		track_name.classList.remove("scrolling");
	}

	if (track_name.scrollWidth > track_name.clientWidth) {
		track_name.classList.add("scrolling");
	} else {
		track_name.classList.remove("scrolling");
	}
	track_link.href = track_list[track_index].dl;

	// set an interval of 1000 milliseconds for updating the seek slider
	updateTimer = setInterval(seekUpdate, 1000);

	// move to the next track if the current one finishes playing
	curr_track.addEventListener("ended", nextTrack);
}

// reset values
function resetValues() {
	curr_time.textContent = "0:00";
	total_duration.textContent = "0:00";
	seek_slider.value = 0;
}

// checks if song is playing
function playpauseTrack() {
	if (!isPlaying) playTrack();
	else pauseTrack();
}

// plays track when play button is pressed
function playTrack() {
	curr_track.play();
	isPlaying = true;

	// replace icon with the pause icon
	playpause_btn.innerHTML = '<i class="fas fa-pause"></i>';
}

// pauses track when pause button is pressed
function pauseTrack() {
	curr_track.pause();
	isPlaying = false;

	// replace icon with the play icon
	playpause_btn.innerHTML = '<i class="fas fa-play"></i>';
}

// moves to the next track
function nextTrack() {
	if (track_index < track_list.length - 1) track_index += 1;
	else track_index = 0;
	loadTrack(track_index);
	playTrack();
}

// moves to the previous track
function prevTrack() {
	if (track_index > 0) track_index -= 1;
	else track_index = track_list.length;
	loadTrack(track_index);
	playTrack();
}

// seeker slider
function seekTo() {
	seekto = curr_track.duration * (seek_slider.value / 100);
	curr_track.currentTime = seekto;
}

function seekUpdate() {
	let seekPosition = 0;

	// check if the current track duration is a legible number
	if (!isNaN(curr_track.duration)) {
		seekPosition = curr_track.currentTime * (100 / curr_track.duration);
		seek_slider.value = seekPosition;

		// calculate the time left and the total duration
		let currentMinutes = Math.floor(curr_track.currentTime / 60);
		let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
		let durationMinutes = Math.floor(curr_track.duration / 60);
		let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

		// adding a zero to the single digit time values
		if (currentSeconds < 10) {
			currentSeconds = "0" + currentSeconds;
		}
		if (durationSeconds < 10) {
			durationSeconds = "0" + durationSeconds;
		}
		if (currentMinutes < 10) {
			currentMinutes = currentMinutes;
		}
		if (durationMinutes < 10) {
			durationMinutes = durationMinutes;
		}

		curr_time.textContent = currentMinutes + ":" + currentSeconds;
		total_duration.textContent = durationMinutes + ":" + durationSeconds;
	}
}

// load the first track in the tracklist
//loadTrack(track_index);

// load random track on refresh
track_index = Math.floor(Math.random() * track_list.length);
loadTrack(track_index);