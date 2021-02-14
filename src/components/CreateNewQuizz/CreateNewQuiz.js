import React from 'react';
import {Field, Form} from 'react-final-form';
import styles from './CreateNewQuiz.module.css';
import Question from './Question/Question';
import {required} from '../../validators/validators';
import TitleInput from './TitleInput';

const CreateNewQuiz = () => {
  return (
    <div className={styles.quiz}>
      <NewQuizForm/>
    </div>
  );
};

const NewQuizForm = (props) => {
  const [question, setQuestion] = React.useState([<Question name='1'/>]);
  const [questionNumber, setQuestionNumber] = React.useState(2)
  
  const addQuestion = () => {
    setQuestion(prev => [...prev, <Question name={questionNumber}/>]);
    setQuestionNumber(prev => prev+1)
  };
  
  const onSubmit = data => {
    console.log(data);
  };
  
  
  
  return <Form onSubmit={onSubmit} render={({handleSubmit}) => (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.center}>
          <Field validate={required} name='title' component={TitleInput} />
        </div>
        {question}
        <button>submit</button>
      </form>
      <button onClick={addQuestion}>1212312</button>
    </>
  )}/>;
};

export default CreateNewQuiz;