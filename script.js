var counter = 0;
var array = [];
var inputs = document.getElementById('inputs');
var mainInputs = document.getElementById('mainInputs');
var quizContent = document.getElementById('content');
var nextButton = document.getElementById('nextButton');
var numberOfQuestions =  document.getElementById('count');
var correctVariable =  document.getElementById('correctAnswers');
var startButton =  document.getElementById('startButton');
var background = document.getElementById('background');
var menuButton =  document.getElementById('menuBtn');
var scoreText = document.getElementById('successext');
var failTitle = document.getElementById('failTitle');

var answerButton1 = document.getElementById('answer1');
var answerButton2 = document.getElementById('answer2');
var answerButton3 = document.getElementById('answer3');
var answerButton4 = document.getElementById('answer4');

let correctAnswerswer = 0;
let NbOfQuestions = 0;
let NbOfQuestionCounter = 0;

function PushToArray(){

    


var inputQuestion = document.getElementById('inputQuestion').value;
var input1 = document.getElementById('input1').value;
var input2 = document.getElementById('input2').value;
var input3 = document.getElementById('input3').value;
var input4 = document.getElementById('input4').value;
    
if(inputQuestion.trim().length == 0 && input1.trim().length == 0 && (input2.trim().length == 0 && input3.trim().length == 0 && input4.trim().length == 0)){
    window.alert('You must enter a question, a correct answer and at least one wrong answer.');
    return;
}
else if(inputQuestion.trim().length == 0 && !input1.trim().length == 0 && !(input2.trim().length == 0 && input3.trim().length == 0 && input4.trim().length == 0)){
    window.alert('You must enter a question.');
return;
}
else if(input1.trim().length == 0 && !inputQuestion.trim().length == 0 && !(input2.trim().length == 0 && input3.trim().length == 0 && input4.trim().length == 0)){
    window.alert('You must enter a correct answer.');
    return;
}
else if(!inputQuestion.trim().length == 0 &&  !input1.trim().length == 0  && (input2.trim().length == 0 && input3.trim().length == 0 && input4.trim().length == 0)){
    window.alert('You must enter at least one wrong answer.');
    return;
}
else if(!inputQuestion.trim().length == 0 && input1.trim().length == 0 && (input2.trim().length == 0 && input3.trim().length == 0 && input4.trim().length == 0)){
    window.alert('You must enter a correct answer and at least one wrong answer.');
    return;
}
else if(inputQuestion.trim().length == 0 && !input1.trim().length == 0 && (input2.trim().length == 0 && input3.trim().length == 0 && input4.trim().length == 0)){
    window.alert('You must enter a question and at least one wrong answer.');
    return;
}

// Keeping track of how many questions were entered
NbOfQuestions++;
numberOfQuestions.innerText = "Add • " + NbOfQuestions;

if( NbOfQuestions >= 1){
    startButton.classList.remove('hide');
    startButton.classList.add('block');
    }


// Pushing question entered to array
array.push([inputQuestion,"question"]);

var answersArray = [];

// Pushing answers entered to array
answersArray.push([input1,"correct"]);
answersArray.push([input2,"wrong"]);
answersArray.push([input3,"wrong"]);
answersArray.push([input4,"wrong"]);

// Shuffling
shuffle(answersArray); // Function on line 379 
for(var i = 0 ; i < answersArray.length ; i++){
        array.push(answersArray[i]);
}

var questionText = "";
var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";

questionText =  questionText + array[counter][0];

counter++;

answer1 = answer1 + array[counter++][0] ;
answer2 = answer2 + array[counter++][0] ;
answer3 = answer3 + array[counter++][0] ;
answer4 = answer4 + array[counter++][0] ;

document.getElementById('questionText').innerHTML = questionText;
document.getElementById('answerText1').innerHTML = answer1;
document.getElementById('answerText2').innerHTML = answer2;
document.getElementById('answerText3').innerHTML = answer3;
document.getElementById('answerText4').innerHTML = answer4;

// Empty Inputs
document.getElementById('inputQuestion').value='';
document.getElementById('input1').value='';
document.getElementById('input2').value='';
document.getElementById('input3').value='';
document.getElementById('input4').value='';

}
function StartQuiz(){
    inputs.classList.add("hide")
    startButton.classList.add("hide")
    startButton.classList.remove("block")
    console.log("Started Quiz")
    mainInputs.classList.add('hide');
    mainInputs.classList.remove('block');
    quizContent.classList.remove('hide');
    quizContent.classList.add('show');
}

function nextQuestion(){
    NbOfQuestionCounter++;
    if(NbOfQuestionCounter  == NbOfQuestions){
            numberOfQuestions.innerText = "Add";
            inputs.classList.remove("hide")
            correctVariable.classList.remove('hide');
            menuButton.classList.remove('hide');
            quizContent.classList.add('hide');
            quizContent.classList.remove('show');
            nextButton.classList.add('hidden');
                if(correctAnswerswer <= NbOfQuestions/2){
                    background.classList.add('red');
                    background.classList.remove('green');
                    background.classList.remove('black');
                    failTitle.classList.remove('hide');
                }else if(correctAnswerswer > NbOfQuestions/2){ 
                    background.classList.add('green');
                    background.classList.remove('black');
                    background.classList.remove('red');
                    successTitle.classList.remove('hide');
                }
            NbOfQuestions = 0 ;
            NbOfQuestionCounter  = 0;
            nbOne = 0;
    }

document.getElementById('questionText').innerHTML = '';
document.getElementById('answerText1').innerHTML = '';
document.getElementById('answerText2').innerHTML = '';
document.getElementById('answerText3').innerHTML = '';
document.getElementById('answerText4').innerHTML = '';

counter -= 10;
document.getElementById('questionText').innerHTML = array[counter++][0];
document.getElementById('answerText1').innerHTML = array[counter++][0];
document.getElementById('answerText2').innerHTML = array[counter++][0];
document.getElementById('answerText3').innerHTML = array[counter++][0];
document.getElementById('answerText4').innerHTML = array[counter++][0];

answerButton1.classList.remove('green');
answerButton2.classList.remove('green');
answerButton3.classList.remove('green');
answerButton4.classList.remove('green');
answerButton1.classList.remove('red');
answerButton2.classList.remove('red');
answerButton3.classList.remove('red');
answerButton4.classList.remove('red');

// Enabling buttons
document.getElementById("answer1").disabled = false;
document.getElementById("answer2").disabled = false;
document.getElementById("answer3").disabled = false;
document.getElementById("answer4").disabled = false;

background.classList.remove('green');
background.classList.remove('red');
background.classList.add('black');

}

function checkAnswer(clicked) { 

nextButton.classList.remove('hidden');

if(clicked == "answer4")
{
        if(array[counter-1][1] == "correct")
        {
                answerButton4.classList.add('green');
                answerButton3.classList.add('red');
                answerButton2.classList.add('red');
                answerButton1.classList.add('red');
                background.classList.remove('black');
                background.classList.add('green');
                background.classList.remove('red');
                correctAnswerswer++;

        }else if(array[counter-1][1] == "wrong")
        {
                answerButton4.classList.add('red');
                background.classList.remove('black');
                background.classList.add('red');
                background.classList.remove('green');

                                    if(array[counter-2][1] == "correct")
                                    {
                                                answerButton3.classList.add('green');
                                                answerButton4.classList.add('red');
                                                answerButton2.classList.add('red');
                                                answerButton1.classList.add('red');

                                    }else if(array[counter-3][1] == "correct")
                                    {
                                                answerButton2.classList.add('green');
                                                answerButton3.classList.add('red');
                                                answerButton4.classList.add('red');
                                                answerButton1.classList.add('red');

                                    }else if(array[counter-4][1] == "correct")
                                    {
                                        answerButton1.classList.add('green');
                                        answerButton3.classList.add('red');
                                        answerButton2.classList.add('red');
                                        answerButton4.classList.add('red');
                                    }

        }
// console.log('Answer 4 was clicked');

}else if(clicked == "answer3")
{
        if(array[counter-2][1] == "correct")
        {
                answerButton3.classList.add('green');
                answerButton4.classList.add('red');
                answerButton2.classList.add('red');
                answerButton1.classList.add('red');
                background.classList.remove('black');
                background.classList.add('green');
                background.classList.remove('red');
                correctAnswerswer++;

        }else if(array[counter-2][1] == "wrong")
        {
                answerButton3.classList.add('red'); 
                background.classList.remove('black');
                background.classList.add('red');
                background.classList.remove('green');

                                    if(array[counter-4][1] == "correct")
                                    {
                                        answerButton1.classList.add('green');
                                        answerButton3.classList.add('red');
                                        answerButton2.classList.add('red');
                                        answerButton4.classList.add('red');

                                    }else if(array[counter-3][1] == "correct")
                                    {
                                        answerButton2.classList.add('green');
                                        answerButton3.classList.add('red');
                                        answerButton4.classList.add('red');
                                        answerButton1.classList.add('red');

                                    }else if(array[counter-1][1] == "correct")
                                    {
                                        answerButton4.classList.add('green');
                                        answerButton3.classList.add('red');
                                        answerButton2.classList.add('red');
                                        answerButton1.classList.add('red');
                                    }

        }
// console.log('answer3 was clicked');

}else if(clicked == "answer2")
{

        if(array[counter-3][1] == "correct")
        {
                answerButton2.classList.add('green');
                answerButton3.classList.add('red');
                answerButton4.classList.add('red');
                answerButton1.classList.add('red');
                background.classList.remove('black');
                background.classList.add('green');
                background.classList.remove('red');
                correctAnswerswer++;

        }else if(array[counter-3][1] == "wrong")
        {
                answerButton2.classList.add('red'); 
                background.classList.remove('black');
                background.classList.add('red');
                background.classList.remove('green');

                                    if(array[counter-1][1] == "correct")
                                    {
                                        answerButton4.classList.add('green');
                                        answerButton3.classList.add('red');
                                        answerButton2.classList.add('red');
                                        answerButton1.classList.add('red');

                                    }else if(array[counter-3][1] == "correct")
                                    {
                                        answerButton2.classList.add('green');
                                        answerButton3.classList.add('red');
                                        answerButton4.classList.add('red');
                                        answerButton1.classList.add('red');

                                    }else if(array[counter-4][1] == "correct")
                                    {
                                        answerButton1.classList.add('green');
                                        answerButton3.classList.add('red');
                                        answerButton2.classList.add('red');
                                        answerButton4.classList.add('red');
                                    }

        }
// console.log('answer2 was clicked');

}else if(clicked == "answer1")
{
        if(array[counter-4][1] == "correct")
        {
                answerButton1.classList.add('green');
                answerButton3.classList.add('red');
                answerButton2.classList.add('red');
                answerButton4.classList.add('red');
                background.classList.remove('black');
                background.classList.add('green');
                background.classList.remove('red');
                correctAnswerswer++;

        }else if(array[counter-4][1] == "wrong")
        {
                answerButton1.classList.add('red');
                background.classList.remove('black');
                background.classList.add('red');
                background.classList.remove('green');

                                    if(array[counter-2][1] == "correct")
                                    {
                                        answerButton3.classList.add('green');
                                        answerButton4.classList.add('red');
                                        answerButton2.classList.add('red');
                                        answerButton1.classList.add('red');

                                    }else if(array[counter-3][1] == "correct")
                                    {
                                        answerButton2.classList.add('green');
                                        answerButton3.classList.add('red');
                                        answerButton4.classList.add('red');
                                        answerButton1.classList.add('red');

                                    }else if(array[counter-1][1] == "correct")
                                    {
                                    answerButton4.classList.add('green');
                                    answerButton3.classList.add('red');
                                    answerButton2.classList.add('red');
                                    answerButton1.classList.add('red');
                                    }

        }
// console.log('answer1 was clicked');
}

// Disabling buttons
document.getElementById("answer1").disabled = true;
document.getElementById("answer2").disabled = true;
document.getElementById("answer3").disabled = true;
document.getElementById("answer4").disabled = true;

correctVariable.innerText = correctAnswerswer + " out of " + NbOfQuestions;

}

// Reloading Screen
function reloadButton()
{
        location.reload();
}
// Shuffle
function shuffle(a) 
{
        for (let i = a.length - 1; i > 0; i--) 
        {    
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
}