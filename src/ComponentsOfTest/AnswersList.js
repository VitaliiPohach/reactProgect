import React from 'react'
import PropTypes from 'prop-types'
import AnswerItem from './AnswerItem.js'



function   AnswersList (props){

    return (
        <ul >
            
            { props.question.answers.map((answer)=>{
              return <AnswerItem  question ={props.question} answer={answer} onCheck={props.onCheck} />
         

            })}
        </ul>
    )
  }

AnswerItem.propTypes = {
  onCheck: PropTypes.func.isRequired
}

  export default AnswersList