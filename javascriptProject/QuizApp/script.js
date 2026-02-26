const question = [
    {
        question: "Which Keyword declares a constant  in Javascript",
        answers:[
            {text:"let", correct:false},
            {text:"var", correct:false},
            {text:"Const", correct:true},
            {text:"static", correct:false},
        ]
    },
    {
    question: "Which method converts JSON string to JavaScript object?",
    answers:[
        {text:"JSON.parse()", correct:true},
        {text:"JSON.stringify()", correct:false},
        {text:"Object.parse()", correct:false},
        {text:"JSON.toObject()", correct:false},
    ]
},
{
    question: "Which symbol is used for strict equality comparison in JavaScript?",
    answers:[
        {text:"==", correct:false},
        {text:"=", correct:false},
        {text:"===", correct:true},
        {text:"!=", correct:false},
    ]
},
{
    question: "Which array method adds an element at the end of an array?",
    answers:[
        {text:"push()", correct:true},
        {text:"pop()", correct:false},
        {text:"shift()", correct:false},
        {text:"unshift()", correct:false},
    ]
},
{
    question: "What will typeof null return in JavaScript?",
    answers:[
        {text:"null", correct:false},
        {text:"object", correct:true},
        {text:"undefined", correct:false},
        {text:"number", correct:false},
    ]
},
{
    question: "Which keyword is used to define a function in JavaScript?",
    answers:[
        {text:"method", correct:false},
        {text:"function", correct:true},
        {text:"define", correct:false},
        {text:"fun", correct:false},
    ]
}
]
const questionElement = document.getElementById("question");
console.log(questionElement);
const answersButtons = document.getElementById("answers");
console.log(answersButtons);
const nextButton = document.getElementById("nxt-btn");
console.log(answersButtons);
let currentQuestionIndex =0;
let score=0;
nextButton.disabled = true;

//show questions dynamically
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.textContent="Next";
    showQuestion();
}
function showQuestion() {
   // resetState();
    const currentQuestion = question[Math.floor(Math.random()*question.length)];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.answers.forEach((ans)=>{
        const button = document.createElement("button");
        button.textContent = ans.text;
        button.classList.add("btn");
        answersButtons.appendChild(button);
        if(ans.correct){
            button.dataset.correct = ans.correct;
        }
        button.addEventListener('click', selectAnswer)
    })
}
    //handle answer
    function selectAnswer(e){
        const selectedBtn = e.target;
        const selectedIsCorrect = selectedBtn.dataset.correct ==="true";
        if(selectedIsCorrect){
            score++;
        }
        Array.from(answersButtons.children).forEach(btn =>{
            const isCorrect = btn.dataset.correct;
            if(isCorrect){
                btn.classList.add("correct");
                
            }else{
                btn.classList.add("incorrect")
            }
            btn.disabled = true;
            
        })
        console.log(score);
        nextButton.disabled = false;
    }
    //nextbutton eventlistener
    nextButton.addEventListener('click',()=>{
        resetState();
        currentQuestionIndex++;
        if(currentQuestionIndex<question.length){
            showQuestion();
        }else{
            showScore();
        }
    })

    //show score
     function showScore(){
        //realState()
       
        questionElement.textContent = `you scored ${score} out of ${question.length}`;
       return  apple = 80;

    }
    function resetState(){
        nextButton.disabled=true;
        while(answersButtons.firstChild){
            answersButtons.removeChild(answersButtons.firstChild);
        }
    }
    



startQuiz();
