var counter = 0;
var questions = ["One, Who is he who crafted me?", "What is his quest?", "What is his favorite color?", "Bonus: What is the airspeed velocity of an unladen swallow? (in mph)", "Umm, What number am I thinking of? Between 1 and 100"];
var answers = ["sam nortz", "to code", "blue", '24', '77'];
var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var ans4 = document.getElementById('a4');
var ans5 = document.getElementById('a5');


function game(question, answer) {
	var queary = prompt(question).toLowerCase();
	if (answer === question || answer === parseInt(question)){
		counter++;
		alert("Correct!");
	}
	else {
		alert("Wrong!");
	}
}

for (var i = 0; i < questions.length; i++) {
}
alert("Congradulations you got " + counter + " out of 5 correct!")