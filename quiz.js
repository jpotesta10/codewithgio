let score = 0;
const totalQuestions = 1; // Update this with the total number of questions

document.querySelectorAll('.answer').forEach(button => {
    button.addEventListener('click', function() {
        const correct = this.dataset.correct === "true";
        if (correct) score++;
        this.style.backgroundColor = correct ? "green" : "red";
        this.disabled = true;
    });
});

document.getElementById('submitQuiz').addEventListener('click', () => {
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').textContent = `Your score is ${score} out of ${totalQuestions}.`;
});
