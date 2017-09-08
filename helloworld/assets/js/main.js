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

document.addEventListener("mouseover", function() {
	if (!board.classList.contains("left")) {
		var i = Math.floor(Math.random()*4);
		vid.src = vidSrc[i];
		title.innerHTML = titleTxt[i];
	};
});

document.addEventListener("click", function() {
	if (!board.classList.contains("left")) {
		board.classList.add("left");
		vid.src = "";
		title.innerHTML = "Fluxfilm Anthology";
		img.style.display = "block";
		intro.style.display = "block";
	} else {
		board.classList.remove("left");
		img.style.display = "none";
		intro.style.display = "none";
	};
});