var xhttp = new XMLHttpRequest();

var audio = document.getElementById("audio");
    input = document.getElementById("input");
	shape = document.getElementById("shape");
	def = document.getElementById("def");
	intro = document.getElementById("intro");
	bar = document.getElementById("bar");
	defHis = new Object();
var source, stressPos, stressPosInWord, a, b;

input.addEventListener("focus", function() {
    def.innerHTML = "";
});

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
        if (!bar.innerHTML.includes(input.value)) {
            bar.innerHTML += "<span class=history>" + input.value + "</span>";
            bar.scrollLeft = 0;
        };
        
        //getSound
    	var xmlSound = new XMLSerializer().serializeToString(xmlDoc.getElementsByTagName("sound")[0].childNodes[0].childNodes[0]);
    	source = "https://media.merriam-webster.com/soundc11/" + input.value.slice(0, 1) + "/" + xmlSound;
    	if (xmlSound.slice(0, 2) == "fw") {
    	    source = "https://media.merriam-webster.com/soundc11/f/" + xmlSound;
    	};
    	audio.src = source;
		audio.play();
    	
    	//getPr
    	var xmlPr = new XMLSerializer().serializeToString(xmlDoc.getElementsByTagName("pr")[0]).slice(4, -5);
    	stressPos = (convertToHex(xmlPr).indexOf("02c8")/4) / (convertToHex(xmlPr).length/4);
        stressPosInWord = stressPos * input.value.length;
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
            defHis[input.value] = def.innerHTML;
        };
    } else {
        input.value = "Can't find this word"
        input.focus();
        input.select();
        audio.src = "https://media.merriam-webster.com/soundc11/c/can_t002.wav";
		audio.play();
		setTimeout(function() {
            audio.src = "https://media.merriam-webster.com/soundc11/f/find0001.wav";
    		audio.play();
		}, 600);
		setTimeout(function() {
            audio.src = "https://media.merriam-webster.com/soundc11/t/this0001.wav";
    		audio.play();
		}, 1200);
		setTimeout(function() {
            audio.src = "https://media.merriam-webster.com/soundc11/w/word0001.wav";
    		audio.play();
		}, 1800);
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

bar.addEventListener("click", function(e) {
   if (e.target.classList.contains("history")) {
        xhttp.open("GET", "https://www.dictionaryapi.com/api/v1/references/collegiate/xml/" + e.target.innerText + "?key=14e3fcf0-6d29-49e9-b7e9-30db51280e47", true);
	    xhttp.send();
	    def.innerHTML = defHis[e.target.innerText];
   }; 
});
