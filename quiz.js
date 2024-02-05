<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fun AI Quiz</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .question-container {
            margin-bottom: 20px;
        }
        .question {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Fun AI Quiz</h1>
    <div id="quizContainer">
        <div class="question-container">
            <div class="question">What does AI stand for?</div>
            <button class="answer" data-correct="true">Artificial Intelligence</button>
            <button class="answer">Automated Instructions</button>
            <button class="answer">Advanced Interface</button>
        </div>
        <!-- Add more questions here -->
    </div>
    <button id="submitQuiz">Submit Quiz</button>
    <div id="result" style="display:none;"></div>

    <script src="quiz.js"></script>
</body>
</html>
