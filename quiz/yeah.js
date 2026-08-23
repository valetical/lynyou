let currentQuestion = 0;
let score = 0;
let answered = false;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("results").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    document.getElementById("name").value = "";
    document.getElementById("name").disabled = false;
    document.getElementById("submitscore").style.display = "inline-block";
    document.getElementById("submitted").innerHTML = "";
    showQuestion();
}

function showQuestion() {
    answered = false;

    const question = questions[currentQuestion];

    document.getElementById("progress").textContent = "question " + (currentQuestion + 1) + " / " + questions.length;
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("answers").innerHTML = "";
    question.answers.forEach(function (answer) {
        const label = document.createElement("label");

        label.className = "answer";

        label.innerHTML = '<input type="radio" name="answer" value="' + answer.replace(/"/g, "&quot;") + '"> ' + answer;

        document.getElementById("answers").appendChild(label);
    });

    document.getElementById("feedback").innerHTML = "";

    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("next").style.display = "none";
}

function checkAnswer() {
    if (answered) return;

    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        document.getElementById("feedback").innerHTML = "um. pick an answer";
        return;
    }

    answered = true;

    const question = questions[currentQuestion];

    if (selected.value === question.correct) {
        score++;

        document.getElementById("feedback").innerHTML = "<b>CORRECT!! </b><br>" + "U actually got it right";
    } else {
        document.getElementById("feedback").innerHTML =
            "<b>WRONG.</b><br>" + question.wrong + "<br><br>the answer was <b>" + question.correct + "</b>";
    }

    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }

    showQuestion();
}

function showResults() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("score").innerHTML = "you got <b>" + score + " / " + questions.length + "</b>";

    let message;
    if (score === 10) {
        message = "HOLY fucking shit ur a genius CONGRATS";
    } else if (score >= 8) {
        message = "U know ur stuff .";
    } else if (score >= 6) {
        message = "okay not bad";
    } else if (score >= 3) {
        message = "study harder and come back";
    } else {
        message = "Why Are you even taking this?";
    }

    document.getElementById("final-message").textContent = message;
}

async function submitScore() {
    const name = document.getElementById("name").value.trim();

    if (!name) {
        document.getElementById("submitted").innerHTML = "Enter ur name first buddy";
        return;
    }

    const button = document.getElementById("submitscore");

    button.disabled = true;
    button.textContent = "SUBMITTING...";

    const data = new URLSearchParams();

    data.append("name", name);
    data.append("score", score + " / " + questions.length);
    data.append("percentage", Math.round((score / questions.length) * 100) + "%");

    try {
        await fetch(
            "https://script.google.com/macros/s/AKfycbyj51M4fxI143vpcZ_y8pAycmEVnclZv4ZCgydpSCox7IW1_P24wF_OJMUjun2phjsu/exec",
            {
                method: "POST",
                mode: "no-cors",
                body: data
            }
        );

        document.getElementById("submitted").innerHTML = "score submitted!";

        document.getElementById("name").disabled = true;
        button.style.display = "none";
    } catch (error) {
        document.getElementById("submitted").innerHTML = "something went wrong";

        button.disabled = false;
        button.textContent = "SUBMIT SCORE";
    }
}