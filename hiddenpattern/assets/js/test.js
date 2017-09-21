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


function output(num) {
	var output = "";

	for (var row = 0; row < num; row ++) {
		if (row == (num - 1) / 2) {
			for (var col = 0; col < num; col ++) {
				if (((num - 1) / 2) % 2) {
					if (col == (num - 1) / 2) {
						output = output + "🌏";
					} else if (col % 2) {
						output = output + "🐂";
					} else {
						output = output + "💨";
					};
				} else {
					if (col == (num - 1) / 2) {
						output = output + " 🌏";
					} else if (col % 2) {
						output = output + "💨";
					} else {
						output = output + "🐂";
					};
				};
			};
		} else if (row % 2) {
			for (var col = 0; col < num; col ++) {
				if (col % 2) {
					output = output + "🐂";
				} else {
					output = output + "💨";
				};
			};
		} else {
			for (var col = 0; col < num; col ++) {
				if (col % 2) {
					output = output + "💨";
				} else {
					output = output + "🐂";
				};
			};
		};
	};
	
	console.log(output);
}

output(3);