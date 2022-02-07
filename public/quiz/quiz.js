questionsArray = [
    {
        question: "where is karachi?",
        answer: "pakistan",
        options: [
            "africa",
            "pakisan",
            "England",
            "None of the above",
        ]
    },
    {
        question: "What is the name americas preident",
        answer: "joebiben",
        options: [
            "jeffbezoos",
            "imran khan",
            "joebiben",
            "None of the above",
        ]
    },
    {
        question: "What is the name pakistan preiden?",
        answer: "imran khan",
        options: [
            "afridi",
            "imran khan",
            "Nawaz sharif",
            "Bilawal",
        ]
    },
    {
        question: "which is bigest city in pakistan",
        answer: "Karachi",
        options: [
            "Karachi",
            "Lahore",
            "Islamabad",
            "Hydrabad",
        ]
    },
    {
        question: "Calculat is 12+12?",
        answer: "24",
        options: [
            "28",
            "30",
            "24",
            "None of the above",
        ]
    },
    {
        question: "Calculat is 50+50",
        answer: "100",
        options: [
            "107",
            "200",
            "70",
            "100",
        ]
    },
    {
        question: "Calculat is 5x4?",
        answer: "20",
        options: [
            "21",
            "24",
            "20",
            "25",
        ]
    },
    {
        question: "Calculat is 200+300?",
        answer: "500",
        options: [
            "1000",
            "500",
            "700",
            "600",
        ]
    },
    {
        question: "Calculat is 900+50?",
        answer: "950",
        options: [
            "950",
            "_850",
            "1050",
            "None of the above",
        ]
    },
    {
        question: "Calculat is 500-500",
        answer: "0",
        options: [
            "500",
            "0",
            "1",
            "None of the above",
        ]
    }
]

function show_question(e){
    var question = document.getElementById("question")
    question.innerHTML = "Q" + (e+1) + ") " + questionsArray[e].question
    var opts = document.getElementsByClassName("opt")
    for(var i = 0; i < opts.length; i++){
        opts[i].innerHTML = questionsArray[e].options[i]
    }
    var optns = document.getElementsByName("opt")
    for(var i = 0; i < optns.length; i++){
        optns[i].value = questionsArray[e].options[i]
    }
}

var count = 0
var score = 0

function calc(){
    var opts = document.getElementsByName("opt")
    for(var i = 0; i < opts.length; i++){
        if(opts[i].checked){
            var ans = opts[i].value
            opts[i].checked = false
        }
    }
    if(ans == questionsArray[count].answer){
        score += 10
    }
}

function next_question(){
    var optns = document.getElementsByName("opt")
    var btn = document.getElementById("next_btn")
    var cond = false;
    for(var i = 0; i < optns.length; i++){
        if (optns[i].checked == true){
            cond = true
        }
    }
    if(cond){
    if(count < questionsArray.length-1){
        calc()
        count++
        show_question(count)
        }
        else{
            var name = localStorage.getItem('name') 
            calc()
            // alert( name+" have secured " + score + " marks")
            let data ={
                name : name,
                quizMarks : score
            }
            firebase.database().ref(`QuizMarks/${name+score}`).set(data)
            .then(()=>
            {
                alert( name+" have secured " + score + " marks")
                window.location.replace("../index.html")

           })
        }
    }
}