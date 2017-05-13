

window.onload = function() {
	$("#startButton").on("click", triviaGame.startGame);
	$("#doneButton").on("click", triviaGame.doneGame);

};


var questions = [
	"Clint Eastwood gave us the immortal line, 'Go ahead... make my day', in what film?",
	"In the 1951 science fiction movie, The Day The Earth Stood Still, what was the name of the robot?",
	"In the Dirty Harry movies starring Clint Eastwood as Dirty Harry, what was Harry's last name?"
];
var answers = [
	[ 4, "Dirty Harry", "Magnum Force", "Sudden Impact", "Tightrope" ],
	[ 3, "Gort", "Klaatu", "Robby" ],
	[ 4, "Callahan", "Flint", "Harrigan", "Steele" ]
];
var correctAnswer = [ 1, 2, 1 ];

var triviaGame = {

	indexNumber: 0,
	maxTime: 30,

	// generateRandom: function() {
	// 	console.log("Question length: " + questions.length);
	// 	return Math.floor(Math.random() * questions.length);
	// },

	startGame: function() {

		$("#trivia").empty();
		console.log("started");

		var timeRemaining = $("<p>");
		timeRemaining.text("Time Remaining:  0 secs");
		$("#trivia").append(timeRemaining);

		for(var j = 0; j < questions.length; j++) {

			var questionLine = $("<p>");
			questionLine.text(questions[j]);
			$("#trivia").append(questionLine);
			console.log(questions[j]);

			for(var i = 1; i <= answers[j][0]; i++) {
				var answerChoice = $("<input>");
				answerChoice.attr("id", "q" + j + "choice_" + i);
				answerChoice.attr("value", i);
				answerChoice.attr("type","radio");
				answerChoice.attr("text", answers[j][i])
				$("#trivia").append(answerChoice);
				console.log(answers[j][i]);
			}
		}
		var doneButton = $("<button>");
		doneButton.text("Done");
		doneButton.attr("id", "doneButton");
		$("#trivia").append(doneButton);


	},
	doneGame: function() {
		console.log("done");
	}

}


// triviaGame.indexNumber = triviaGame.generateRandom();
// console.log("Random number: " + triviaGame.indexNumber);

// $("#question").html("<p>" + questions[triviaGame.indexNumber] + "</p>");
// console.log("Question: " + questions[triviaGame.indexNumber]);

// console.log("Count: " + answers[triviaGame.indexNumber][0])

// for(var i = 1; i <= answers[triviaGame.indexNumber][0]; i++) {
// 	$("#answers").append('<input type="radio" name="radio_name" />');
// 	console.log(answers[triviaGame.indexNumber][i]);
// }
// $("#answers").append(inputRadio);

