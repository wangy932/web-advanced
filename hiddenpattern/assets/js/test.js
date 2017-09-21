var emoji = {
	earth: "🌎",
	hot: "🤒",

	cow: "🐮",
	ox: "🐂",
	burger: "🍔",
	full: "😋", 

	grass: "🌱",
	gas: "💨",
	fog: "🌫",
	
	popper: "🎉",
	
	ph: "  "
};

var button = document.getElementById("button");
	slogan = document.getElementById("slogan");


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
}

function demo(num) {
	output(num, emoji.earth, emoji.grass, emoji.grass);
	output(num, emoji.earth, emoji.cow, emoji.grass);
	output(num, emoji.earth, emoji.ox, emoji.ph);
	output(num, emoji.earth, emoji.ox, emoji.gas);
	output(num, emoji.earth, emoji.burger, emoji.gas);
	output(num, emoji.earth, emoji.ph, emoji.gas);
	output(num, emoji.hot, emoji.fog, emoji.fog);
}

demo(25);

