import React ,{useState} from 'react' 
import Question from './ComponentsOfTest/Question.js'
//import Answers from './ComponentsOfTest/AnswersList.js'
import Hint from './ComponentsOfTest/Hint.js'
//import Nextquestinbtn from './ComponentsOfTest/Nextquestinbtn.js'
import {questions} from './questions'
import AnswersList from './ComponentsOfTest/AnswersList.js'




function App() {

  const [numberQuestion,setnumberQuestion] = useState(0);
  


  function newQuestion (){
    if (numberQuestion<(questions.length-1)){
    setnumberQuestion(numberQuestion+1);
    }else{
    setnumberQuestion(0);
    }
  }
  function checkAnswer(answer){
    //console.log(questions[numberQuestion])
    if( questions[numberQuestion].isComplet===false){
      if( answer.corect === true ){ 
      
       questions[numberQuestion].isComplet=true;
       newQuestion();
      }else{
  
       questions[numberQuestion].isComplet=true;
       newQuestion();
       } 
   }else{
    alert("you finish")
    }
  }
  return(

     <div className = 'pagestyle' >
       <h1>My test </h1>
       <Question question = {questions[numberQuestion]}/>
       <Hint question ={questions[numberQuestion]}/>
       <AnswersList question = {questions[numberQuestion]} onCheck = {checkAnswer}/>
       <button onClick={newQuestion}>Next questions</button>
        {/* <Nextquestinbtn numberQuestion ={numberQuestion}/> */}


     </div>

  )
   
} 

export default App;
 