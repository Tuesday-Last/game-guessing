var numCorrect = 0;

var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var bonus = document.getElementById('bonus');
var correctCount = document.getElementById('elCorrect');

var img1 = document.getElementById('im1');
var img2 = document.getElementById('im2');
var img3 = document.getElementById('im3');
var img4 = document.getElementById('im4');


var questions = ["One, Who is he who crafted me?", "What is his quest?", "What is his favorite color?", "Bonus: What is the airspeed velocity of an unladen swallow? (in mph)"];
var answers = ["sam", "to code", "blue", 24];
var els = [ans1, ans2, ans3, bonus];

var imgs = [img1, img2, img3, img4];

function game(questions, answers, index, images) {
	var ques = prompt(questions).toLowerCase();

	if (ques === answers || ques === parseInt(answers)) {
		console.log(ques + ' correct')
		els[index].textContent = ques + ' is correct';
		imgs[images].innerHTML = '<img src = "images/rightanswer.jpg" width="150" height="100">';
		numCorrect++
	}
	 	else {
	 		console.log(ques + ' incorrect')
			els[index].textContent = ques + ' is incorrect';
			imgs[images].innerHTML = '<img src = "images/wrong-answer.png" width="150" height="100">';
	 	}
}

for (var i = 0; i < questions.length; i++) {
 game(questions[i], answers[i], i, i);
}

elCorrect.textContent = "You got " + numCorrect + " out of 3 questions and the bonus question!"
