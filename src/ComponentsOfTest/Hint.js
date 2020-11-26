import React from 'react' 


export default function Hint (props){
    return(
        <button onClick={()=>alert(props.question.textOfHint)}>Click to use hint</button>
    )
}