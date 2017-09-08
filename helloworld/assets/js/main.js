var board = document.getElementById("board");
var vid = document.getElementById("vid");
var vidSrc = [
"assets/media/fluxfilm_38_ben.mp4", 
"assets/media/fluxfilm_39_ben.mp4", 
"assets/media/fluxfilm_40_ben.mp4", 
"assets/media/fluxfilm_41_ben.mp4"
];
var title = board.children[0];
var titleTxt = [
"Je ne vois rien <br>Je n'entends rien <br>Je ne dis rien<br>(1966)", 
"La traversee du port <br>de Nice a la nage<br>(1963)", 
"Faire un effort<br>(1969)",
"Regardez moi cela suffit<br>(1962)"
];
var img = document.getElementById("img");
var intro = document.getElementById("intro");
var background = document.getElementById("background");

document.addEventListener("mouseover", function() {
	title.style.opacity = "1";
	background.style.cursor = "default";
	if (!board.classList.contains("left")) {
		var i = Math.floor(Math.random()*4);
		vid.src = vidSrc[i];
		title.innerHTML = titleTxt[i];
	};
	setTimeout(function() {
		title.style.opacity = "0.1";
		background.style.cursor = "none";
	}, 3000);
});

document.addEventListener("click", function() {
	title.style.opacity = "1";
	background.style.cursor = "default";
	if (!board.classList.contains("left")) {
		board.classList.add("left");
		vid.src = "";
		title.innerHTML = "Fluxfilm Anthology<br> - Ben Vautier";
		img.classList.add("current");
		intro.classList.add("current");
	} else {
		board.classList.remove("left");
		img.classList.remove("current");
		intro.classList.remove("current");
	};
});