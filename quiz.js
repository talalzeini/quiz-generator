const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container')
const Restart = document.getElementById('restart-btn');
const QuizButton = document.getElementById('quiz-button');

const contentStart = document.getElementById('content');
const Options = document.getElementById('quiz-options');
const questionElement = document.getElementById('question')
var Header = document.getElementById('headerf')
var number = document.getElementById('nb')
const answerButtonsElement = document.getElementById('answer-buttons')





var questions = [    
    
        ]      


        let q = 0;
        
        var numberOfQuestions =  document.getElementById('count');
        
            

    
    var counter = 0;
    var array = [];
        function pushing(){
        
        
       
        q++;
      
         numberOfQuestions.innerText = "Add - " + q;
  
            

                



         var inputQuestion = document.getElementById('inputQuestion').value;
         var ans1 = document.getElementById('ans1').value;
         var ans2 = document.getElementById('ans2').value;
         var ans3 = document.getElementById('ans3').value;
         var ans4 = document.getElementById('ans4').value;
         array.push([inputQuestion,"question"]);
        var answersArray = [];
        answersArray.push([ans1,"correct"]);
        answersArray.push([ans2,"wrong"]);
        answersArray.push([ans3,"wrong"]);
        answersArray.push([ans4,"wrong"]);
        shuffle(answersArray);
        for(var i = 0 ; i < answersArray.length ; i++){
            array.push(answersArray[i]);
            console.log(answersArray[i]);
        }
        // console.log(counter);
         
         
         var output = "";
         var answer1 = "";
         var answer2 = "";
         var answer3 = "";
         var answer4 = "";
         output =  output + array[counter][0];
         counter++;
        //  console.log(counter);
         answer1 = answer1 + array[counter++][0] ;
        //  console.log(counter);
         answer2 = answer2 + array[counter++][0] ;
        //  console.log(counter);
         answer3 = answer3 + array[counter++][0] ;
        //  console.log(counter);
         answer4 = answer4 + array[counter++][0] ;
        //  console.log(counter);
        //  console.log(output)
        //  console.log(array[1]);
        //  console.log(array[2]);
        //  console.log(array[3]);
        //  console.log(array[4]);
         document.getElementById('output').innerHTML = output;
         document.getElementById('a1').innerHTML = answer1;
         document.getElementById('a2').innerHTML = answer2;
         document.getElementById('a3').innerHTML = answer3;
         document.getElementById('a4').innerHTML = answer4;

        







         document.getElementById('inputQuestion').value='';
         document.getElementById('ans1').value='';
         document.getElementById('ans2').value='';
         document.getElementById('ans3').value='';
         document.getElementById('ans4').value='';

         for(var j = 0; j < array.length; j++){
            console.log(array[j]);
         }
         }
         





// var c = document.getElementsByClassName("answer");
// var str = "";
// for(var i = 0 ; i < c.length ; i++){
   
//     str = str + c[i];
  
// }
// document.getElementById('number').textContent = c[0].value;

// document.getElementById('number').innerHTML = document.getElementById('number').textContent;

// str = str + document.getElementById('number').innerHTML;

// document.getElementById('number').innerHTML = str;

// console.log(document.getElementById('number').innerHTML);
// }


function start()
{

var content = document.getElementById('content');
var first = document.getElementById('first');


content.classList.remove('hide');
first.classList.add('hide');



startButton.classList.add('hide');
Restart.classList.add('hide');
Options.classList.add('hide');
contentStart.classList.add('show');
QuizButton.classList.add('hide');

questionContainerElement.classList.remove('hide');



}

var q1 = document.getElementById('question1');
var q2 = document.getElementById('question2');
var q3 = document.getElementById('question3');
var q4 = document.getElementById('question4');



var bg = document.getElementById('bg');



// let nn = 0;
// var n = document.getElementById("nb");


function nextQuestion(){
//     n.innerText = nn + "question number";
// nn++;
    document.getElementById('output').innerHTML = '';
    document.getElementById('a1').innerHTML = '';
    document.getElementById('a2').innerHTML = '';
    document.getElementById('a3').innerHTML = '';
    document.getElementById('a4').innerHTML = '';

    counter -= 10;
    document.getElementById('output').innerHTML = array[counter++][0];
    document.getElementById('a1').innerHTML = array[counter++][0];
    document.getElementById('a2').innerHTML = array[counter++][0];
    document.getElementById('a3').innerHTML = array[counter++][0];
    document.getElementById('a4').innerHTML = array[counter++][0];
     
    q1.classList.remove('green');
    q2.classList.remove('green');
    q3.classList.remove('green');
    q4.classList.remove('green');
    q1.classList.remove('red');
    q2.classList.remove('red');
    q3.classList.remove('red');
    q4.classList.remove('red');

           
document.getElementById("question1").disabled = false;
document.getElementById("question2").disabled = false;
document.getElementById("question3").disabled = false;
document.getElementById("question4").disabled = false;

            

    bg.classList.remove('gr');
    bg.classList.remove('redd');
    bg.classList.add('b');

}


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

var el_down = document.getElementById("GFG_DOWN"); 



function checkAnswer(clicked) { 
 

   if(clicked == "question4")
   {
    if(array[counter-1][1] == "correct"){
        q4.classList.add('green');
        q3.classList.add('red');
        q2.classList.add('red');
        q1.classList.add('red');
        bg.classList.remove('b');
        bg.classList.add('gr');
        bg.classList.remove('redd');
     
    }else if(array[counter-1][1] == "wrong"){
        q4.classList.add('red');
        bg.classList.remove('b');
        bg.classList.add('redd');
        bg.classList.remove('gr');
                    if(array[counter-2][1] == "correct"){
                        q3.classList.add('green');
                        q4.classList.add('red');
                        q2.classList.add('red');
                        q1.classList.add('red');
                       
                    }
                    else if(array[counter-3][1] == "correct"){
                        q2.classList.add('green');
                        q3.classList.add('red');
                        q4.classList.add('red');
                        q1.classList.add('red');
                   
                    }
                    else if(array[counter-4][1] == "correct"){
                        q1.classList.add('green');
                        q3.classList.add('red');
                        q2.classList.add('red');
                        q4.classList.add('red');
                    
                
                     }
                   
    }
    console.log('answer4 was clicked');
   }


  else if(clicked == "question3")
   {
    if(array[counter-2][1] == "correct"){
        q3.classList.add('green');
        q4.classList.add('red');
        q2.classList.add('red');
        q1.classList.add('red');
        bg.classList.remove('b');
        bg.classList.add('gr');
        bg.classList.remove('redd');
    }else if(array[counter-2][1] == "wrong"){
        q3.classList.add('red'); 
        bg.classList.remove('b');
        bg.classList.add('redd');
        bg.classList.remove('gr');
        if(array[counter-4][1] == "correct"){
            q1.classList.add('green');
            q3.classList.add('red');
            q2.classList.add('red');
            q4.classList.add('red');
          
    
         }
        else if(array[counter-3][1] == "correct"){
            q2.classList.add('green');
            q3.classList.add('red');
            q4.classList.add('red');
            q1.classList.add('red');
     
        }
        else if(array[counter-1][1] == "correct"){
            q4.classList.add('green');
            q3.classList.add('red');
            q2.classList.add('red');
            q1.classList.add('red');
           
         
        }
    }
    console.log('answer3 was clicked');
   }





else if(clicked == "question2"){

    if(array[counter-3][1] == "correct"){
        q2.classList.add('green');
        q3.classList.add('red');
        q4.classList.add('red');
        q1.classList.add('red');
        bg.classList.remove('b');
        bg.classList.add('gr');
        bg.classList.remove('redd');
    }else if(array[counter-3][1] == "wrong"){
        q2.classList.add('red'); 
        bg.classList.remove('b');
        bg.classList.add('redd');
        bg.classList.remove('gr');

        if(array[counter-1][1] == "correct"){
            q4.classList.add('green');
            q3.classList.add('red');
            q2.classList.add('red');
            q1.classList.add('red');
        
         

        }   else if(array[counter-3][1] == "correct"){
            q2.classList.add('green');
            q3.classList.add('red');
            q4.classList.add('red');
            q1.classList.add('red');
         

     }
     else if(array[counter-4][1] == "correct"){
        q1.classList.add('green');
        q3.classList.add('red');
        q2.classList.add('red');
        q4.classList.add('red');

      

     }



    }
    console.log('answer2 was clicked');  
}

   else if(clicked == "question1")
   {
    if(array[counter-4][1] == "correct"){
        q1.classList.add('green');
        q3.classList.add('red');
        q2.classList.add('red');
        q4.classList.add('red');
     

     }else if(array[counter-4][1] == "wrong"){
         q1.classList.add('red');
         bg.classList.remove('b');
         bg.classList.add('redd');
         bg.classList.remove('gr');
         if(array[counter-2][1] == "correct"){
            q3.classList.add('green');
            q4.classList.add('red');
            q2.classList.add('red');
            q1.classList.add('red');
         
        }
        else if(array[counter-3][1] == "correct"){
            q2.classList.add('green');
            q3.classList.add('red');
            q4.classList.add('red');
            q1.classList.add('red');
    
     }
     else if(array[counter-1][1] == "correct"){
        q4.classList.add('green');
        q3.classList.add('red');
        q2.classList.add('red');
        q1.classList.add('red');
    }
     console.log('answer1 was clicked');
     }
    }
        
document.getElementById("question1").disabled = true;
document.getElementById("question2").disabled = true;
document.getElementById("question3").disabled = true;
document.getElementById("question4").disabled = true;
   }


  


