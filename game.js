//Correct counter
var numCorrect = 0;
//HTML Elements
var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var bonus = document.getElementById('bonus');
var els = [ans1, ans2, ans3, bonus];

var img1 = document.getElementById('im1');
var img2 = document.getElementById('im2');
var img3 = document.getElementById('im3');
var img4 = document.getElementById('im4');
var imgs = [img1, img2, img3, img4];

var correctCount = document.getElementById('elCorrect');
//Questions and answers
var questions = ["One, Who is he who crafted me?", "What is his quest?", "What is his favorite color?", "Bonus: What is the airspeed velocity of an unladen swallow? (in mph)"];
var answers = ["sam", "to code", "blue", 24];
//Game
function game(questions, answers, index) {
	var ques = prompt(questions).toLowerCase();

	if (ques === answers || ques === parseInt(answers)) {
		console.log(ques + ' correct');
		els[index].textContent = ques + ' is correct';
		imgs[index].innerHTML = '<img src = "images/rightanswer.jpg" width="150" height="100">';
		numCorrect++;
	} else {
	 	console.log(ques + ' incorrect');
		els[index].textContent = ques + ' is incorrect';
		imgs[index].innerHTML = '<img src = "images/wrong-answer.png" width="150" height="100">';
	 	}
}
//Calling the game function
for (var i = 0; i < questions.length; i++) {
 game(questions[i], answers[i], i);
}
// Posts the number or correct responses 
elCorrect.textContent = "You got " + numCorrect + " out of 3 questions and the bonus question!"
