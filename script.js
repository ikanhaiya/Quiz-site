 
 const questions = [
    {
        question: "Which is largest animial in world",
        answers:[
            {text: "shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffee", correct: false},
        ]
            
        
    },
    
 
    {
        question: "Which is largest country in world",
        answers:[
            {text: "Nepal", correct: false},
            {text: "Russia", correct: true},
            {text: "USA", correct: false},
            {text: "India", correct: false},
        ]    
    },  
    {
        question: "Which is smallest country in world",
        answers:[
            {text: "Nepal", correct: false},
            {text: "Vatican City", correct: true},
            {text: "Finland", correct: false},
            {text: "Estonia", correct: false},
        ]
    },

    {
        question: "Which is largest mammel in world",
        answers:[
            {text: "shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffee", correct: false},
        ]
            
    },  
 ]

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;
 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();

 }

 function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;

        }

       button.addEventListener("click", selectAnswer);
    });
 }

   
 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
 }

 function selectAnswer(e){
   
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }

    else{
        selectBtn.classList.add("incorrect");
    }
    
   Array.from(answerButtons.children).forEach(button => {
     
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }

    button.disabled = true;
    
   });

   nextButton.style.display = "block";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Take test Again";
    nextButton.style.display = "block";
 }

 function handleNextButton(){

     currentQuestionIndex++;
     if(currentQuestionIndex<questions.length){
        showQuestion();
     }
     else{
        showScore();
     }
 }
 
 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
 })
 startQuiz();
