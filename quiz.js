const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container')
const Restart = document.getElementById('restart-btn');
const QuizButton = document.getElementById('quiz-button');
const QuizButton2 = document.getElementById('quiz-button2');
const contentStart = document.getElementById('content');
const Options = document.getElementById('quiz-options');
const questionElement = document.getElementById('question')
var Header = document.getElementById('headerf')
var number = document.getElementById('nb')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex



let a = 1;
startButton.addEventListener('click', startGame);
Restart.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
currentQuestionIndex++;
a++;
number.innerText = a;
setNextQuestion()
})



function startGame(){ 
startButton.classList.add('hide');
Restart.classList.add('hide');
Options.classList.add('hide');
contentStart.classList.add('show');
QuizButton.classList.add('hide');
QuizButton2.classList.remove('hide');
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
number.innerText = 1;
Header.innerText = 0;
push();
a = 1;
b = 0;
setNextQuestion()
}



function setNextQuestion()
{
resetState()

showQuestion(shuffledQuestions[currentQuestionIndex])
}

let b = 0;

function selectAnswer(e){
    
   
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
    button.disabled = true; 
   
if(correct){
    b++;
    Header.innerText = b/4;
    number.innerText = a;
}

       
})
if(shuffledQuestions.length > currentQuestionIndex +1){
nextButton.classList.remove('hide');
}else{
    Restart.classList.remove('hide')
}
}





function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct)
    {
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
        element.classList.remove('correct')
        element.classList.remove('wrong')
}
function showQuestion(question){
questionElement.innerText = question.question
question.answers. forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
        button.dataset.correct = answer.correct 
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}





function resetState(){
clearStatusClass(document.body)
nextButton.classList.add('hide')
while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
}
}




let output = "2+2";

var thiss = document.getElementById('output').textContent;

var questions = [    
{
    question: document.getElementById('output').textContent,
    answers:[
{ text:  document.getElementById('output').textContent, correct: true,},
{ text:'26', correct : false},
{ text:'3', correct : false},
{ text:'12', correct : false}
    ]
    

}
         
         
   
]
 

function push(){
 
var array = [];


   const first =  document.getElementById('first');
   const second =  document.getElementById('content');



   first.classList.add('hide');
   second.classList.remove('hide');

var inputQuestion = document.getElementById('inputQuestion').value;

array.push(inputQuestion);

var output = "";

for(i=0; i < array.length; i++)
{
    output =   output + array[i] ;
    console.log(output);
}
document.getElementById('output').innerHTML = output;
document.getElementById('output').innerHTML = output;

}


