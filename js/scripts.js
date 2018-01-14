var questionInfo = [{
        "question": "What sounds better to you?",
        "answer": [
            ["Back-end.", ["C#", "Go", "Java", "Python", "Ruby", "Node.js"]],
            ["Front-end.", ["HTML", "CSS", "JavaScript"]],
            ["Full-stack.", ["C#", "Go", "Java", "Python", "Ruby", "Node.js", "HTML", "CSS", "JavaScript", "C"]],
            ["I don't know! (And thats ok)", []]
        ],
        "value": 3
    },
    {
        "question": "Do you like Open Source languages?",
        "answer": [
            ["Its a requirement.", ["Java", "PHP", "Python", "C#"]],
            ["It's preferable.", ["Java", "PHP", "Python", "C#","Java","PHP","Ruby"]],
            ["It doesn't matter to me.", ["C#", "Go", "Java", "Python", "Ruby", "Node.js", "HTML", "CSS", "JavaScript","C"]],
            ["I don't understand.", []],
        ],
        "value": 2
    }, {
        "question": "How much support do you want from the community?",
        "answer": [
            ["A lot!", ["Java", "Python","JavaScript","Ruby"]],
            ["I'll manage either way.", ["C#", "Go", "Java","Python","JavaScript","Ruby","PHP","CSS"]],
            ["I don't need community support.", ["Go", "C"]]
        ],
        "value": 1
    }, {
        "question": "Do you like the support of large companies behind a language?",
        "answer": [
            ["Absolutely.", ["C#", "Go","JavaScript","Java"]],
            ["I prefer to not involve large companies.", ["Ruby","PHP","CSS","Python",]]
        ],
        "value": 2
    }, {
        "question": "Would you rather use newer languages?",
        "answer": [
            ["Yes!", ["Go", "C#","Ruby",]],
            ["I don't mind, as long as its simple.", ["Python", "Go", "HTML","CSS"]],
            ["I prefer older, better supported languages.", ["C", "HTML","CSS","Java",""]],
        ],
        "value": 2
    }
]

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
        '<input type="radio" class="answerSelector">' +
        '</label>' +
        '</div>'
    );
var themes = 
(
    '<div class="container-fluid">' +
    '<div class="row centered-form center-block">' +
    '<button class="btn btn-primary btn-lg center-block" id="dark-theme">Dark Theme</button>' +
    '<button class="btn btn-primary btn-lg center-block" id="light-theme">Light Theme</button>' +
    '<button class="btn btn-primary btn-lg center-block" id="submit">Submit</button>'+
    '</div>' +
    '</div>'
)


//<input type="radio" name="activity" value="sonic"> Running
function appendQuestions() {
    $(document.body).prepend('<div class="container">');

    for (var i = 0; i < questionInfo.length; i++) {
        $(document.body).append(questionPanel);
        $(".question:last").append(questionInfo[i].question);
        for (var o = 0; o < questionInfo[i].answer.length; o++) {
            $(".answer:last").append(answerRadio);
            $("input:last").attr("name", name + i); //Simplistic unique IDs
            $("input:last").attr("value", o)
            $("label:last").append(questionInfo[i].answer[o][0]);
        }

    }

    $(document.body).append("</div>"); //Must go last, this closes the container class 
}
$(document).ready(function() {
    $(document.body).prepend('<div class="container">');
    $(".jumbotron").append(appendQuestions)
    $(document.body).append(themes);
    $(document.body).append("</div>"); //Must go last, this closes the container class 

    $("#dark-theme").click(function() {
    $("body").removeClass("light-body");
    $("body").addClass("dark-body");
    $(".panel-body").removeClass("light-panel-body");
    $(".panel-body").addClass("dark-panel-body");
    $(".panel-default>.panel-heading").removeClass("light-panel-heading");
    $(".panel-default>.panel-heading").addClass("dark-panel-heading");
    $("#dark-theme").hide();
    $("#light-theme").show();
    });

$("#light-theme").click(function() {
    $("body").removeClass("dark-body");
    $("body").addClass("light-body");
    $(".panel-body").removeClass("dark-panel-body");
    $(".panel-body").addClass("light-panel-body");
    $(".panel-default>.panel-heading").removeClass("dark-panel-heading");
    $(".panel-default>.panel-heading").addClass("light-panel-heading");
    $("#light-theme").hide();
    $("#dark-theme").show();
    });

$("#submit").click(function() {
    
});
});
