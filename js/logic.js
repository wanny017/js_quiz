// Start the quiz with a timer set to 75. Timer left also will be the final score.
var timenow = 75;
var timing;
var timerEl = document.getElementById("timer");
//section id var
var startButton = document.getElementById("start-btn");
var viewHighScores = document.getElementById("highscores");
var startsecEl = document.getElementById("start-sec");
var q1secEl = document.getElementById("question1-sec");
var q2secEl = document.getElementById("question2-sec");
var q3secEl = document.getElementById("question3-sec");
var q4secEl = document.getElementById("question4-sec");
var q5secEl = document.getElementById("question5-sec");
//score section var
var viewHighScores = document.getElementById("highscores-link");
var submitButton = document.getElementById("submit-btn");
var clearScoreButton = document.getElementById("clear-btn");
var initialsField = document.getElementById("player-name");
var restartButton = document.getElementById("restart-btn");
var scoreField = document.getElementById("player-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];
// Start button 
startButton.addEventListener("click", startquiz);

// Start Quiz
function startquiz() {
    timing = setInterval(timer, 1000);
    //hide the start-container section
    startsecEl.classList.add("hide");
    q1secEl.classList.remove("hide");
    // Timer will start as soon as start button is clicked
    timer();
   };
// timer and if time=0 save the score
function timer() {
 timenow--;
 timerEl.textContent = "Time Left: " + timenow +'s';
 if (timenow <= 0) {
 saving();
 }
}
// Save scores
function saving() {
    clearInterval(timing);
    timerEl.textContent = "Time: " + timenow;
    //after timer goes to 0, we have the final score after 1s
    setTimeout(function () {
        q1secEl.classList.add("hide");
        q2secEl.classList.add("hide");
        q3secEl.classList.add("hide");
        q4secEl.classList.add("hide");
        q5secEl.classList.add("hide");
        document.getElementById("score-sec").classList.remove("hide");
        document.getElementById("your-score").textContent = "Your final score is " + timenow;
    }, 2000)
};
//Q1 A B C D
document.getElementById("1a").addEventListener("click", q1a);
document.getElementById("1b").addEventListener("click", q1b);
document.getElementById("1c").addEventListener("click", q1c);
document.getElementById("1d").addEventListener("click", q1d);
function q1a(){
    document.getElementById("check-answer1").classList.remove("hide")
    document.getElementById("check-answer1").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow = 0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        //after 1s move to next question
    setTimeout(function () {
        q1secEl.classList.add("hide");
        q2secEl.classList.remove("hide");
    }, 1000)}

}
function q1b(){
    document.getElementById("check-answer1").classList.remove("hide")
    document.getElementById("check-answer1").innerHTML = "Correct";
    setTimeout(function () {
        q1secEl.classList.add("hide");
        q2secEl.classList.remove("hide");
    }, 1000)
}
function q1c(){
    document.getElementById("check-answer1").classList.remove("hide")
    document.getElementById("check-answer1").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow = 0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
    setTimeout(function () {
        q1secEl.classList.add("hide");
        q2secEl.classList.remove("hide");
    }, 1000)}
}
function q1d(){
    document.getElementById("check-answer1").classList.remove("hide")
    document.getElementById("check-answer1").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow =0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        setTimeout(function () {
        q1secEl.classList.add("hide");
        q2secEl.classList.remove("hide");
    }, 1000)}
}
//Q2 A B C D
document.getElementById("2a").addEventListener("click", q2a);
document.getElementById("2b").addEventListener("click", q2b);
document.getElementById("2c").addEventListener("click", q2c);
document.getElementById("2d").addEventListener("click", q2d);
function q2a(){
    document.getElementById("check-answer2").classList.remove("hide")
    document.getElementById("check-answer2").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow = 0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
    setTimeout(function () {
        q2secEl.classList.add("hide");
        q3secEl.classList.remove("hide");
    }, 1000)}
}
function q2b(){
    document.getElementById("check-answer2").classList.remove("hide")
    document.getElementById("check-answer2").innerHTML = "Correct";
    setTimeout(function () {
        q2secEl.classList.add("hide");
        q3secEl.classList.remove("hide");
    }, 1000)
}
function q2c(){
    document.getElementById("check-answer2").classList.remove("hide")
    document.getElementById("check-answer2").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow = 0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        setTimeout(function () {
        q2secEl.classList.add("hide");
        q3secEl.classList.remove("hide");
    }, 1000)}
}
function q2d(){
    document.getElementById("check-answer2").classList.remove("hide")
    document.getElementById("check-answer2").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow =0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
    setTimeout(function () {
        q2secEl.classList.add("hide");
        q3secEl.classList.remove("hide");
    }, 1000)}
}
//Q3 A B C D
document.getElementById("3a").addEventListener("click", q3a);
document.getElementById("3b").addEventListener("click", q3b);
document.getElementById("3c").addEventListener("click", q3c);
document.getElementById("3d").addEventListener("click", q3d);
function q3a(){
    document.getElementById("check-answer3").classList.remove("hide")
    document.getElementById("check-answer3").innerHTML = "Correct";
    //after 1s move to next question
    setTimeout(function () {
        q3secEl.classList.add("hide");
        q4secEl.classList.remove("hide");
    }, 1000)
}
function q3b(){
    document.getElementById("check-answer3").classList.remove("hide")
    document.getElementById("check-answer3").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow = 0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        setTimeout(function () {
        q3secEl.classList.add("hide");
        q4secEl.classList.remove("hide");
    }, 1000)}
}
function q3c(){
    document.getElementById("check-answer3").classList.remove("hide")
    document.getElementById("check-answer3").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow = 0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        setTimeout(function () {
        q3secEl.classList.add("hide");
        q4secEl.classList.remove("hide");
    }, 1000)}
}
function q3d(){
    document.getElementById("check-answer3").classList.remove("hide")
    document.getElementById("check-answer3").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow =0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        setTimeout(function () {
        q3secEl.classList.add("hide");
        q4secEl.classList.remove("hide");
    }, 1000)}
}
//Q4 A B C D
document.getElementById("4a").addEventListener("click", q4a);
document.getElementById("4b").addEventListener("click", q4b);
document.getElementById("4c").addEventListener("click", q4c);
document.getElementById("4d").addEventListener("click", q4d);
function q4a(){
    document.getElementById("check-answer4").classList.remove("hide")
    document.getElementById("check-answer4").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow = 0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        setTimeout(function () {
        q4secEl.classList.add("hide");
        q5secEl.classList.remove("hide");
    }, 1000)}
}
function q4b(){
    document.getElementById("check-answer4").classList.remove("hide")
    document.getElementById("check-answer4").innerHTML = "Correct";
    setTimeout(function () {
        q4secEl.classList.add("hide");
        q5secEl.classList.remove("hide");
    }, 1000)
}
function q4c(){
    document.getElementById("check-answer4").classList.remove("hide")
    document.getElementById("check-answer4").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow = 0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        setTimeout(function () {
        q4secEl.classList.add("hide");
        q5secEl.classList.remove("hide");
    }, 1000)}
}
function q4d(){
    document.getElementById("check-answer4").classList.remove("hide")
    document.getElementById("check-answer4").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow =0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        setTimeout(function () {
        q4secEl.classList.add("hide");
        q5secEl.classList.remove("hide");
    }, 1000)}
}
//Q5 A B C D
document.getElementById("5a").addEventListener("click", q5a);
document.getElementById("5b").addEventListener("click", q5b);
document.getElementById("5c").addEventListener("click", q5c);
document.getElementById("5d").addEventListener("click", q5d);
function q5a(){
    document.getElementById("check-answer5").classList.remove("hide")
    document.getElementById("check-answer5").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow = 0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        saving();
        setTimeout(function () {
        q5secEl.classList.add("hide");
        saving();
    }, 1000)}
}
function q5b(){
    document.getElementById("check-answer5").classList.remove("hide")
    document.getElementById("check-answer5").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow = 0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        setTimeout(function () {
        q5secEl.classList.add("hide");
        saving();
    }, 1000)}
}
function q5c(){
    document.getElementById("check-answer5").classList.remove("hide")
    document.getElementById("check-answer5").innerHTML = "Correct";
    setTimeout(function () {
        q5secEl.classList.add("hide");
        saving();
    }, 1000)
}
function q5d(){
    document.getElementById("check-answer5").classList.remove("hide")
    document.getElementById("check-answer5").innerHTML = "Wrong";
    if (timenow <= 10) {
        timenow =0;
        saving();
    } else {
        // If the aswer is wrong, deduct time by 10
        timenow -= 10;
        setTimeout(function () {
        q5secEl.classList.add("hide");
        saving();
    }, 1000)}
}
var loadScores = function () {
    // Get score from local storage

    if (!savedScores) {
        return false;
    }

    // Convert scores from stringfield format into array
    savedScores = JSON.parse(savedScores);
    var initials = document.querySelector("#initials-field").value;
    var newScore = {
        score: timenow,
        initials: initials
    }
    savedScores.push(newScore);
    console.log(savedScores)

    savedScores.forEach(score => {
        initialsField.innerText = score.initials
        scoreField.innerText = score.score
    })
};
// Show high scores
function showHighScores(initials) {
    document.getElementById("highscores").classList.remove("hide")
    document.getElementById("score-sec").classList.add("hide");
    startsecEl.classList.add("hide");
    q1secEl.classList.add("hide");
    q2secEl.classList.add("hide");
    q3secEl.classList.add("hide");
    q4secEl.classList.add("hide");
    q5secEl.classList.add("hide");
    if (typeof initials == "string") {
        var score = {
            initials, timenow
        }
        scores.push(score)
    }
    var highScoreEl = document.getElementById("highscore");
    highScoreEl.innerHTML = "";
    //console.log(scores)
    for (i = 0; i < scores.length; i++) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", "name-div");
        div1.innerText = scores[i].initials;
        var div2 = document.createElement("div");
        div2.setAttribute("class", "score-div");
        div2.innerText = scores[i].timenow;

        highScoreEl.appendChild(div1);
        highScoreEl.appendChild(div2);
    }
    localStorage.setItem("scores", JSON.stringify(scores));
};
// View high scores link
viewHighScores.addEventListener("click", showHighScores);

submitButton.addEventListener("click", function (event) {
    event.preventDefault()
    var initials = document.querySelector("#initials-field").value;
    showHighScores(initials);
});
// Restart or reload the page
restartButton.addEventListener("click", function () {
    window.location.reload();
});

// Clear localStorage items 
clearScoreButton.addEventListener("click", function () {
    localStorage.clear();
    document.getElementById("highscore").innerHTML = "";
});