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
        shape.innerHTML = input.value;
        
        //getSound
    	var xmlSound = new XMLSerializer().serializeToString(xmlDoc.getElementsByTagName("sound")[0].childNodes[0].childNodes[0]);
    	source = "https://media.merriam-webster.com/soundc11/" + input.value.slice(0, 1) + "/" + xmlSound;
    	console.log(source);
    	//console.log(xmlDoc.getElementsByTagName("sound"));
    	audio.src = source;
		audio.play();
    	
    	//getPr
    	var xmlPr = new XMLSerializer().serializeToString(xmlDoc.getElementsByTagName("pr")[0]).slice(4, -5);
    	//need to select the first one
    	console.log(xmlPr);
    	stressPos = (convertToHex(xmlPr).indexOf("02c8")/4) / (convertToHex(xmlPr).length/4);
        stressPosInWord = stressPos * input.value.length;
        console.log(stressPos);
        console.log(stressPosInWord);
        a = (Math.PI/2) / (input.value.length - stressPosInWord);
        b = Math.PI - a*input.value.length;
        console.log();
        
        //defineShape
        shape.innerHTML = "<div>" + shape.innerHTML.split("").join("</div><div>") + "</div>";
        var letters = document.getElementsByTagName("div");
        console.log(letters);
        for (var i = 0; i < letters.length; i ++) {
            letters[i].style.transform = "translateY(-" + 100 * Math.sin(a*i + b) + "%)";
        };
        
        //getDef
        var xmlDef = new XMLSerializer().serializeToString(xmlDoc.getElementsByTagName("def")[0]).replace(/<.*?>/g, "");
        xmlDef = xmlDef.replace(/ \d /g, "<br>$&").replace(/  :/g, " :").replace(/  /g, "$&<br>&nbsp;&nbsp;&nbsp;");
        console.log(xmlDef);
        def.innerHTML = xmlDef;
    } else {
    	alert("faux!");
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
