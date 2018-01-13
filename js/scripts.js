var questionInfo = [{
        "question": "question1",
        "answer": ["answer1", "answer2", "answer3"]
    },
    {
        "question": "question2",
        "answer": ["answer1", "answer2", "answer3", "answer4", "answer5"]
    },
    {
        "": "",
        "": []
    }
]

var questionPanel =
        '<div class="container">' +
        '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
        '<h3 class="question">' +
        '</h3>' +
        '</div>' +
        '<div class="panel-body">' +
        '<p class="answer">' +
        '</p>' +
        '</div>' +
        '</div>' +
        '</div>';

// Syntax is: "questionInfo[0].question" to access question1 and "questionInfo[0].answer[n]" to access answer[n]
//Note to John: I'm aware 'q' isn't a good descripter but I think its pretty straight-forward.
//Thanks to https://stackoverflow.com/questions/1078118/how-do-i-iterate-over-a-json-structure for reference
$(document).ready(appendQuestions)

function appendQuestions() {
    for (var i = 0; i < questionInfo.length; i++) {
        $(document.body).append(questionPanel);
        $(".question:last").append(questionInfo[i].question);
        $(".answer:last").append(questionInfo[i].answer);
    }
}