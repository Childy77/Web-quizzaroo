var outerC = document.querySelector(".outer-container");
var innerC = document.querySelector(".inner-container");
var startButton = document.querySelector("#start-button");
var questionsEl = document.querySelector(".questions")
var interval
var secondsLeft = 60
var timerEl = document.querySelector("#timer")
var qTitleEl = document.querySelector("#q-title")
var qCounter = 0
var answer1El = document.querySelector("#answer1")
var answer2El = document.querySelector("#answer2")
var answer3El = document.querySelector("#answer3")
var answer4El = document.querySelector("#answer4")
var questionIndex = 0


const questions = [
    
    {
        question: "What is the DOM?",
        answers: [
            {text: "Direct Over seer", correct: false},
            {text: "Document Object Model", correct: true},
            {text: "Diverse oriental rug", correct: false},
            {text: "Dairy object milk", correct: false},
        ]
    },    
    {
        question: "Which is not an element?",
        answers: [
            {text: "main", correct: false},
            {text: "google", correct: true},
            {text: "header", correct: false},
            {text: "section", correct: false},
        ]
    },    
    {
        question: "What is it called to store multiple values in a single variable?",
        answers: [
            {text: "String", correct: false},
            {text: "Array", correct: true},
            {text: "Variable", correct: false},
            {text: "function", correct: false},
        ]
    },    
    {
        question: "What is and API?",
        answers: [
            {text: "All points in", correct: false},
            {text: "Application Programming Interfaces", correct: true},
            {text: "Any person intersted", correct: false},
            {text: "Array points inward", correct: false},
        ]
    }    
]


function startGame() {
timer()
innerC.classList.add("hide")
questionsEl.classList.remove("hide")
nextQuestion()
}

function nextQuestion() {
qTitleEl.textContent = questions[qCounter].question
answer1El.textContent = questions[qCounter].answers[0].text
answer2El.textContent = questions[qCounter].answers[1].text
answer3El.textContent = questions[qCounter].answers[2].text
answer4El.textContent = questions[qCounter].answers[3].text

answer1El.addEventListener("click", checkQuestion)
answer2El.addEventListener("click", checkQuestion)
answer3El.addEventListener("click", checkQuestion)
answer4El.addEventListener("click", checkQuestion)



}



function timer() {
interval = setInterval(function() {
    if (secondsLeft <= 1){
        clearInterval(interval)
    }
secondsLeft--
timerEl.textContent = "Time: 00:" + secondsLeft
}, 1000)
}
 function checkQuestion(event) {
    // console.log(clickAnswer.target.textContent);
    // var correctAnswer = 
    var userAnswer = event.target.textContent
    var currentQuestion = questions[questionIndex]
    // console.log(currentQuestion.answers, "CurQ.answers")
    var answers = currentQuestion.answers[1].text
    
    if (userAnswer.match(answers)) {
        return
        
        // questionIndex++; return nextQuestion();

    }

    
    

    if (userAnswer.value !== questions[questionIndex].answers[1]) {
        secondsLeft -= 15

    }

    questionIndex++
    

 }


 function gameOver() {
    console.log("Game Over");
 }



startButton.addEventListener("click", startGame);

