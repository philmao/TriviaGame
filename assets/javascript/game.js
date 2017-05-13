
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
	
	var triviaGame = {

		indexNumber: 0,

		generateRandom: function() {
			console.log("Question length: " + questions.length);
			return Math.floor(Math.random() * questions.length);
		}



	}

	triviaGame.indexNumber = triviaGame.generateRandom();
	console.log("Random number: " + triviaGame.indexNumber);

	$("#question").html("<p>" + questions[triviaGame.indexNumber] + "</p>");
	console.log("Question: " + questions[triviaGame.indexNumber]);

	console.log("Count: " + answers[triviaGame.indexNumber][0])

	for(var i = 1; i <= answers[triviaGame.indexNumber][0]; i++) {
		$("#answers").append('<input type="radio" name="radio_name" />');
		console.log(answers[triviaGame.indexNumber][i]);
	}
	// $("#answers").append(inputRadio);

