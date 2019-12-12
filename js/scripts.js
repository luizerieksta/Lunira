//store the icons in variables
var catPhrase = '<p>I</p>';
var catPhrase2 = '<p>DO</p>';
var catPhrase3 = '<p>NOT</p>';
var catPhrase4 = '<p>WANT</p>';
var catPhrase5 = '<p>ANY</p>';
var catPhrase6 = '<p>TUNA</p>';
var catPhrase7 = '<p>RIGHT</p>';
var catPhrase8 = '<p>NOW.</p>';

var catPhrase9 = '<p>BUT</p>';
var catPhrase10 = '<p>I</p>';
var catPhrase11 = '<p>WANT</p>';
var catPhrase12 = '<p>YOU</p>';
var catPhrase13 = '<p>TO</p>';
var catPhrase14 = '<p>SCRATCH</p>';
var catPhrase15 = '<p>MY</p>';
var catPhrase16 = '<p>BACK.</p>';



var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");

//call the player variable
var player = document.getElementById("player");

//assign functions to the buttons when they are clicked
playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);


//call the functions
function playAudio() {
	player.play();
}

function pauseAudio() {
	player.pause();
}

function stopAudio() {
	player.pause();
	player.currentTime = 0;
}


//function for returning time values from the audio
player.ontimeupdate = function iconsAppear() {
	var audiotrackPosition = player.currentTime; 
	console.log(audiotrackPosition);

	//append the icons at the given times of the audio
	if (audiotrackPosition > 0 && audiotrackPosition < 0.2) {
		console.log("success");
		$("#icon").html(catPhrase);

	} else if (audiotrackPosition > 0.2 && audiotrackPosition < 0.5) {
		$("#icon2").html(catPhrase2);

	} else if (audiotrackPosition > 0.5 && audiotrackPosition < 0.8) {
		$("#icon3").html(catPhrase3);

	} else if (audiotrackPosition > 0.8 && audiotrackPosition < 1.1) {
		$("#icon4").html(catPhrase4);

	} else if (audiotrackPosition > 2.3 && audiotrackPosition < 2.5) {
		$("#icon5").html(catPhrase5);

	} else if (audiotrackPosition > 2.5 && audiotrackPosition < 2.9) {
		$("#icon6").html(catPhrase6);

	} else if (audiotrackPosition > 2.9 && audiotrackPosition < 3.2) {
		$("#icon7").html(catPhrase7);

	} else if (audiotrackPosition > 3.2 && audiotrackPosition < 3.5) {
		$("#icon8").html(catPhrase8);



//new line

	} else if (audiotrackPosition > 4.3 && audiotrackPosition < 4.6) {
		$("#icon9").html(catPhrase9);

	} else if (audiotrackPosition > 4.6 && audiotrackPosition < 4.9) {
		$("#icon10").html(catPhrase10);

	} else if (audiotrackPosition > 4.9 && audiotrackPosition < 5.2) {
		$("#icon11").html(catPhrase11);

	} else if (audiotrackPosition > 5.2 && audiotrackPosition < 5.5) {
		$("#icon12").html(catPhrase12);

	} else if (audiotrackPosition > 7.0 && audiotrackPosition < 7.3) {
		$("#icon13").html(catPhrase13);

	} else if (audiotrackPosition > 7.3 && audiotrackPosition < 7.6) {
		$("#icon14").html(catPhrase14);

	} else if (audiotrackPosition > 7.6 && audiotrackPosition < 7.9) {
		$("#icon15").html(catPhrase15);

	} else if (audiotrackPosition == 8.045714) {
		$("#icon16").html(catPhrase16);

	//clear the div from icons
	} else if (audiotrackPosition == 0) {
		$("#icon").html("");
		$("#icon2").html("");
		$("#icon3").html("");
		$("#icon4").html("");
		$("#icon5").html("");
		$("#icon6").html("");
		$("#icon7").html("");
		$("#icon8").html("");
		$("#icon9").html("");
		$("#icon10").html("");
		$("#icon11").html("");
		$("#icon12").html("");
		$("#icon13").html("");
		$("#icon14").html("");
		$("#icon15").html("");
		$("#icon16").html("");
	}


};



