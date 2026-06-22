const startBtn = document.getElementById("startBtn");
const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const nextBtn = document.getElementById("nextBtn");
const resultScreen =
document.getElementById("resultScreen");

const finalScore =
document.getElementById("finalScore");

const restartBtn =
document.getElementById("restartBtn");

const questionNumber =
document.getElementById("questionNumber");

const scoreDisplay =
document.getElementById("scoreDisplay");

const progressBar =
document.getElementById("progressBar");

const resultMessage =
document.getElementById("resultMessage");

const funFact =
document.getElementById("funFact");

const clickSound = document.getElementById("clickSound");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const winSound = document.getElementById("winSound");

function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}
startBtn.addEventListener("click", function() {

    homeScreen.style.display = "none";
    quizScreen.style.display = "block";
    shuffleQuestions();

    loadQuestion();

});

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const questions = [
    {
    question: "Wikipedia was launched in?",
    options: ["1999", "2001", "2005", "2010"],
    answer: "2001",
    fact: "Wikipedia officially launched on 15 January 2001."
},

{
    question: "Who founded Wikipedia?",
    options: ["Jimmy Wales", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
    answer: "Jimmy Wales",
    fact: "Jimmy Wales co-founded Wikipedia in 2001."
},

{
    question: "Wikipedia is owned by?",
    options: ["Google", "Meta", "Wikimedia Foundation", "Microsoft"],
    answer: "Wikimedia Foundation",
    fact: "Wikipedia is managed by the Wikimedia Foundation."
},

{
    question: "Wikipedia is primarily a?",
    options: ["Game", "Online Encyclopedia", "Search Engine", "Social Media"],
    answer: "Online Encyclopedia",
    fact: "Wikipedia is the world's largest online encyclopedia."
},

{
    question: "What does 'Wiki' mean?",
    options: ["Fast", "Knowledge", "Internet", "Article"],
    answer: "Fast",
    fact: "Wiki comes from the Hawaiian word 'wiki', meaning quick."
},

{
    question: "Anyone can edit Wikipedia?",
    options: ["Yes", "No", "Only Admins", "Only Teachers"],
    answer: "Yes",
    fact: "Most Wikipedia pages can be edited by anyone."
},

{
    question: "Wikipedia content is written by?",
    options: ["Volunteers", "Government", "Google", "Schools"],
    answer: "Volunteers",
    fact: "Wikipedia is built by volunteers worldwide."
},

{
    question: "What does the missing puzzle piece in Wikipedia's logo represent?",
    options: [
        "A Secret Code",
        "Knowledge Still Being Added",
        "An Error",
        "A Lost Language"
    ],
    answer: "Knowledge Still Being Added",
    fact: "The incomplete globe symbolizes that knowledge is never finished."
},

{
    question: "What is the hidden message behind Wikipedia's logo?",
    options: [
        "Knowledge Has No End",
        "The Internet Is a Puzzle",
        "Books Are Better",
        "Technology Rules"
    ],
    answer: "Knowledge Has No End",
    fact: "The unfinished globe symbolizes that there is always more to learn."
},

{
    question: "Which logo represents Wikipedia?",
    options: ["Puzzle Globe", "Book", "Shield", "Earth"],
    answer: "Puzzle Globe",
    fact: "Wikipedia's logo is a globe made of puzzle pieces."
},


{
    question: "Wikipedia articles use references?",
    options: ["Yes", "No", "Sometimes", "Rarely"],
    answer: "Yes",
    fact: "Reliable sources are important on Wikipedia."
},

{
    question: "Wikipedia is free to use?",
    options: ["Yes", "No", "Paid", "Subscription Only"],
    answer: "Yes",
    fact: "Wikipedia is free for everyone."
},

{
    question: "Which sister project of Wikipedia contains free images and media?",
    options: [
        "Wikibooks",
        "Wikinews",
        "Wikimedia Commons",
        "Wikisource"
    ],
    answer: "Wikimedia Commons",
    fact: "Wikimedia Commons hosts millions of free images, videos, and audio files."
},

{
    question: "What is the main purpose of Wikipedia?",
    options: [
        "Online Shopping",
        "Gaming",
        "Sharing Knowledge",
        "Social Networking"
    ],
    answer: "Sharing Knowledge",
    fact: "Wikipedia's goal is to provide free knowledge to everyone."
},

{
    question: "Which Wikimedia project provides a free dictionary?",
    options: [
        "Wikibooks",
        "Wiktionary",
        "Wikisource",
        "Wikiquote"
    ],
    answer: "Wiktionary",
    fact: "Wiktionary is Wikimedia's free online dictionary."
}
];

function shuffleQuestions() {

    questions.sort(() => Math.random() - 0.5);

}
let score = 0;
let currentQuestion = 0;
let answered = false;
function loadQuestion() {
    answered = false;

    funFact.textContent = "";

    questionNumber.textContent =
`Question ${currentQuestion + 1} of ${questions.length}`;

    scoreDisplay.textContent =
`Score: ${score}`;
    
    let progress =
(currentQuestion / questions.length) * 100;

progressBar.style.width =
progress + "%";

    questionElement.textContent =
questions[currentQuestion].question;

    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach(option => {

        const button =
        document.createElement("button");

        button.textContent = option;

        button.classList.add("option-btn");
        button.addEventListener("click", function() {
            if(answered){
    return;
}
    answered = true;

    if(option === questions[currentQuestion].answer){

    button.style.backgroundColor = "green";

    correctSound.currentTime = 0;
    correctSound.play();

    score++;

    scoreDisplay.textContent =
`Score: ${score}`;
}
else{

    button.style.backgroundColor = "red";

    wrongSound.currentTime = 0;
    wrongSound.play();

    const buttons =
    document.querySelectorAll(".option-btn");

    buttons.forEach(btn => {

        if(btn.textContent === questions[currentQuestion].answer){
            btn.style.backgroundColor = "green";
        }

    });

}
funFact.textContent =
questions[currentQuestion].fact;

});

        optionsElement.appendChild(button);

    });

}
nextBtn.addEventListener("click", function() {

    if(!answered){
        alert("Please select an answer first!");
        return;
    }

    currentQuestion++;

    if(currentQuestion < questions.length){

    loadQuestion();

}
else{

    showResult();

}

});
function showResult(){

    quizScreen.style.display = "none";

    resultScreen.style.display = "block";
    let percentage =
Math.round((score / questions.length) * 100);

    finalScore.textContent =
`Your Score: ${score}/${questions.length} (${percentage}%)`;

    if(score === questions.length){

    resultMessage.textContent =
    "🏆 Excellent! Perfect Score!"

    document.body.style.background =
    "#fff8dc";

    winSound.currentTime = 0;
    winSound.play();

}
else if(score >= questions.length / 2){

    resultMessage.textContent =
    "🎉 Good Job!"
}
else{

    resultMessage.textContent =
    "📚 Keep Learning Wikipedia!"

}

}
restartBtn.addEventListener("click", function(){

    score = 0;

    currentQuestion = 0;
    
    progressBar.style.width = "100%";

    resultScreen.style.display = "none";

    homeScreen.style.display = "block";

});

startBtn.addEventListener("click", () => {
playClickSound();
});

nextBtn.addEventListener("click", () => {
playClickSound();
});

restartBtn.addEventListener("click", () => {
playClickSound();

```
score = 0;
currentQuestion = 0;
answered = false;

progressBar.style.width = "0%";

resultScreen.style.display = "none";
homeScreen.style.display = "block";
```

});
