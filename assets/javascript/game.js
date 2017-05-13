

window.onload = function() {

	$("#startButton").on("click", triviaGame.startGame);
	$("#doneButton").on("click", triviaGame.doneGame);
	$("#doneButton").hide();

};


var questions = [{
	question: "Clint Eastwood gave us the immortal line, 'Go ahead... make my day', in what film?",
	choices: [ "Dirty Harry", "Magnum Force", "Sudden Impact", "Tightrope" ],
	correctAnswer: 1,
}, {
	question: "In the 1951 science fiction movie, The Day The Earth Stood Still, what was the name of the robot?",
	choices: [ "Gort", "Klaatu", "Robby" ],
	correctAnswer: 2,
}, {
	question: "In the Dirty Harry movies starring Clint Eastwood as Dirty Harry, what was Harry's last name?",
	choices: [ "Callahan", "Flint", "Harrigan", "Steele" ],
	correctAnswer: 1,
}];

var intervalId;

var triviaGame = {

	indexNumber: 0,
	maxTime: 30,
	correctCount: 0,
	incorrectCount: 0,
	unansweredCount: 0,
	timer: 0,

	startGame: function() {

		$("#trivia").empty();
		console.log("started");

		timer = triviaGame.maxTime;
		intervalId = setInterval(triviaGame.decrement, 1000);

		$("#timer").text("Time Remaining: " + triviaGame.maxTime + " secs");

		for(var j = 0; j < questions.length; j++) {

			var questionLine = $("<p>");
			questionLine.text(questions[j].question);
			$("#trivia").append(questionLine);
			console.log(questions[j].question);

			for(var i = 0; i < questions[j].choices.length; i++) {
				var answerChoice = $("<input>");
				answerChoice.attr("value", i + 1);  // value '0' is unanswered
				answerChoice.attr("type","radio");
				answerChoice.attr("name","question" + j);
				answerChoice.attr("class", "radioButtons");
				$("#trivia").append(answerChoice);
				$("#trivia").append("<b>" + questions[j].choices[i] + "</b><br>");
				console.log(questions[j].choices[i]);
			}
		}
		$("#doneButton").show();

	},
	doneGame: function() {
		$("#doneButton").hide();

		clearInterval(intervalId);
		$("#timer").text("");

		$("#trivia").empty();
		console.log("done");

		var temp = $("input[name=question0]:checked").val();
		console.log(temp);
		console.log(questions[0].correctAnswer);
		if(temp === 0) {
			triviaGame.unansweredCount++;
		}
		else if (temp === questions[0].correctAnswer) {
			triviaGame.correctCount++;
		}
		else {
			triviaGame.incorrectCount++;
		}

		$("#trivia").append("<h2>All Done!</h2>");
		$("#trivia").append("<h2>Correct Answers: " + triviaGame.correctCount + "</h2>");
		$("#trivia").append("<h2>Incorrect Answers: " + triviaGame.incorrectCount + "</h2>");
		$("#trivia").append("<h2>Unanswered: " + triviaGame.unansweredCount + "</h2>");


	},
    decrement: function() {

		timer -= 1;

		$("#timer").text("Time Remaining:  " + timer + " secs");

		if (timer === 0) {
	      clearInterval(intervalId);
	      triviaGame.doneGame();
	    }
	}
}




