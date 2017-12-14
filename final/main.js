var xhttp = new XMLHttpRequest();

var audio = document.getElementById("audio");
    input = document.getElementById("input");
	shape = document.getElementById("shape");
	def = document.getElementById("def");
var source, stressPos, stressPosInWord, a, b;

input.addEventListener("keypress", function(e) {
	if (e.keyCode == 13) {
		//if ... exist
		audio.src = "";
		def.innerHTML = "";
		
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
    
    if (xmlDoc.getElementsByTagName("sound")[0]) {
        input.style.display = "none";
        shape.style.display = "inline-block";
        shape.innerHTML = new XMLSerializer().serializeToString(xmlDoc.getElementsByTagName("ew")[0]).replace(/<.*?>/g, "");
        input.value = shape.innerHTML;
        
        //getSound
    	var xmlSound = new XMLSerializer().serializeToString(xmlDoc.getElementsByTagName("sound")[0].childNodes[0].childNodes[0]);
    	source = "https://media.merriam-webster.com/soundc11/" + input.value.slice(0, 1) + "/" + xmlSound;
    	if (xmlSound.slice(0, 2) == "fw") {
    	    source = "https://media.merriam-webster.com/soundc11/f/" + xmlSound;
    	};
    	//console.log(xmlDoc.getElementsByTagName("sound"));
    	audio.src = source;
		audio.play();
    	
    	//getPr
    	var xmlPr = new XMLSerializer().serializeToString(xmlDoc.getElementsByTagName("pr")[0]).slice(4, -5);
    	//console.log(xmlDoc.getElementsByTagName("pr"));--bug:incomplete phonetic transcription
    	stressPos = (convertToHex(xmlPr).indexOf("02c8")/4) / (convertToHex(xmlPr).length/4);
        stressPosInWord = stressPos * input.value.length;
        //console.log(stressPos);
        //console.log(stressPosInWord);
        a = (Math.PI/2) / (input.value.length - stressPosInWord);
        b = Math.PI - a*input.value.length;
        
        //defineShape
        shape.innerHTML = "<div>" + shape.innerHTML.split("").join("</div><div>") + "</div>";
        var letters = document.getElementsByTagName("div");
        audio.addEventListener("playing", function() {
            setTimeout(function() {
                for (var i = 0; i < letters.length; i ++) {
                    letters[i].style.transform = "translateY(-" + 70 * Math.sin(a*i + b) + "%)";
                    letters[i].style.transitionDelay = 0.4/letters.length * i + "s";
                };
            }, 0.001);
        });
        
        //getDef
        for (var i = 0; i < xmlDoc.getElementsByTagName("def").length; i ++) {
            var xmlDef = xmlDoc.getElementsByTagName("def")[i].innerHTML;
            xmlDef = xmlDef.replace("<date>", "  First use: ").replace("<ss>", "  -Synonym: ");
            xmlDef = xmlDef.replace(/<.*?>/g, "");
            xmlDef = xmlDef.replace(/ \d /g, "<br>$&").replace(/  :/g, " :").replace(/  /g, "$&<br>&nbsp;&nbsp;&nbsp;");
            def.innerHTML = def.innerHTML + xmlDef + "<br>";
            //console.log(xmlDoc.getElementsByTagName("def")[i].innerHTML);
        };
    } else {
    	alert("C'est pas l'anglais!");
    };
};

function convertToHex(str) {
    var hex = "";
    for (var i = 0; i < str.length; i++) {
    	var code = str.charCodeAt(i).toString(16);
    	while (code.length < 4) {
    		code = "0" + code;
    	};
        hex += "" + code;
    };
    return hex;
};

shape.addEventListener("click", function() {
    input.style.display = "inline-block";
    input.focus();
    input.select();
    shape.style.display = "none";
});