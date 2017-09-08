var dueday = document.getElementById("dueday");
var	projectName = document.getElementById("name");
var	projectBoard = document.getElementById("board");

dueday.addEventListener("mouseover", function(e) {
	if (e.target.parentNode.parentNode == dueday) {
		for (var i = 0; i < 4; i ++) {
			if (e.target.parentNode == dueday.children[i]) {
				projectBoard.children[i].children[0].style.opacity = "0.8";
			};
		};
	};
});

dueday.addEventListener("mouseout", function(e) {
	if (e.target.parentNode.parentNode == dueday) {
		for (var i = 0; i < 4; i ++) {
			if (e.target.parentNode == dueday.children[i]) {
				if (!projectBoard.children[i].children[0].classList.contains("active")) {
					projectBoard.children[i].children[0].style.opacity = "0";
				} else {
					projectBoard.children[i].children[0].style.opacity = "0.3";
				};
			};
		};
	};
});

dueday.addEventListener("click", function(e) {
	if (e.target.parentNode.parentNode == dueday) {
		for (var i = 0; i < 4; i ++) {
			if (e.target.parentNode == dueday.children[i]) {
				if (!projectBoard.children[i].children[0].classList.contains("active")) {
					projectName.children[i].children[0].children[0].style.opacity = "1";
					dueday.children[i].children[0].classList.add("active");
					projectBoard.children[i].children[0].classList.add("active");
				} else {
					projectName.children[i].children[0].children[0].style.opacity = "0";
					dueday.children[i].children[0].classList.remove("active");
					projectBoard.children[i].children[0].classList.remove("active");
				};
			};
		};
	};
});

projectName.addEventListener("mouseover", function(e) {
	if (e.target.parentNode.parentNode == projectName) {
		for (var i = 0; i < 4; i ++) {
			if (e.target.parentNode == projectName.children[i]) {
				if (projectBoard.children[i].children[0].classList.contains("active")) {
					projectBoard.children[i].children[0].style.backgroundColor = "lemonchiffon";
					projectName.children[i].children[0].children[0].style.color = "darkgrey";
					projectName.children[i].children[0].style.cursor = "pointer";
				};
			};
		};
	};
});

projectName.addEventListener("mouseout", function(e) {
	if (e.target.parentNode.parentNode == projectName) {
		for (var i = 0; i < 4; i ++) {
			if (e.target.parentNode == projectName.children[i]) {
				if (projectBoard.children[i].children[0].classList.contains("active")) {
					projectBoard.children[i].children[0].style.backgroundColor = "lightblue";
					projectName.children[i].children[0].children[0].style.color = "white";
					projectName.children[i].children[0].style.cursor = "default";
				};
			};
		};
	};
});