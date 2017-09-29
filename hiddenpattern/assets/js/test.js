var food = document.getElementById("food");
	indicator = document.getElementById("indicator");
	thermometer = document.getElementById("thermometer");
	eater = document.getElementsByClassName("eater");
	original = [];
	for (var i = 0; i < eater.length; i ++) {
		original[i] = eater[i].innerText;	
	};

food.addEventListener("mouseover", function(e) {
	if (e.target.classList.contains("option")) {
		indicator.style.opacity = "1";
		if (e.target == food.children[0]) {
			indicator.innerText = "Salad";
		} else if (e.target == food.children[1]) {
			indicator.innerText = "Poultry";
		} else if (e.target == food.children[2]) {
			indicator.innerText = "Beef";
		};
	};
});

food.addEventListener("mouseout", function(e) {
	if (e.target.classList.contains("option")) {
		indicator.style.opacity = "0";
	};
});

food.addEventListener("click", function(e) {
	for (var i = 0; i < eater.length; i ++) {
		eater[i].innerText = original[i];
	};
	thermometer.style.filter = "saturate(100%)";
	if (e.target.classList.contains("option")) {
		for (var i = 0; i < eater.length; i ++) {
			eater[i].innerText += e.target.innerText;
		};
		eaterInfo("😋", 1500);
		if (e.target == food.children[0]) {
			thermometer.style.filter = "saturate(100%)";
			eaterInfo("😉", 4000);
		} else if (e.target == food.children[1]) {
			thermometer.style.filter = "saturate(300%)";
			eaterInfo("😳", 4000);
		} else if (e.target == food.children[2]) {
			thermometer.style.filter = "saturate(1000%)";
			eaterInfo("😵", 4000);
		};
		setTimeout(function() {
			indicator.style.opacity = "1";
			indicator.innerText = "How so?\n(Open Console to see what happened)";
		}, 5000);
	};
});

function eaterInfo(emj, timer) {
	setTimeout(function() {
		for (var i = 0; i < eater.length; i ++) {
			eater[i].innerText = emj;
		};
	}, timer);
};

indicator.addEventListener("click", function() {
	if (indicator.innerText == "How so?\n(Open Console to see what happened)") {
		if (thermometer.style.filter == "saturate(100%)") {
			demoSalad(31);
		} else if (thermometer.style.filter == "saturate(300%)") {
			demoPoultry(31);
		} else if (thermometer.style.filter == "saturate(1000%)") {
			demoBeef(31);
		};
	};
});

function demoSalad(num) {
	step(num, "🌎", "🌱", "🌱", 
		"Plant your vegetables!", 500);
	
	step(num, "😍", "🥕", "🌽", 
		"Harvest time!", 4000);

	step(num, "😊", "🌱", "🌱", 
		"Next round!", 7000);
};

function demoPoultry(num) {
	step(num, "🌎", "🥚", "🌱", 
		"Chicken are being hatched!", 500);
	
	step(num, "🤗", "🐣", "🌱", 
		"Welcome to the world!", 3000);
	
	step(num, "😎", "🐓", "🍃", 
		"Chicken: We are ready!", 6000);
	
	step(num, "😖", "🏭", "💨", 
		"Processing...", 9000);

	step(num, "😞", "🍗", "💨", 
		"Enjoy.", 13000);
};

function demoBeef(num) {
	step(num, "🌎", "🐮", "🌱", 
		"Cute baby cattles!", 500);
	
	step(num, "😁", "🐂", "🌱", 
		"Hooray! Grown-ups!", 3000);
	
	step(num, "😧", "🐂", "💨", 
		"Cattle: Gotta expel this...", 6000);
	
	step(num, "😖", "🏭", "💨", 
		"Cattle: See you later!", 9000);

	step(num, "🤢", "💨", "💨", 
		"That's sick.", 13000);
};

function step(num, emj1, emj2, emj3, line, timer) {
	setTimeout(function() {
		output(num, emj1, emj2, emj3);
		console.log(line);
	}, timer);
};

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