




function bigger() {
	document.getElementById("f").style.fontSize = "24pt";
}

function fancy() {
	document.getElementById("f").style.backgroundColor = "pink";
	document.getElementById("f").style.font = "italic bold";
	document.getElementById("f").style.fontFamily = "Brush Script MT";
	document.getElementById("f").style.color = "blue";
	document.getElementById("f").style.textDecoration = "underline";
}

function boring() {
	document.getElementById("f").style.backgroundColor = "white";
	document.getElementById("f").style.font = "normal";
	document.getElementById("f").style.fontFamily = "Times New Roman";
	document.getElementById("f").style.color = "black";
	document.getElementById("f").style.textDecoration = "none";
}

function upper() {
	var str = document.getElementById("f").value;
	str = str.toUpperCase();
	var words = str.split(".");
	str = words.join("-MOO.");
	document.getElementById("f").value = str;
}