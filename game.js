alert("Halt! Before ye enter this page ye must answer me these questions three, no wait four, four questions...no, five?");

var correct = 0

var question1 = prompt("One, Who is he who crafted me?").toLowerCase();

	console.log("Answer to question1 " + question1);

	if (question1 === "sam nortz") {
		console.log("question1 correct");
		alert("Yess, correct he is the one that crafted me");
		correct++;
	} else if (question1 === "sam") {
		console.log("question1 correct, short");
		alert("Correct he is the one that crafted me");
		correct++;
	} else {
		console.log("incorrect name");
		alert("WRONG!");
	};
	console.log("right answers " + correct);

var question2 = prompt("What is his quest?").toLowerCase();

	console.log("Answer to question2 " + question2);

	if (question2 === "to learn how to code") {
		console.log("question 2 correct");
		alert("Yess, correct he seeks the coding secretsss");
		correct++;
	} else if (question2 === "to code") {
		console.log("question 2 correct, short");
		alert("Very Well....acceptable");
		correct++;
	} else {
		console.log("question 2 incorrect");
		alert("WRONG! Why is he taking this class? Think!");
	};
	console.log("right answers " + correct);

var question3 = prompt("What is his favorite color?").toLowerCase();

	console.log("Answer to question 3 " + question3);

	if (question3 === "blue") {
		console.log("question 3 correct");
		alert("Yess, correct he does like blue");
		correct++;
	} else {
		console.log("question 3 incorrect");
		alert("WRONG! THAT IS NOT HIS FAVORITE COLOR!");
	};
	console.log("right answers " + correct);

var bonusQuestion = prompt("Bonus: What is the airspeed velocity of an unladen swallow? (in mph)");
	var airSpeed = parseInt(bonusQuestion);
	console.log("air speed guess " + airSpeed);

	if (airSpeed === 24) {
		console.log("bonus question correct");
		alert("Correct you may proceed");
		correct++;
	} else if (bonusQuestion === "african or european swallow?") {
		console.log("OH NO!")
		alert("I, I don't know tha- AAAHHHHHHH!");
		correct++;
	} else if (airSpeed > 24) {
		console.log("bonusQuestion to high");
		alert("WRONG! AHAHHA HA! to fast");
	}
	else if (airSpeed < 24) {
		console.log("bonusQuestion to low");
		alert("WRONG! AHAHHA HA! to slow!");
	}
	else {
		alert("what was that? WRONG!");
		console.log(bonusQuestion + " not a number");
	};
	console.log("right answers " + correct);

var guesses = 0
var fifthQuestion = prompt("One more question \n Umm... \n I am thinking of a number between 1 and 100, what is it?");
	var guess = parseInt(fifthQuestion)
	if (guess === 77) {
		console.log("fifth question guess is "+ fifthQuestion);
		alert("Correct!");
		correct++;
		guesses++;
	}

while(guesses < 3) {
		if (guess === 77) {
			console.log("fifth question guess is "+ fifthQuestion);
			alert("Correct!");
			break;
	}
		else if (guess > 77) {
			console.log("guess to high");
			fifthQuestion = prompt("To high! Try again.");
			guess = parseInt(fifthQuestion);
			guesses++;
			console.log("guess " + guesses + " is " + guess)
	} 
	else if (guess < 77) {
			console.log("guess to low");
			fifthQuestion = prompt("To low! Try again.");
			guess = parseInt(fifthQuestion);
			guesses++;
			console.log("guess " + guesses + " is " + guess)
	}
	else if (guesses = 4) {
		alert("You have failed for the last time! \n (it was 77)")
	}
}

alert("You have answered " + correct + " of 5. \nYou may proceed");