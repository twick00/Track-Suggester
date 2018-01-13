var questionInfo = [{
    "question": "question1",
    "answer": ["answer1", "answer2", "answer3", "answer4"],
    "value": 0,
    "name": "Test1"
},
{
    "question": "question1",
    "answer": ["answer1", "answer2", "answer3", "answer4"],
    "value": 0,
    "name": "Test2"
},
{
    "question": "question1",
    "answer": ["answer1", "answer2", "answer3", "answer4"],
    "value": 0,
    "name": "Test3"
}]

// Syntax is: "questionInfo[0].question" to access question1 and "questionInfo[0].answer[n]" to access answer[n]
//Note to John: I'm aware 'q' isn't a good descripter but I think its pretty straight-forward.
//Thanks to https://stackoverflow.com/questions/1078118/how-do-i-iterate-over-a-json-structure for reference

var questionPanel =
    (
        '<div class="container">' +
        '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
        '<h3 class="question"/>' +
        '</div>' +
        '<div class="panel-body">' +
        '<p class="answer"/>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
var answerRadio =
    (
        '<div class="radio">' +
        '<label>' +
        '<input type="radio" class="answerSelector" name="test">' +
        '</label>' +
        '</div>'
    );


//<input type="radio" name="activity" value="sonic"> Running
$(document).ready(appendQuestions)

function appendQuestions() {
    $(document.body).prepend('<div class="container">');

    for (var i = 0; i < questionInfo.length; i++) {
        $(document.body).append(questionPanel);
        $(".question:last").append(questionInfo[i].question);
        for (var o = 0; o < questionInfo[i].answer.length; o++) {
            $(".answer:last").append(answerRadio);
            $(".input:last").attr("name", questionInfo[i].name);
            $("label:last").append(questionInfo[i].answer[o]);
        }
    }

    $(document.body).append("</div>"); //Must go last, this closes the container class 
}