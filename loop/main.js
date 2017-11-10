var dictionary = {
	Rindfleischetikettierungsuberwachungsaufgabenubertragungsgesetz: {
		bedeutung: "law for the delegation of monitoring beef labelling",
		verbindung: [""]
	},
	Rindfleisch: {
		bedeutung: "beef",
		verbindung: ["Kalbfleisch", "Schweinefleisch", "Schaffleisch", "Lammfleisch", "Geflügelfleisch", "Kaninchenfleisch"]
	},
	etikettierung: {
		bedeutung: "labeling",
		verbindung: [""]
	},
	s: {
		bedeutung: "'s, of",
		verbindung: [""]
	},
	Uberwachung: {
		bedeutung: "supervision",
		verbindung: [""]
	},
	Aufgaben: {
		bedeutung: "tasks",
		verbindung: [""]
	},
	Ubertragung: {
		bedeutung: "transmission",
		verbindung: [""]
	},
	Gesetz: {
		bedeutung: "law",
		verbindung: [""]
	},
	Rind: {
		bedeutung: "cow",
		verbindung: [""]
	},
	Fleisch: {
		bedeutung: "meat",
		verbindung: [""]
	},
	etikettieren: {
		bedeutung: "to label",
		verbindung: ["markieren", "sanieren", "regieren", "registrieren", "reservieren"]
	},
	ung: {
		bedeutung: "ing (noun ending)",
		verbindung: [""]
	},
	uber: {
		bedeutung: "over, super",
		verbindung: ["ab", "an", "aus", "bei", "ein", "mit", "nach", "vor", "zu", "zusammen"]
	},
	wachen: {
		bedeutung: "to watch",
		verbindung: ["arbeiten", "beugen", "bilden", "dehnen", "eignen", "erkennen", "fassen", "fordern", "gliedern", "halten", "handeln", "heben", "lassen", "lehnen", "lenken", "melden", "neigen", "nutzen", "ordnen", "passen", "rechnen", "regen", "richten", "schaffen", "schalten", "siedeln", "stellen", "stimmen", "wenden", "wirken", "zahlen"]
	},
	auf: {
		bedeutung: "on, up",
		verbindung: ["ab", "an", "aus", "bei", "ein", "mit", "nach", "vor", "zu", "zusammen"]
	},
	Gabe: {
		bedeutung: "Gift (noun for geben)",
		verbindung: [""]
	},
	n: {
		bedeutung: "s (plural)",
		verbindung: [""]
	},
	tragen: {
		bedeutung: "carry",
		verbindung: [""]
	}
};

var stage = [
"Rindfleischetikettierungsuberwachungsaufgabenubertragungsgesetz", 
"Rindfleisch etikettierung s Uberwachung s Aufgaben Ubertragung s Gesetz", 
"Rind Fleisch etikettieren ung s uber wachen ung s auf Gabe n uber tragen ung s Gesetz"
];

var foreground = document.getElementById("foreground");
	container = document.getElementById("container");
	positionSet();
	explain = document.getElementById("explain");
	input = document.getElementById("input");
	numberV = document.getElementById("number-v");
	numberL = document.getElementById("number-l");
	background = document.getElementById("background");
var checkWord, spanState;





//Cookies Read
if (!Cookies.getJSON("spanState")) {
	spanState = {};
	spanState.stage1 = {};
	spanState.stage2 = {};
	spanState.stage3 = {};
} else {
	console.log(Cookies.getJSON("spanState"));
	spanState = Cookies.getJSON("spanState");
	if ($("span")[0].innerText == Object.keys(spanState.stage1)[0]) {
		$("span")[0].classList.add("learned");
	};
};

if (Cookies.get("numberViewed")) {
	console.log(Cookies.get("numberViewed"));
	numberV.innerText = Cookies.get("numberViewed");
};

if (Cookies.get("numberLearned")) {
	console.log(Cookies.get("numberLearned"));
	numberL.innerText = Cookies.get("numberLearned");
};





//Swipe
$("body").on("touchmove",function(e){
	e.stopPropagation();
    e.preventDefault();
});

$.browserSwipe({
//bigger
  up: function() {
	action(25, 35, stage[1].split(" ").join("</span><span>"), 0.97, 35, 45, stage[2].split(" ").join("</span><span>"), 0.94);
  },
//smaller
  down: function() {
    action(45, 35, stage[1].split(" ").join("</span><span>"), 0.97, 35, 25, stage[0], 1);
  }
});

function positionSet() {
	container.style.left = "calc(50% - " + (($("span")[0].clientWidth + 1) / 2) + "px)";
};

function spanStateSet() {
	console.log(spanState);

	for (var i = 0; i < $("span").length; i ++) {
		if ($("span").length == 1) {
			for (var j = 0; j < Object.keys(spanState.stage1).length; j ++) {
				if ($("span")[i].innerText == Object.keys(spanState.stage1)[j]) {
					$("span")[i].classList.add("learned");
				};
			};
		} else if ($("span").length == 9) {
			for (var j = 0; j < Object.keys(spanState.stage2).length; j ++) {
				if ($("span")[i].innerText == Object.keys(spanState.stage2)[j]) {
					$("span")[i].classList.add("learned");
				};
			};
		} else if ($("span").length == 17) {
			for (var j = 0; j < Object.keys(spanState.stage3).length; j ++) {
				if ($("span")[i].innerText == Object.keys(spanState.stage3)[j]) {
					$("span")[i].classList.add("learned");
				};
			};
		};
	};
};

function action(size1, size2, content1, per1, size3, size4, content2, per2) {
	if (event.clientY < (window.innerHeight / 2) - 90 || event.clientY > (window.innerHeight / 2) - 30) {
		explain.innerText = "";

		if (window.getComputedStyle($("span")[0]).fontSize.slice(0, -2) == size1) {
		    container.innerHTML = "<span>" + content1 + "</span>";
		    sizeChangeTo(size2);
		    document.body.style.backgroundColor = "rgba(30, 30, 30, " + per1 + ")";
		} else if (window.getComputedStyle($("span")[0]).fontSize.slice(0, -2) == size3) {
			container.innerHTML = "<span>" + content2 + "</span>";
		    sizeChangeTo(size4);
		    document.body.style.backgroundColor = "rgba(30, 30, 30, " + per2 + ")";
		};

		var length = 0; 
		for (var i = 0; i < $("span").length - 1; i ++) {
			length = length + ($("span")[i].clientWidth + 1) + 10 * window.getComputedStyle($("span")[0]).fontSize.slice(0, -2);
		};
		length = length + (container.lastChild.clientWidth + 1) / 2 + window.innerWidth / 2;

		container.style.width = length + "px";

		setTimeout(function() {
	    	positionSet();
	    	spanStateSet();
	    }, 500);
	};
};

function sizeChangeTo(num) {
	for (var i = 0; i < $("span").length; i ++) {
		$("span")[i].style.fontSize = num + "px";
	};
};





//Click
container.addEventListener("click", function(e) {
	inputClear();

	if (e.target.tagName == "SPAN") {
		background.innerHTML = "";

		if (e.target.classList.contains("focus")) {
			for (var i = 0; i < $("span").length; i ++) {
				$("span")[i].classList.remove("blur");
				$("span")[i].classList.remove("focus");
			};

			explain.innerText = "";
		} else {
			for (var i = 0; i < $("span").length; i ++) {
				$("span")[i].classList.add("blur");
				$("span")[i].classList.remove("focus");
			};

			e.target.classList.remove("blur");
			e.target.classList.add("focus");

			backgroundSet();

			//Cookies Reset
			numberV.innerText = Number(numberV.innerText) + 1;
			unlearnCheck();
			
			Cookies.set("spanState", spanState, {expires: 10});
			Cookies.set("numberViewed", Number(numberV.innerText), {expires: 10});
			Cookies.set("numberLearned", Number(numberL.innerText), {expires: 10});

			console.log(spanState);

			for (var i = 0; i < $("span").length; i ++) {
				if ($("span")[i].classList.contains("focus")) {
					var difference = 0;
					for (var j = 0; j < i; j ++) {
						difference = difference + ($("span")[j].clientWidth + 1) + 10 * window.getComputedStyle($("span")[0]).fontSize.slice(0, -2);
					};
					difference = difference + ($("span")[i].clientWidth + 1) / 2 - ($("span")[0].clientWidth + 1) / 2;
				};
			};
			
			scrollTo(difference, 1500);

			for (var i = 0; i < Object.keys(dictionary).length; i ++) {
				if (e.target.innerText == Object.keys(dictionary)[i]) {
					explain.innerText = dictionary[e.target.innerText].bedeutung;
				};
			};
		};
	};
});

function backgroundSet() {
	var sum, content;

	for (var i = 0; i < $("span").length; i ++) {
		if ($("span")[i].classList.contains("focus")) {
			sum = dictionary[$("span")[i].innerText].verbindung.length;
			content = dictionary[$("span")[i].innerText].verbindung;
		};
	}

	var positions = [];
		overlapping = false;
		protection = 0;

	while (positions.length < sum) {
		var position = {
			x: Math.random() * ($(window).innerWidth() - 50),
			y: Math.random() * ($(window).innerHeight() - 20)
		};

		var overlapping = false;

		for (var i = 0; i < positions.length; i ++) {
			var other = positions[i];
			var d = Math.sqrt(Math.pow(position.x - other.x, 2) + Math.pow(position.y - other.y, 2));
			if (d < Math.sqrt(Math.pow(150, 2) + Math.pow(20, 2))) {
				overlapping = true;
			};
			if ((window.innerHeight / 2) - 70 < position.y && position.y < (window.innerHeight / 2) + 10) {
					overlapping = true;
			};
		};

		if (!overlapping) {
			positions.push(position);
		};

		protection ++;

		if (protection > 10000) {
			break;
		}
	};

	for (var i = 0; i < sum; i ++) {
		var div = document.createElement("div");
		background.appendChild(div);
		div.classList.add("current");
		div.style.left = positions[i].x + "px";
		div.style.top = positions[i].y + "px";
		div.innerText = content[i];
	};
};

function scrollTo(to, duration) {
	if (duration <= 0) return;
	var difference = to - foreground.scrollLeft;
	var perTick = difference / duration * 10;

	setTimeout(function() {
		foreground.scrollLeft = foreground.scrollLeft + perTick;
		if (foreground.scrollLeft == to) return;
		scrollTo(to, duration - 10);
	}, 5);
};





//Hover & Keypress
container.addEventListener("mouseover", function(e) {
	setTimeout(function() {
        input.focus();
        input.style.color = "#D8C15A";
    }, 0);

	if (e.target.tagName == "SPAN") {
		if (!e.target.classList.contains("focus")) {
			checkWord = e.target;

			input.style.display = "block";
			input.style.left = e.clientX + "px";
			input.style.top = e.clientY + "px";
		};
	};
});

input.addEventListener("keypress", function(e) {
	if (e.keyCode == 13) {
		input.blur();
		input.classList.add("check");
		input.style.color = window.getComputedStyle(document.body).backgroundColor;

		//Cookies Reset
		if (input.value == dictionary[checkWord.innerText].bedeutung) {
			input.value = "correct!!"
			learnCheck();
		} else {
			input.value = "wrong..";
			unlearnCheck();
		};

		Cookies.set("spanState", spanState, {expires: 10});
		Cookies.set("numberLearned", Number(numberL.innerText), {expires: 10});

		console.log(spanState);
	};
});

container.addEventListener("mouseout", function(e) {
	if (e.target.tagName == "SPAN") {
		inputClear();
	};
});

function spanStateUpdate(info) {
	if (info == 1) {
		if ($("span").length == 1) {
			spanState.stage1[checkWord.innerText] = "learned";
		} else if ($("span").length == 9) {
			spanState.stage2[checkWord.innerText] = "learned";
		} else if ($("span").length == 17) {
			spanState.stage3[checkWord.innerText] = "learned";
		};
	} else if (info == -1) {
		if ($("span").length == 1) {
			delete spanState.stage1[checkWord.innerText];
		} else if ($("span").length == 9) {
			delete spanState.stage2[checkWord.innerText];
		} else if ($("span").length == 17) {
			delete spanState.stage3[checkWord.innerText];
		};
	};

	Cookies.set("spanState", spanState, {expires: 10});
};

function inputClear() {
	input.style.display = "none";
	input.classList.remove("check");
	input.value = "";
};

function learnCheck() {
	if (!checkWord.classList.contains("learned")) {
		for (var i = 0; i < $("span").length; i ++) {
			if ($("span")[i].innerText == checkWord.innerText) {
				$("span")[i].classList.add("learned");
			};
		};
		spanStateUpdate(1);
		numberL.innerText = Number(numberL.innerText) + 1;
	};
};

function unlearnCheck() {
	if (checkWord.classList.contains("learned")) {
		for (var i = 0; i < $("span").length; i ++) {
			if ($("span")[i].innerText == checkWord.innerText) {
				$("span")[i].classList.remove("learned");
			};
		};
		spanStateUpdate(-1);
		numberL.innerText = Number(numberL.innerText) - 1;
	};
};













