var emoji = {
	earth: "🌎",
	flush: "😳",
	shock: "😯",
	fear: "😧",
	mask: "😷",
	sick: "🤢",
	hot: "🤒",

	cow: "🐮",
	ox: "🐂",
	burger: "🍔",
	waste: "🗑",

	grass: "🌱",
	paw: "🐾",
	gas: "💨",
	fog: "🌫",
	
	popper: "🎉"
};

var button = document.getElementById("button");
	table = document.getElementById("table");
	eaterL = document.getElementById("eater_l");
	eaterR = document.getElementById("eater_r");

button.addEventListener("click", function() {
	eaterInfo = eaterL.innerText;
	if (button.innerText == "Ready to order?") {
		process(5, 2, "More?");
	} else if (button.innerText == "More?") {
		process(11, 6, "Enough?")
	} else {
		process(17, 8, "Another round?");
	};
});

function process(num, dvd, line) {
	button.innerText = "";
	orderPlease();
	demo(num, dvd);
	eat();
	imFull();
	cleanUp(line);
}

function orderPlease() {
	eaterL.innerText = eaterL.innerText.replace("👦", "👋").replace("👧", "👋").replace("👨", "👋").replace("👩", "👋").replace("👴", "👋").replace("👵", "👋");
	eaterR.innerText = eaterR.innerText.replace("👦", "👋").replace("👧", "👋").replace("👨", "👋").replace("👩", "👋").replace("👴", "👋").replace("👵", "👋");
};

function eat() {
	setTimeout(function() {
		table.innerText = table.innerText.split("🤷").join("🍴🍴");
	}, 20000);
};

function imFull() {
	setTimeout(function() {
		table.innerText = table.innerText.split("🍔").join("🍽").split("🍴🍴").join("  ");
		eaterL.innerText = eaterL.innerText.split("👋").join("😋");
		eaterR.innerText = eaterR.innerText.split("👋").join("😋");
	}, 25000);	
};

function cleanUp(line) {
	setTimeout(function() {
		table.innerText = "";
		button.innerText = line;
		eaterL.innerText = eaterInfo;
		eaterR.innerText = eaterInfo;
	}, 30000);
}

function output(num, emj1, emj2, emj3) {
	var output = "";

	for (var row = 0; row < num; row ++) {
		if (row == (num - 1) / 2) {
			for (var col = 0; col < num; col ++) {
				if (((num - 1) / 2) % 2) {
					if (col == (num - 1) / 2) {
						output = output + emj1;
					} else if (col % 2) {
						output = output + emj2;
					} else {
						output = output + emj3;
					};
				} else {
					if (col == (num - 1) / 2) {
						output = output + emj1;
					} else if (col % 2) {
						output = output + emj3;
					} else {
						output = output + emj2;
					};
				};
			};
		} else if (row % 2) {
			for (var col = 0; col < num; col ++) {
				if (col % 2) {
					output = output + emj2;
				} else {
					output = output + emj3;
				};
			};
		} else {
			for (var col = 0; col < num; col ++) {
				if (col % 2) {
					output = output + emj3;
				} else {
					output = output + emj2;
				};
			};
		};
		output = output + "\n";
	};

	console.log(output);
};

function demo(num, dvd) {
	setTimeout(function() {
		output(num, emoji.earth, emoji.grass, emoji.grass);
		console.log("Hmm.. I think I need some meat..");
	}, 500);
	
	setTimeout(function() {
		output(num, emoji.flush, emoji.cow, emoji.grass);
		console.log("Hooray!! Baby cattles!");
	}, 3000);
	
	setTimeout(function() {
		output(num, emoji.shock, emoji.ox, emoji.paw);
		console.log("Finally, grown-ups!");
	}, 6000);
	
	setTimeout(function() {
		output(num, emoji.fear, emoji.ox, emoji.gas);
		console.log("Cattle: I'm so sorry, but I've gotta expel this, otherwise I will just explode..");
	}, 9000);
	
	setTimeout(function() {
		output(num, emoji.mask, emoji.burger, emoji.gas);
		setTimeout(function() {
			for (var i = 1; i <= (num*num - 1) / 2; i ++) {
				if (i % dvd) {
					table.innerText += emoji.burger + "🤷";
				} else {
					table.innerText += emoji.burger + "\n";
				}
			};
		}, 2000);
		console.log("Beautiful!");
	}, 15000);
	
	setTimeout(function() {
		output(num, emoji.sick, emoji.waste, emoji.gas);
		console.log("Thank you guys! So yummy! Oh, what about those methane? Hmm.. can we talk about it later?");
	}, 25000);
	
	setTimeout(function() {
		output(num, emoji.hot, emoji.fog, emoji.fog);
		console.log("Well, seems to be a bit stuffy here..");
	}, 30000);
};