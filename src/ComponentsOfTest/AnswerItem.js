import React ,{useState} from 'react' 
import PropTypes from 'prop-types'


const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
    },
    input: {
      marginRight: '1rem'
    }
  }

  function  AnswerItem ({question, answer, onCheck}){
    const [color, setColor] = useState('neutral');
    return (<li style={styles.li} onClick={()=>{ onCheck(answer); 
    if (question.isComplet === true){
      if(answer.corect===true){
        setColor('green');
        }else{
          setColor('red');
        }
    };  }}>
                <span style = {{backgroundColor: color}}>
                 {answer.answer}
                 </span>
            </li>
    )
  }

AnswerItem.propTypes = {
  onCheck: PropTypes.func.isRequired
}

  export default AnswerItem