var wörterbuch = {
	Rindfleisch: {
		bedeutung: "beef",
		bildung: "Rind Fleisch",
		detail: "cow meat"
	},
	Etikettierung: {
		bedeutung: "labeling",
		bildung: "etikettieren ung",
		detail: "label ing"
	},
	S: {
		bedeutung: "'s, of"
	},
	Überwachung: {
		bedeutung: "supervision",
		bildung: "über wachen ung",
		detail: "over watch ing"
	},
	Aufgaben: {
		bedeutung: "duties",
		bildung: "auf gaben",
		detail: ""
	},
	Übertragung: {
		bedeutung: "delegation",
		bildung: "über tragen ung",
		detail: ""
	},
	Gesetz: {
		bedeutung: "law"
	}
};

var teile = {
	Rind: "nomen",
	etikettieren: "verbIeren",
	über: "präposition",
	wachen: "verbEnr",
	auf: "präposition",
	gaben: "verbEnir",
	tragen: "verbEnr"
};

var gruppe = {
	präposition: {
		ein: {
			bedeutung: "in",
			verbindung: ["arbeiten", "bilden", "büßen", "drücken", "fallen", "führen", "gliedern", "greifen", "halten", "lassen", "nehmen", "richten", "schätzen", "schließen", "schreiben", "setzen", "stellen", "wenden"]
		},
		aus: {
			bedeutung: "out",
			verbindung: ["bauen", "bilden", "brechen", "dehnen", "drücken", "fallen", "führen", "halten", "handeln", "lesen", "lösen", "nehmen", "nutzen", "schneiden", "sehen", "stellen", "stoßen", "strahlen", "üben", "weisen", "wirken"]
		},
		an: {
			bedeutung: "near",
			verbindung: ["bauen", "eignen", "erkennen", "fassen", "fallen", "fordern", "fragen", "greifen", "kündigen", "legen", "nehmen", "passen", "rechnen", "regen", "schaffen", "schließen", "siedeln", "stellen", "treiben", "werben", "zahlen"]
		},
		ab: {
			bedeutung: "off",
			verbindung: ["brechen", "halten", "hängen", "heben", "laufen", "legen", "lehnen", "lenken", "lösen", "melden", "nehmen", "sagen", "schaffen", "schalten", "schlagen", "schließen", "schneiden", "stimmen", "treiben", "weichen", "ziehen"]
		},
		vor: {
			bedeutung: "before",
			verbindung: ["beugen", "gehen", "legen", "schreiben", "springen", "stellen", "werfen", "ziehen"]
		},
		nach: {
			bedeutung: "after",
			verbindung: ["fragen", "gehen", "lassen", "schlagen", "weisen"]
		},
		zu: {
			bedeutung: "toward",
			verbindung: ["fallen", "führen", "gehen", "greifen", "lassen", "nehmen", "neigen", "ordnen", "sagen", "setzen", "stehen", "stimmen", "wenden"]
		},
		zurück: {
			bedeutung: "back",
			verbindung: ["gehen", "halten", "kehren", "legen"]
		},
		zusammen: {
			bedeutung: "together",
			verbindung: ["brechen", "fassen", "hängen"]
		}
	},
	verbEnr: {
		arbeiten: {
			bedeutung: "work",
			verbindung: ["ein"]
		},
		beugen: {
			bedeutung: "bend",
			verbindung: ["vor"]
		},
		bilden: {
			bedeutung: "form",
			verbindung: ["ein", "aus"]
		},
		dehnen: {
			bedeutung: "stretch",
			verbindung: ["aus"]
		},
		eignen: {
			bedeutung: "suit",
			verbindung: ["an"]
		},
		erkennen: {
			bedeutung: "recognize",
			verbindung: ["an"]
		},
		fassen: {
			bedeutung: "touch",
			verbindung: ["an", "zusammen"]
		},
		fordern: {
			bedeutung: "demand",
			verbindung: ["an"]
		},
		führen: {
			bedeutung: "lead",
			verbindung: ["ein", "aus", "zu"]
		},
		gliedern: {
			bedeutung: "structure",
			verbindung: ["ein"]
		},
		halten: {
			bedeutung: "hold",
			verbindung: ["ein", "aus", "ab", "zurück"]
		},
		handeln: {
			bedeutung: "trade",
			verbindung: ["aus"]
		},
		heben: {
			bedeutung: "lift",
			verbindung: ["ab"]
		},
		kündigen: {
			bedeutung: "terminate",
			verbindung: ["an"]
		},
		lassen: {
			bedeutung: "let",
			verbindung: ["ein", "nach", "zu"]
		},
		lehnen: {
			bedeutung: "lean",
			verbindung: ["ab"]
		},
		lenken: {
			bedeutung: "steer",
			verbindung: ["ab"]
		},
		lösen: {
			bedeutung: "solve",
			verbindung: ["aus", "ab"]
		},
		melden: {
			bedeutung: "register",
			verbindung: ["ab"]
		},
		neigen: {
			bedeutung: "tend",
			verbindung: ["zu"]
		},
		nutzen: {
			bedeutung: "use",
			verbindung: ["aus"]
		},
		ordnen: {
			bedeutung: "organize",
			verbindung: ["zu"]
		},
		passen: {
			bedeutung: "fit",
			verbindung: ["an"]
		},
		rechnen: {
			bedeutung: "count",
			verbindung: ["an"]
		},
		regen: {
			bedeutung: "stir",
			verbindung: ["an"]
		},
		richten: {
			bedeutung: "set",
			verbindung: ["ein"]
		},
		schaffen: {
			bedeutung: "establish",
			verbindung: ["an", "ab"]
		},
		schalten: {
			bedeutung: "switch",
			verbindung: ["ab"]
		},
		schätzen: {
			bedeutung: "estimate",
			verbindung: ["ein"]
		},
		siedeln: {
			bedeutung: "settle",
			verbindung: ["an"]
		},
		stellen: {
			bedeutung: "put",
			verbindung: ["ein", "aus", "an", "ab", "vor"]
		},
		stimmen: {
			bedeutung: "vote",
			verbindung: ["ab", "zu"]
		},
		strahlen: {
			bedeutung: "radiate",
			verbindung: ["aus"]
		},
		üben: {
			bedeutung: "practice",
			verbindung: ["aus"]
		},
		weichen: {
			bedeutung: "give away",
			verbindung: ["ab"]
		},
		wenden: {
			bedeutung: "turn",
			verbindung: ["ein", "zu"]
		},
		werben: {
			bedeutung: "advertise",
			verbindung: ["an"]
		},
		wirken: {
			bedeutung: "work",
			verbindung: ["aus"]
		},
		zahlen: {
			bedeutung: "pay",
			verbindung: ["an"]
		}
	},
	verbEnir: {
		bauen: {
			bedeutung: "build",
			verbindung: ["aus", "an"]
		},
		brechen: {
			bedeutung: "break",
			verbindung: ["aus", "ab", "zusammen"]
		},
		büßen: {
			bedeutung: "atone",
			verbindung: ["ein"]
		},
		drücken: {
			bedeutung: "press",
			verbindung: ["ein", "aus"]
		},
		fallen: {
			bedeutung: "fall",
			verbindung: ["ein", "aus", "an", "zu"]
		},
		fragen: {
			bedeutung: "ask",
			verbindung: ["an", "nach"]
		},
		gehen: {
			bedeutung: "go",
			verbindung: ["vor", "nach", "zu", "zurück"]
		},
		greifen: {
			bedeutung: "grab",
			verbindung: ["ein", "an", "zu"]
		},
		hängen: {
			bedeutung: "hang",
			verbindung: ["ab", "zusammen"]
		},
		kehren: {
			bedeutung: "sweep",
			verbindung: ["zurück"]
		},
		laufen: {
			bedeutung: "run",
			verbindung: ["ab"]
		},
		legen: {
			bedeutung: "",
			verbindung: ["an", "ab", "vor", "zurück"]
		},
		lesen: {
			bedeutung: "lay",
			verbindung: ["aus"]
		},
		nehmen: {
			bedeutung: "take",
			verbindung: ["ein", "aus", "an", "ab", "zu"]
		},
		sagen: {
			bedeutung: "say",
			verbindung: ["ab", "zu"]
		},
		schlagen: {
			bedeutung: "beat",
			verbindung: ["ab", "nach"]
		},
		schließen: {
			bedeutung: "",
			verbindung: ["ein", "an", "ab"]
		},
		schneiden: {
			bedeutung: "close",
			verbindung: ["aus", "ab"]
		},
		schreiben: {
			bedeutung: "write",
			verbindung: ["ein", "vor"]
		},
		sehen: {
			bedeutung: "see",
			verbindung: ["aus"]
		},
		setzen: {
			bedeutung: "sit",
			verbindung: ["ein", "zu"]
		},
		springen: {
			bedeutung: "jump",
			verbindung: ["vor"]
		},
		stehen: {
			bedeutung: "stand",
			verbindung: ["zu"]
		},
		stoßen: {
			bedeutung: "bump",
			verbindung: ["aus"]
		},
		tragen: {
			bedeutung: "carry",
			verbindung: ["ein", "vor"]
		},
		treiben: {
			bedeutung: "drive",
			verbindung: ["an", "ab"]
		},
		weisen: {
			bedeutung: "point",
			verbindung: ["aus", "nach"]
		},
		werfen: {
			bedeutung: "throw",
			verbindung: ["vor"]
		},
		ziehen: {
			bedeutung: "pull",
			verbindung: ["ab", "vor"]
		}
	},
	verbIeren: {
		markieren: {
			bedeutung: "mark",
			verbindung: []
		},
		sanieren: {
			bedeutung: "renovate",
			verbindung: []
		},
		regieren: {
			bedeutung: "govern",
			verbindung: []
		},
		registrieren: {
			bedeutung: "register",
			verbindung: []
		},
		reservieren: {
			bedeutung: "reserve",
			verbindung: []
		}
	},
	nomen: {
		Kaninchen: {
			bedeutung: "rabbit",
			verbindung: []
		},
		Schwein: {
			bedeutung: "pig",
			verbindung: []
		},
		Schaf: {
			bedeutung: "sheep",
			verbindung: []
		},
		Hähnchen: {
			bedeutung: "chicken",
			verbindung: []
		}
	}
};

/*
einarbeitung: training
ausbau: expansion
anbau: cultivation
vorbeugung:
einbildung:
ausbildung:
ausbruch:
abbruch:
zusammenbruch
einbuße
ausdehnung
eindruck
ausdruck
aneignung
anerkennung
einfall
ausfall
anfall
zufall
anfassung
zusammenfassung
anfordernung
anfrage
nachfrage
einführung
ausführung
zuführung

*/

var gesetz = $("span")[0];
	gesetz.innerHTML = "<div>" + gesetz.innerHTML.split(" ").join("</div><div>") + "</div>";
	$("section")[0].style.left = "0";
var	h1TextBackup, pTextBackup, currentClass;
var change = false;
	ep = $("main")[0];
	bg = $("main")[1];
	bgSetup();

gesetz.addEventListener("mouseover", function(e) {
	ep.classList.remove("select");
	change = false;

	if (ep.classList.contains("neben")) {
		nebenReset();
	};

	if (e.target.tagName == "DIV") {
		e.target.classList.add("focus");
		$("h1")[0].innerText = e.target.innerText.charAt(0).toUpperCase() + e.target.innerText.slice(1);
		bedeuten(wörterbuch);
		//backup
		h1TextBackup = $("h1")[0].innerText;
		pTextBackup = $("p")[0].innerText;
	};
});

gesetz.addEventListener("mouseout", function(e) {
	if (e.target.tagName == "DIV") {
		e.target.classList.remove("focus");
	};
});

ep.addEventListener("click", function() {
	if (ep.classList.contains("neben")) {
		nebenReset();
		$("section")[0].style.backgroundColor = "rgba(0, 0, 0, 1)";
	} else {
		ep.classList.add("neben");
		//combined - separate it
		for (var i = 0; i < Object.keys(wörterbuch).length; i ++) {
			if (h1TextBackup == Object.keys(wörterbuch)[i] && Object.values(wörterbuch)[i].bildung) {
				for (var j = 0; j < Object.values(wörterbuch)[i].bildung.split(" ").length - 1; j ++) {
					epSetup();
				};

				for (var k = 0; k < $("section").length; k ++) {
					$("section")[k].style.backgroundColor = "rgba(0, 0, 0, " + 1 / $("section").length +")";
					$("section")[k].style.left = k * 300 + "px";
					$("h1")[k].innerHTML = Object.values(wörterbuch)[i].bildung.split(" ")[k];
					$("h1")[k].classList.add(teile[Object.values(wörterbuch)[i].bildung.split(" ")[k]]);
					$("p")[k].innerHTML = ": " + Object.values(wörterbuch)[i].detail.split(" ")[k];
				};
			};
		};
	};
});

ep.addEventListener("mouseover", function(e) {
	if (e.target.tagName == "SECTION") {
		//if (!change) {
			for (var i = 0; i < Object.keys(teile).length; i ++) {
				if (e.target.children[0].innerText == Object.keys(teile)[i]) {
					ep.classList.add("select");
					e.target.children[0].classList.add("connect");
					for (var j = 0; j < bg.children.length; j ++) {
						if (bg.children[j].classList.contains(Object.values(teile)[i])) {
							bg.children[j].classList.add("active");
						} else {
							bg.children[j].classList.remove("active");
						};		
					};
				};
			};
		//};
	};
});

ep.addEventListener("mouseout", function(e) {
	if (e.target.tagName == "SECTION") {
		if (e.target.children[0].classList.contains("connect")) {
			e.target.children[0].classList.remove("connect");
		};
		//};
		/*for (var i = 0; i < $("section").length; i ++) {
			if ($("section")[i].children[0].classList.contains("connect")) {
				if ($("section")[i] != e.target) {
					$("section")[i].children[0].classList.remove("connect");
				};
			};
		};*/
	};
});

bg.addEventListener("mouseover", function(e) {
	if (ep.classList.contains("select")) {
		if (e.target.classList.contains("active")) {
			var targetedObj = gruppe[e.target.classList.item(0)][e.target.innerText];
			for (var i = 0; i < $("section").length; i ++) {
				if ($("section")[i].children[0].classList.contains("connect")) {
					$("section")[i].children[0].innerText = e.target.innerText;
					$("section")[i].children[1].innerText = ": " + targetedObj.bedeutung;
				};
			};
			
			if (!change) {
			for (var j = 0; j < bg.children.length; j ++) {
				if (targetedObj.verbindung.includes(bg.children[j].innerText)) {
					currentClass = bg.children[j].classList.item(0);

					if (!bg.children[j].classList.contains("active")) {
						bg.children[j].classList.add("active");
					}
				} else {
					if (bg.children[j].classList.contains("active")) {
						bg.children[j].classList.remove("active");
					};
				};
			};
			} else {
				for (var n = 0; n < bg.children.length; n ++) {
					bg.children[n].classList.remove("active");
				};
			};
			
			for (var k = 0; k < $("section").length; k ++) {
				if ($("section")[k].children[0].classList.contains(currentClass)) {
					$("section")[k].children[0].classList.add("connect");
				} else {
					$("section")[k].children[0].classList.remove("connect");
				};
			};

			change = true;
		};
	};	
});

/*h1.addEventListener("mouseenter", function() {
	for (var i = 0; i < Object.keys(wörterbuch).length; i ++) {
		if (h1.innerText == Object.keys(wörterbuch)[i]) {
			if (Object.values(wörterbuch)[i].bildung) {
				back = h1.innerText;
				h1.innerHTML = "<div>" + Object.values(wörterbuch)[i].bildung.split(" ").join("</div> - <div>") + "</div>";
				p.innerHTML = ": " + "<div>" + Object.values(wörterbuch)[i].detail.split(" ").join("</div> - <div>") + "</div>";
			};
		};
	};
});

h1.addEventListener("mouseleave", function() {
	if (h1.innerHTML.match("<div>")) {
		h1.innerText = back;
		bedeuten(wörterbuch);
	};
});

h1.addEventListener("mouseover", function(e) {
	if (e.target.tagName == "DIV") {
		for (var i = 0; i < Object.keys(teile).length; i ++) {

			if (e.target.innerText == Object.keys(teile)[i]) {
				e.target.classList.add("connect");
				for (var j = 0; j < bg.children.length; j ++) {
					if (bg.children[j].classList.contains(Object.values(teile)[i])) {
						bg.children[j].classList.add("active");
					} else {
						bg.children[j].classList.remove("active");
					};
				};
			};

		};
	};
});

h1.addEventListener("mouseout", function(e) {
	if (e.target.tagName == "DIV") {
		if (e.target.classList.contains("connect")) {
			e.target.classList.remove("connect");
		};
	};
});*/

function bgSetup() {
	var sum = 0;

	for (var i = 0; i < Object.keys(gruppe).length; i ++) {
		for (var j = 0; j < Object.keys(gruppe[Object.keys(gruppe)[i]]).length; j ++) {
			var bgDiv = document.createElement("div");
			bg.appendChild(bgDiv);
			bgDiv.innerText = Object.keys(gruppe[Object.keys(gruppe)[i]])[j];
			bgDiv.classList.add(Object.keys(gruppe)[i]);
			sum ++;
		};
	};

	var positions = [];
		overlapping = false;
		protection = 0;

	while (positions.length < sum) {
		var position = {
			x: Math.random() * ($(window).innerWidth() - 100),
			y: Math.random() * ($(window).innerHeight() * 0.85)
		};

		var overlapping = false;

		for (var i = 0; i < positions.length; i ++) {
			var other = positions[i];
			var d = Math.sqrt(Math.pow(position.x - other.x, 2) + Math.pow(position.y - other.y, 2));
			if (d < Math.sqrt(Math.pow(80, 2) + Math.pow(20, 2))) {
				overlapping = true;
			};
			/*if ($(window).innerHeight() * 0.3 - 25 < position.y && position.y < $(window).innerHeight() * 0.45 + 25) {
					overlapping = true;
			};*/
		};




		if (!overlapping) {
			positions.push(position);
		};

		protection ++;

		if (protection > 30000) {
			break;
		}
	};

	for (var i = 0; i < positions.length; i ++) {
		bg.children[i].style.left = positions[i].x + "px";
		bg.children[i].style.top = positions[i].y + "px";
	};
};

function epSetup() {
	var tag1 = document.createElement("section");
		tag2 = document.createElement("h1");
		tag3 = document.createElement("p");
	ep.appendChild(tag1);
	tag1.classList.add("karte");
	tag1.appendChild(tag2);
	tag1.appendChild(tag3);
};

function nebenReset() {
	ep.classList.remove("neben");
	ep.innerHTML = "";
	epSetup();
	$("h1")[0].innerText = h1TextBackup;
	$("p")[0].innerText = pTextBackup;
};

function bedeuten(dic) {
	for (var i = 0; i < Object.keys(dic).length; i ++) {
		if ($("h1")[0].innerText == Object.keys(dic)[i]) {
			$("p")[0].innerText = ": " + Object.values(dic)[i].bedeutung;
		};
	};
};

function check() {
	var compound = "";

	for (var i = 0; i < $("section").length; i ++) {
		compound += $("section")[i].children[0].innerText + " ";
	};

	return compound.trim();
}