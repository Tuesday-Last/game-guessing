var numCorrect = 0;

var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var bonus = document.getElementById('bonus');
var correctCount = document.getElementById('elCorrect');

var questions = ["One, Who is he who crafted me?", "What is his quest?", "What is his favorite color?", "Bonus: What is the airspeed velocity of an unladen swallow? (in mph)"];
var answers = ["Yess, correct he is the one that crafted me", "Yess, correct he seeks the coding secretsss", "Yess, correct he does like blue", 24];
var els = [ans1, ans2, ans3, bonus]

function game(questions, answers, index) {
	var userInput = prompt(questions).toLowerCase();

	if (userInput === answers || userInput === parseInt(answers)) {
		console.log(userInput + ' correct')
		els[index].textContent = userInput + ' is correct';
		numCorrect++
	}
	 	else {
	 		console.log(userInput + ' incorrect')
			els[index].textContent = userInput + ' is incorrect';
	 	}
}

for (var i = 0; i < questions.length; i++) {
 game(questions[i], answers[i], i);
}

elCorrect.textContent = "You got " + numCorrect + " out of 3 questions and the bonus question!"
