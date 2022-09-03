const wantedScore = 698;
const correctButton = document.getElementById("button_correct");
const wrongButton = document.getElementById("button_wrong");
var currentScore;
var taskX;
var taskY;
var operation;
var result;

function compareOp(){
	currentScore = parseInt(document.getElementById("score_value").innerText);
	taskX = parseInt(document.getElementById("task_x").innerText);
	taskY = parseInt(document.getElementById("task_y").innerText);
	operation = document.getElementById("task_op").innerText;
	result = parseInt(document.getElementById("task_res").innerText);

	if (operation == "×"){
		if (taskX * taskY == result){ correctButton.click(); }
		else { wrongButton.click(); }
	}
	else if (operation == "–"){
		if (taskX - taskY == result){ correctButton.click(); }
		else { wrongButton.click(); }
	}
	else if (operation == "/"){
		if (taskX / taskY == result){ correctButton.click(); }
		else { wrongButton.click(); }
	}
	else {
		if (taskX + taskY == result){ correctButton.click(); }
		else { wrongButton.click(); }
	}
}

while (currentScore != wantedScore){ setInterval(compareOp(), 2000); }