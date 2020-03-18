var counter = 0;
var array = [];

var mainInputs = document.getElementById('mainInputs');
var quizContent = document.getElementById('content');
var nextButton = document.getElementById('nextButton');
var numberOfQuestions =  document.getElementById('count');
var correctVariable =  document.getElementById('correctAns');
var background = document.getElementById('background');
var menuButton =  document.getElementById('menuBtn');
var scoreText = document.getElementById('successext');
var failText = document.getElementById('failText');

var answerButton1 = document.getElementById('answerBtn1');
var answerButton2 = document.getElementById('answerBtn2');
var answerButton3 = document.getElementById('answerBtn3');
var answerButton4 = document.getElementById('answerBtn4');

let correctAnswer = 0;
let NbOfQuestions = 0;
let NbOfQuestionCounter = 0;

function PushToArray(){

// Keeping track of how many questions were entered
NbOfQuestions++;
numberOfQuestions.innerText = "Add - " + NbOfQuestions;

var inputQuestion = document.getElementById('inputQuestion').value;
var inputAnswer1 = document.getElementById('inputAnswer1').value;
var inputAnswer2 = document.getElementById('inputAnswer2').value;
var inputAnswer3 = document.getElementById('inputAnswer3').value;
var inputAnswer4 = document.getElementById('inputAnswer4').value;

// Pushing question entered to array
array.push([inputQuestion,"question"]);

var answersArray = [];

// Pushing answers entered to array
answersArray.push([inputAnswer1,"correct"]);
answersArray.push([inputAnswer2,"wrong"]);
answersArray.push([inputAnswer3,"wrong"]);
answersArray.push([inputAnswer4,"wrong"]);

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
document.getElementById('inputAnswer1').value='';
document.getElementById('inputAnswer2').value='';
document.getElementById('inputAnswer3').value='';
document.getElementById('inputAnswer4').value='';

}

function StartQuiz()
{
mainInputs.classList.add('hide');
quizContent.classList.remove('hide');
quizContent.classList.add('show');
}

function nextQuestion(){

NbOfQuestionCounter++;

if(NbOfQuestionCounter  == NbOfQuestions)
{
        

        numberOfQuestions.innerText = "Add";

        correctVariable.classList.remove('hide');
        menuButton.classList.remove('hide');
        quizContent.classList.add('hide');
        quizContent.classList.remove('show');
        nextButton.classList.add('hide');

        if(correctAnswer <= NbOfQuestions/2){
            background.classList.add('red');
            background.classList.remove('green');
            background.classList.remove('blue');
            failText.classList.remove('hide');
        }
        else if(correctAnswer > NbOfQuestions/2){ 
            background.classList.add('green');
            background.classList.remove('blue');
            background.classList.remove('red');
            successText.classList.remove('hide');
        }
        console.log(correctAnswer + " vs " + NbOfQuestions/2)
        NbOfQuestions = 0 ;
        NbOfQuestionCounter  = 0;
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
document.getElementById("answerBtn1").disabled = false;
document.getElementById("answerBtn2").disabled = false;
document.getElementById("answerBtn3").disabled = false;
document.getElementById("answerBtn4").disabled = false;

background.classList.remove('green');
background.classList.remove('red');
background.classList.add('blue');

}

function checkAnswer(clicked) { 

nextButton.classList.remove('hide');

if(clicked == "answerBtn4")
{
        if(array[counter-1][1] == "correct")
        {
                answerButton4.classList.add('green');
                answerButton3.classList.add('red');
                answerButton2.classList.add('red');
                answerButton1.classList.add('red');
                background.classList.remove('blue');
                background.classList.add('green');
                background.classList.remove('red');
                correctAnswer++;

        }else if(array[counter-1][1] == "wrong")
        {
                answerButton4.classList.add('red');
                background.classList.remove('blue');
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

}else if(clicked == "answerBtn3")
{
        if(array[counter-2][1] == "correct")
        {
                answerButton3.classList.add('green');
                answerButton4.classList.add('red');
                answerButton2.classList.add('red');
                answerButton1.classList.add('red');
                background.classList.remove('blue');
                background.classList.add('green');
                background.classList.remove('red');
                correctAnswer++;

        }else if(array[counter-2][1] == "wrong")
        {
                answerButton3.classList.add('red'); 
                background.classList.remove('blue');
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

}else if(clicked == "answerBtn2")
{

        if(array[counter-3][1] == "correct")
        {
                answerButton2.classList.add('green');
                answerButton3.classList.add('red');
                answerButton4.classList.add('red');
                answerButton1.classList.add('red');
                background.classList.remove('blue');
                background.classList.add('green');
                background.classList.remove('red');
                correctAnswer++;

        }else if(array[counter-3][1] == "wrong")
        {
                answerButton2.classList.add('red'); 
                background.classList.remove('blue');
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

}else if(clicked == "answerBtn1")
{
        if(array[counter-4][1] == "correct")
        {
                answerButton1.classList.add('green');
                answerButton3.classList.add('red');
                answerButton2.classList.add('red');
                answerButton4.classList.add('red');
                background.classList.remove('blue');
                background.classList.add('green');
                background.classList.remove('red');
                correctAnswer++;

        }else if(array[counter-4][1] == "wrong")
        {
                answerButton1.classList.add('red');
                background.classList.remove('blue');
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
document.getElementById("answerBtn1").disabled = true;
document.getElementById("answerBtn2").disabled = true;
document.getElementById("answerBtn3").disabled = true;
document.getElementById("answerBtn4").disabled = true;

correctVariable.innerText = correctAnswer + " out of " + NbOfQuestions;

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