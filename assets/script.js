const quizData = [
    {
        question: "Which Indian city is the capital of two states?",
        a: "Kolkata",
        b: "Chandigarh",
        c: "Chennai",
        d: "Mumbai",
        correct: "b",
    },
    {
        question: "How many countries border India?",
        a: "2",
        b: "14",
        c: "6",
        d: "9",
        correct: "c",
    },
    {
        question: "What is the capital of Gujarat?",
        a: "Mumbai",
        b: "Bhopal",
        c: "Lucknow",
        d: "Gandhinagar",
        correct: "d",
    },
    {
        question: "What, approximately, is the area of India, in square kilometers?",
        a: "4,000,000",
        b: "1,500,000",
        c: "2,000,000",
        d: "3,000,000",
        correct: "d",
    },
    {
        question: "What is India's smallest state by area?",
        a: "Goa",
        b: "Kerala",
        c: "Uttar Pradesh",
        d: "Assam",
        correct: "a",
    },
    {
        question: "Which of these bodies of water does not border India?",
        a: "Indian Ocean",
        b: "Red Sea",
        c: "Arabian Sea",
        d: "Bay of Bengal",
        correct: "b",
    },
    {
        question: "Delhi is located along which river?",
        a: "The Nile",
        b: "The Yamuna",
        c: "The Ganga",
        d: "The Brahmaputra",
        correct: "b",
    },
    {
        question: "When is India's Independence Day?",
        a: "October 31",
        b: "July 14",
        c: "January 26",
        d: "August 15",
        correct: "d",
    },
    {
        question: "What body of water lies to the west of India?",
        a: "Andaman Sea",
        b: "Coral Sea",
        c: "Arabian Sea",
        d: "Celebes Sea",
        correct: "c",
    },
    {
        question: "Where is the state of Bengaluru located?",
        a: "Karnataka",
        b: "Tamil Nadu",
        c: "Mizoram",
        d: "Madhya Pradesh",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

shuffle(quizData);
loadQuiz();

function shuffle(quizData) {
    var ctr = quizData.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = quizData[ctr];
        quizData[ctr] = quizData[index];
        quizData[index] = temp;
    }
    return quizData;
}

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly ${score}/${quizData.length} questions!!</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
