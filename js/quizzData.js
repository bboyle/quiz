var quizzQuestions = [
	{
		QuestionType: 0,
		Question:"What is Question 1?",
		Answers: ["1", "2", "3", "4" ],
		AnswerCount:4,
		CorrectAnswer:1,
		UserAnswered:0
	},
	{
		QuestionType: 0,
		Question:"What is Question 2?",
		Answers: ["1", "2", "3", "4" ],
		AnswerCount:4,
		CorrectAnswer:2,
		UserAnswered:0
	},
	{
		QuestionType: 0,
		Question:"What is Question 3?",
		Answers: ["1", "2", "3", "4" ],
		AnswerCount:4,
		CorrectAnswer:3,
		UserAnswered:0
	},
	{
		QuestionType: 0,
		Question:"What is Question 4?",
		Answers: ["1", "2", "3", "4" ],
		AnswerCount:4,
		CorrectAnswer:3,
		UserAnswered:0
	},
	{
		QuestionType: 0,
		Question:"What is Question 5?",
		Answers: ["1", "2", "3", "4" ],
		AnswerCount:4,
		CorrectAnswer:1,
		UserAnswered:0
	}
];

function getQuizz()
{
	var quizzData = {
		QuestionCount: quizzQuestions.length,
		Questions: quizzQuestions
	};

	return quizzData;
};

function markAnswers(questionData) {
	var score = 0;

	for (q = 0; q < questionData.QuestionCount; q++) {

		var questionSet = questionData.Questions[q];

		console.log( questionSet.UserAnswered );
		console.log( questionSet.CorrectAnswer );

		if (questionSet.UserAnswered == questionSet.CorrectAnswer)
		{
			score++;
		}
	}

	return 'Score: ' + score + '/' + questionData.QuestionCount;
}


