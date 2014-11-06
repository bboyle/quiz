(function( $ ) {

	var fetchedQuizzData = getQuizz();
	var currentQuestion;


	function displayQuestion(questionNumber)
	{
		// check question number is valid
		if (questionNumber < 1 || questionNumber > fetchedQuizzData.QuestionCount)
		{
			return;
		}

		var currentQuestionData = fetchedQuizzData.Questions[questionNumber - 1];

		var containerDiv = document.createElement('div');

		var textDiv = document.createElement('div');
		var text = document.createTextNode(currentQuestionData.Question); 
		textDiv.appendChild(text);
		containerDiv.appendChild(textDiv);

		for (i = 0; i < currentQuestionData.AnswerCount; i++) {
	    	// create a new button
			$( '<button/>' )
			// set the value
			.val( i + 1 )
			// button label
			.text( currentQuestionData.Answers[ i ])
			// add button to page
			.appendTo( containerDiv );

	    	$( button ).on('click', function(b){
				updateAnswer(b);
			});
		};

		$( "#quizzContent" ).html(containerDiv);
		currentQuestion = questionNumber;
	};


	function getResults(displayContentInDiv) {
		displayContentInDiv.html(markAnswers(fetchedQuizzData));
	};


	function getPrevQuestion()
	{
		if (currentQuestion <= 1 )
		{
			return;
		}
		else
		{
			displayQuestion(currentQuestion - 1);
		}
	};

	function getNextQuestion()
	{
		if (currentQuestion >= fetchedQuizzData.QuestionCount)
		{
			return;
		}
		else
		{
			displayQuestion(currentQuestion + 1);
		}
	};

	function updateAnswer(button)
	{
		var currentQuestionData = fetchedQuizzData.Questions[currentQuestion - 1];

		currentQuestionData.UserAnswered = $(button.target).attr("value");
		console.log( "answer clciked!" );

		progress();
	};

	function progress()
	{
		if (currentQuestion >= fetchedQuizzData.QuestionCount)
		{
			getResults($( "#quizzContent" ));
		}
		else
		{
			displayQuestion(currentQuestion + 1);
		}
	}


	// ready
	$(function() {
		displayQuestion( 1 );

		console.log( "ready!" );
	});

}( jQuery ));
