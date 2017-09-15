var emoji = {
	grass: "background-image: url(\"https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/seedling.png\"); background-size: cover",
	cow: "background-image: url(\"http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/cow-face.png\"); background-size: cover",
	celebration: "background-image: url(\"https://www.emojibase.com/resources/img/emojis/apple/x1f389.png.pagespeed.ic.FkjckyE3hU.png\"); background-size: cover",
	cattle: "background-image: url(\"https://www.magic-emoji.com/emoji/images/505_emoji_iphone_ox.png\"); background-size: cover",
	gas: "background-image: url(\"https://thoughtcatalog.files.wordpress.com/2014/04/gus.jpg?w=584&h=554\"); background-size: cover",
	earth: "background-image: url(\"http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/globe-showing-americas.png\"); background-size: cover",
	hamburger: "background-image: url(\"https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/hamburger_1f354.png\"); background-size: cover",
	smiley: "background-image: url(\"https://pbs.twimg.com/profile_images/541920956449435651/iHq9_qcq.png\"); background-size: cover",
	hot: "background-image: url(\"https://camo.githubusercontent.com/098f44e74a6c91c3769a4869ad0b3543eb3ee7c1/68747470733a2f2f7777772e656d6f6a69726571756573742e636f6d2f696d616765732f4f766572686561746564456d6f6a692e6a7067\"); background-size: cover"
};
var button = document.getElementById("button");
	slogan = document.getElementById("slogan");

button.addEventListener("click", function() {
	if (slogan.innerText == "Want Some Burgers?") {
		demo(3);
		setTimeout(function() {
			slogan.innerText = "Want More?"
		}, 20000);
	} else {
		demo(5);
	}
});

function output(num, cattle, gas, earth) {
	var layout = "";

	for (var row = 0; row < num; row ++) {
		for (var col = 0; col < num; col ++) {
			layout = layout + "%c  ";
		}
		layout = layout + "\n";
	};

	var output = "";

	for (var row = 0; row < num; row ++) {
		if (row == (num - 1) / 2) {
			for (var col = 0; col < num; col ++) {
				if (((num - 1) / 2) % 2) {
					if (col == (num - 1) / 2) {
						output = output + earth + ", ";
					} else if (col % 2) {
						output = output + cattle + ", ";
					} else {
						output = output + gas + ", ";
					};
				} else {
					if (col == (num - 1) / 2) {
						output = output + earth + ", ";
					} else if (col % 2) {
						output = output + gas + ", ";
					} else {
						output = output + cattle + ", ";
					};
				};
			};
		} else if (row % 2) {
			for (var col = 0; col < num; col ++) {
				if (col % 2) {
					output = output + cattle + ", ";
				} else {
					output = output + gas + ", ";
				};
			};
		} else {
			for (var col = 0; col < num; col ++) {
				if (col % 2) {
					output = output + gas + ", ";
				} else {
					output = output + cattle + ", ";
				};
			};
		};
	};
	var array = output.slice(0, -2).split(", ");
	if (num == 3) {
		console.log(layout, array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7],array[8]);
	} else if (num == 5) {
		console.log(layout, array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7],array[8],array[9],array[10],array[11],array[12],array[13],array[14],array[15],array[16],array[17],array[18],array[19],array[20],array[21],array[22],array[23],array[24]);
	};
}

function demo(num) {
	setTimeout(function() {
		output(num, emoji.grass, emoji.grass, emoji.earth);
		console.log("Hmm.. I think I need some meat..");
	}, 500);
	
	setTimeout(function() {
		output(num, emoji.cow, false, emoji.earth);
		console.log("Hooray!! Baby cattles!");
	}, 3000);
	
	setTimeout(function() {
		output(num, emoji.cattle, false, emoji.earth);
		console.log("Finally, grown-ups!");
	}, 6000);

	setTimeout(function() {
		output(num, emoji.cattle, emoji.gas, emoji.earth);
		console.log("Cattle: I'm so sorry, but I've gotta expel this, otherwise I will just explode..");
	}, 9000);
	
	setTimeout(function() {
		output(num, emoji.hamburger, emoji.gas, emoji.earth);
		console.log("Thank you guys! So yummy! Oh, what about those methane? Hmm.. can we talk about it later?");	
	}, 14000);
	
	setTimeout(function() {
		output(num, false, emoji.gas, emoji.hot);
		console.log("Well, seems to be a bit stuffy here..");
	}, 19000);	
};