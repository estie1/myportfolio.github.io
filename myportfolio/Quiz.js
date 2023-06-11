const data = [
{
    question: "Q.1 Who was Isaac's father?",
    a: "David",
    b: "Joshua",
    c: "Abraham",
    d: "Zechariah",
    correct: "c",
},
{
    question: "Q.2 Who did the prophet Isaiah say would be born of a virgin, and be called Immanuel?",
    a: "Jesus",
    b: "Jael",
    c: "Jericho",
    d: "Zerubabel",
    correct: "a",
},
{
    question: "Q.3 How many of the 12 apostles were fishermen by trade?",
    a: "2",
    b: "4",
    c: "6",
    d: "8",
    correct: "b",
},
{
    question: "Q.4 What is the name of the parable in Luke 15 about a lost son?",
    a: "The Parable of the Prodigal Son",
    b: "The Parable of the Lost Sheep",
    c: "The Parable of the Lost Coin",
    d: "The Parable of the Good Samaritan",
    correct: "a",
},
{
    question: "Q.5 Who was the Roman Governor who sentenced Jesus to death?",
    a: "Nero",
    b: "Julius Caesar",
    c: "Pontius Pilate",
    d: "Augustus",
    correct: "c",
},
{
    question: "Q.6 Who was jealous of King David and tried to kill him?",
    a: "Samuel",
    b: "Solomon",
    c: "Absalom",
    d: "Saul",
    correct: "d",
},
{
    question: "Q.7 Who was the queen of Ethiopia and why did she go to Isreal?",
    a: "Queen Vashti, She came to offer her kingdom to Israel",
    b: "Queen Sheba, She came to hear the wisdom of King Solomon",
    c: "Queen Esther, She came to visit the temple in Jerusalem",
    d: "Queen Herodius, She came to challenge King Solomon",
    correct: "b",
},
{
    question: "Q.8 What was the name of the apostle Paul's traveling companion who was also a physician?",
    a: "Peter",
    b: "James",
    c: "Luke",
    d: "Mark",
    correct: "d",
},
{
    question: "Q.9 How many times is the word faith mentioned in the book of Hebrews?",
    a: '5',
    b: '10',
    c: '26',
    d: '30',
    correct: "c",
},
{
    question: "Q.10 What is the name of the prophet who was swallowed by a whale?",
    a: "Jonah",
    b: "Elijah",
    c: "Isaiah",
    d: "Daniel",
    correct: "a",
},
{
    question: "Q11. How many commandments did God give to Moses on Mount Sinai?",
    a: '15',
    b: '10',
    c: '20',
    d: '25',
    correct: "b",
},
{
    question: "Q.12 What is the name of the disciple who betrayed Jesus?",
    a: "James",
    b: "Peter",
    c: "Judas",
    d: "Thomas",
    correct: "c",
},
{
    question: "Q.13 Who wrote the book of Proverbs in the Old Testament?",
    a: "Abraham",
    b: "David",
    c: "Moses",
    d: "Solomon",
    correct: "d",
},
{
    question: "Q.14 Who was the last judge of Israel before the monarchy was established?",
    a: "Samson",
    b: "Eli",
    c: "Samuel",
    d: "Gideon",
    correct: "c",
},
{
    question: "Q.15 What vehicle took Elijah up to heaven in a whirlwind?",
    a: "Wind",
    b: "Angels",
    c: "Yacht",
    d: "Chariot of fire",
    correct: "d",
},

]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
deselectAnswers();

const currentQuizData = data[currentQuiz];
questionEl.innerText = currentQuizData.question;
optionA.innerText = currentQuizData.a;
optionB.innerText = currentQuizData.b;
optionC.innerText = currentQuizData.c;
optionD.innerText = currentQuizData.d;
}

function deselectAnswers() {
answerEls.forEach((answerEl) => {
answerEl.checked = false;
});
}

function getSelected() {
let answer;

answerEls.forEach((answerEl) => {
if (answerEl.checked) {
answer = answerEl.id;
}
});

return answer;
}

submitBtn.addEventListener("click", () => {
const answer = getSelected();

if (answer) {
if (answer === data[currentQuiz].correct) {
score++;
}
currentQuiz++;

if (currentQuiz < data.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
          <h3 style= "text-align: center">You answered ${score}/${data.length} questions correctly</h3>
          <button onclick="location.reload()">Start Again!</button>
      `;
  }
}
});
