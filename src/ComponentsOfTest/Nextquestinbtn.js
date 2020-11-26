import React from 'react' 


export default function Nextquestionbtn (props){
     let  questionNumber = props;
    return(
       
        <button onClick={()=>questionNumber+1}>Next questions</button>
    )
}
