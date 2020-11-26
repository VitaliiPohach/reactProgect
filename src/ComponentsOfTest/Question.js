import React from 'react'
//import {questions} from '../questions'

const styles = {
    div: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
        backgroundColor: 'blue',
      },

}
export default function Question (props) {
    return(
        <div style={styles.div}>
            <h1>{props.question.textOfQuestion}</h1>
            
        </div>
    )
}

