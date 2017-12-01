var xhttp = new XMLHttpRequest();

var input = document.getElementById("input");
	audio = document.getElementById("audio");
var source;
var amp = new p5.Amplitude();
amp.setInput(audio);

input.addEventListener("keypress", function(e) {
	if (e.keyCode == 13) {
		//if ... exist
		audio.src = "";
		
		xhttp.open("GET", "https://www.dictionaryapi.com/api/v1/references/collegiate/xml/" + input.value + "?key=14e3fcf0-6d29-49e9-b7e9-30db51280e47", true);
		xhttp.send();
	};
});

xhttp.addEventListener("readystatechange", function() {
    if (this.readyState == 4 && this.status == 200) {
        getSource(this);
    }
});

function getSource(xml) {
	parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xml.responseText, "text/xml");
    var xmlSound = new XMLSerializer().serializeToString(xmlDoc.getElementsByTagName("sound")[0].childNodes[0].childNodes[0]);
    source = "https://media.merriam-webster.com/soundc11/" + input.value.slice(0, 1) + "/" + xmlSound;
    console.log(source);
    audio.src = source;
    audio.play();
    //console.log(xmlDoc.getElementsByTagName("sound"));
};

function draw() {
	//var vol = amp.getLevel();
	//console.log(vol);
	// var spectrum = fft.analyze()
	// console.log(spectrum);
};