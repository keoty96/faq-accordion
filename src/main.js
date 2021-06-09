function showAnswers(question, arrow, answer) {
    switch (question) {
        case "q1":
            changeStyle(question, arrow, answer);
            break;
        case "q2":
            changeStyle(question, arrow, answer);
            break;
        case "q3":
            changeStyle(question, arrow, answer);
            break;
        case "q4":
            changeStyle(question, arrow, answer);
            break;
        case "q5":
            changeStyle(question, arrow, answer);
            break;

        default:
            break;
    }
}

function changeStyle(question, arrow, answer) {

    let element = document.getElementById(question);

    if (element.style.fontWeight !== "700") {
        document.getElementById(question).style.fontWeight = "700";
        document.getElementById(arrow).className = "rotateimg180";
        document.getElementById(answer).style.display = "block"
    } else {
        document.getElementById(question).style.fontWeight = "400";
        document.getElementById(arrow).classList.remove("rotateimg180");
        document.getElementById(answer).style.display = "none"
    }
}