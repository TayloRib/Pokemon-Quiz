
var menuEl = document.querySelector("#menu");
var easyQuiz = document.querySelector("#easyquiz");
var pikachu = document.querySelector("#pikachu");
var quizImg = document.querySelector("#pokecanvas");
var roundsAndTimer = document.querySelector("#roundstimer")
var restart = document.querySelector("#restart")
var endmessage = document.querySelector("#endmessage")

//Pokemon quiz images
var bulbasaur = document.querySelector("#bulbasaur");
var charmander = document.querySelector("#charmander");
var squirtle = document.querySelector("#squirtle");
var eevee = document.querySelector("#eevee");
var pikachu2 = document.querySelector("#pikachu2");

//Quiz Answers
var bulbaquiz = document.querySelector("#easyquiz1");
var charquiz = document.querySelector("#easyquiz2");
var squirtquiz = document.querySelector("#easyquiz3");
var eeveequiz = document.querySelector("#easyquiz4");
var pikaquiz = document.querySelector("#easyquiz5");


var secondsLeft = 30;
var rounds = 1; 
var isPlaying = false;
var countDownTimer;
var correctAnswer = 0;
var wrongAnswer = 0;

var wins= localStorage.getItem("wins")|| 0;
var losses = localStorage.getItem("losses") || 0;


//Hide Menu and Display Quiz
function hideMenu(){
    if (menuEl.style.display === "none") {
        menuEl.style.display = "block";
    } else menuEl.style.display = "none";
    secondsLeft = 35;
    rounds = 1;
    correctAnswer = 0;
}

//Start Easy Quiz
function showEasy() {
    document.querySelector("#round").textContent= rounds;
    isPlaying = true;
    countDownTimer = setInterval(function(){
        secondsLeft--;
        seconds.textContent=secondsLeft;
        if(secondsLeft <= 0) {
            clearInterval(countDownTimer);
            seconds.textContent = "0";
            losses++;
            localStorage.setItem("losses",losses);
            quizImg.style.display = "none";
            bulbaquiz.style.display = "none";
            charquiz.style.display = "none";
            squirtquiz.style.display = "none";
            eeveequiz.style.display = "none";
            pikaquiz.style.display = "none";
            restart.style.display = "block";
            endmessage.textContent = "You ran out of Time!";
        } else if (correctAnswer >= 5){
            clearInterval(countDownTimer);
            restart.style.display = "block";
            endmessage.textContent = "You Won!";
        } else if (rounds >= 6) {
            if (wrongAnswer >= 1) {
            clearInterval(countDownTimer);
            restart.style.display = "block";
            endmessage.textContent = "You got " + wrongAnswer + " Pokémon wrong, you lose!";
            }
        } else if ((rounds <= 6) && (correctAnswer <= 6)){
            seconds.textContent = secondsLeft;
            restart.style.display = "none";
        }
        
    }, 1000);
}

function showBulbaQuiz() {
    if (bulbaquiz.style.display === "none") {
        bulbaquiz.style.display = "block";
    } else bulbaquiz.style.display = "none";

    bulbaquiz.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches(".answer2") || element.matches(".textb")) {
            rounds++;
            document.querySelector("#round").textContent= rounds;
            correctAnswer++;
            document.querySelector("#correct").textContent= correctAnswer;
            showBulbaQuiz();
            showCharQuiz();
            showBulba();
            showChar();
        } else {
            rounds++;
            document.querySelector("#round").textContent= rounds;
            secondsLeft= secondsLeft - 5;
            wrongAnswer++;
            showBulbaQuiz();
            showCharQuiz();
            showBulba();
            showChar();
        }
        });
}

function showCharQuiz() {
    if (charquiz.style.display === "none") {
        charquiz.style.display = "block";
    } else charquiz.style.display = "none";

    charquiz.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches(".answer4") || element.matches(".textd")) {
            rounds++;
            document.querySelector("#round").textContent= rounds;
            correctAnswer++;
            document.querySelector("#correct").textContent= correctAnswer;
            showSquirtQuiz();
            showCharQuiz();
            showChar();
            showSquirt();
        } else {
            rounds++;
            document.querySelector("#round").textContent= rounds;
            secondsLeft= secondsLeft - 5;
            wrongAnswer++;
            showSquirtQuiz();
            showCharQuiz();
            showChar();
            showSquirt();
        }
        });
}

function showSquirtQuiz() {
    if (squirtquiz.style.display === "none") {
        squirtquiz.style.display = "block";
    } else squirtquiz.style.display = "none";

    squirtquiz.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches(".answer1") || element.matches(".texta")) {
            rounds++;
            document.querySelector("#round").textContent= rounds;
            correctAnswer++;
            document.querySelector("#correct").textContent= correctAnswer;
            showEeveeQuiz();
            showSquirtQuiz();
            showEevee();
            showSquirt();
        } else {
            rounds++;
            document.querySelector("#round").textContent= rounds;
            secondsLeft= secondsLeft - 5;
            wrongAnswer++;
            showEeveeQuiz();
            showSquirtQuiz();
            showEevee();
            showSquirt();
        }
        });
}

function showEeveeQuiz() {
    if (eeveequiz.style.display === "none") {
        eeveequiz.style.display = "block";
    } else eeveequiz.style.display = "none";

    eeveequiz.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches(".answer3") || element.matches(".textc")) {
            rounds++;
            document.querySelector("#round").textContent= rounds;
            correctAnswer++;
            document.querySelector("#correct").textContent= correctAnswer;
            showEeveeQuiz();
            showPikaQuiz()
            showEevee();
            showPika();
        } else {
            rounds++;
            document.querySelector("#round").textContent= rounds;
            secondsLeft= secondsLeft - 5;
            wrongAnswer++;
            showEeveeQuiz();
            showPikaQuiz()
            showEevee();
            showPika();
        }
        });
}

function showPikaQuiz() {
    if (pikaquiz.style.display === "none") {
        pikaquiz.style.display = "block";
    } else pikaquiz.style.display = "none";

    pikaquiz.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches(".answer2") || element.matches(".textb")) {
            rounds++;
            document.querySelector("#round").textContent= rounds;
            correctAnswer++;
            document.querySelector("#correct").textContent= correctAnswer;
            showPikaQuiz();
            showPika();
        } else {
            rounds++;
            document.querySelector("#round").textContent= rounds;
            secondsLeft= secondsLeft - 5;
            wrongAnswer++;
            showPikaQuiz();
            showPika();
        }
        });
}

//Show/hide Charmander sprite
function showChar() {
    if (charmander.style.display === "none") {
        charmander.style.display = "block";
    } else charmander.style.display = "none";
    }

//Show/Hide Bulbasaur sprite
function showBulba() {
    if (bulbasaur.style.display === "none") {
        bulbasaur.style.display = "block";
    } else bulbasaur.style.display = "none";
    }

//Show/Hide Squirtle sprite
function showSquirt() {
    if (squirtle.style.display === "none") {
        squirtle.style.display = "block";
    } else squirtle.style.display = "none";
    }

//Show/Hide Eevee Sprite
function showEevee() {
    if (eevee.style.display === "none") {
        eevee.style.display = "block";
    } else eevee.style.display = "none";
    }

//Show/Hide Pikachu Sprite
function showPika() {
    if (pikachu2.style.display === "none") {
        pikachu2.style.display = "block";
    } else pikachu2.style.display = "none";
    }

function hidePikachu() {
    if (pikachu.style.display === "none") {
        pikachu.style.display = "block";
    } else pikachu.style.display = "none";
}

function showEasyCanvas() {
    if (quizImg.style.display === "none") {
        quizImg.style.display = "block";
    } else quizImg.style.display = "none";
}

function showRoundsTimer() {
    if (roundsAndTimer.style.display === "none") {
        roundsAndTimer.style.display = "block";
    } else roundsAndTimer.style.display = "none";
}


// define all questions and answers

// define variable for tracking
//      track time
//      track questions

// create variables to reference DOM elements
//      timer
//      questions
//      answers
//      start button
//      name/initials
//      save button
//      high scores container

// function
//      start quiz
//          hide start button
//          show the quiz container
//          display first question
//          start timer
//          display countdown on screen

// function
//      rendering a question
//          clear/remove previous question
//          getting first question
//          add question to the question container
//          make button for each answer
//          add answers to the answers container

// function
//      handle quiz completion
//          stop timer
//          hide quiz container
//          show end screen
//          show time remaining as score

// function
//      handle answer clicks
//
//      if
//      answer is WRONG
//          subtract time from timer
//          make sure time is displayed correctly on page
//          flash wrong answer message (setTimeout)
//
//      update question variable to next question
//      display question on page
//
//      if
//      question is the last question
//      trigger quiz completion

// function
//      tracking time
//          subtract time
//          update the page
//
//      if
//      timer hits zero
//          trigger quiz completion

// function
//      saving high scores
//          get value of user input (name/initals)
//          validate input
//          retreive existing data from local storage
//          update the high score data
//          save updated data back to local storage
//          redirect to start screen after save

// function
//      listening for key press
//          check if the key pressed was 'Enter' for saving scores
//          OPTIONAL check if the key pressed was 'a', 'b', 'c' for answers

// event listeners
//      click start
//      click answers
//      click save score
//      keyups