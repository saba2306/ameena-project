const lessons = {
    html: "HTML is used to structure web pages.",
    css: "CSS is used to style web pages.",
    js: "JavaScript adds interactivity."
};

const quizzes = {
    html: {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language"],
        answer: 0
    },
    css: {
        question: "CSS is used for?",
        options: ["Styling", "Programming"],
        answer: 0
    },
    js: {
        question: "JavaScript is used for?",
        options: ["Interactivity", "Database"],
        answer: 0
    }
};
function loadLesson(topic) {
    document.getElementById("lesson").innerHTML = lessons[topic];
    loadQuiz(topic);
}

function loadQuiz(topic) {
    let q = quizzes[topic];

    let html = `<h3>${q.question}</h3>`;

    q.options.forEach((opt, index) => {
        html += `<button onclick="checkAnswer(${index}, ${q.answer})">${opt}</button><br>`;
    });

    document.getElementById("quiz").innerHTML = html;
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        document.getElementById("score").innerHTML = "Correct!";
    } else {
        document.getElementById("score").innerHTML = "Wrong!";
    }
}
