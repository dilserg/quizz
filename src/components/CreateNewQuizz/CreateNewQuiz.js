import React from 'react';
import {Field, Form} from 'react-final-form';
import styles from './CreateNewQuiz.module.css';
import Question from './Question/Question';
import {maxLength} from '../../validators/validators';
import TitleInput from './TitleInput';
import {makeQuiz} from '../../store/quizzesReducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const CreateNewQuiz = ({makeQuiz}) => {
  const [redirect, setRedirect] = React.useState(false);
  if (redirect) {
    return <Redirect to='/home'/>;
  }
  return (
    <div className={styles.quiz}>
      <NewQuizForm setRedirect={setRedirect} makeQuiz={makeQuiz}/>
    </div>
  );
};

const NewQuizForm = (props) => {
  const [question, setQuestion] = React.useState([{id: 1, autoFocus: false}]);
  const [questionNumber, setQuestionNumber] = React.useState(2);
  const [correct, setCorrect] = React.useState({});
  const [deleted, setDeleted] = React.useState([]);
  
  const addQuestion = () => {
    setQuestion(prev => [...prev, {id: questionNumber, autoFocus: true}]);
    setQuestionNumber(prev => prev + 1);
  };
  
  const deleteQuestion = (id) => {
      setDeleted(prev => [...prev, id]);
      setQuestion(question.filter(question => question.id !== id));
      // setQuestionNumber(prev => prev - 1);
  };
  
  let questions = question.map(q => <Question count={question.length} deleteQuestion={deleteQuestion}
                                              autoFocus={q.autoFocus} key={q.id} id={q.id} setCorrect={setCorrect}/>);
  
  const onSubmit = data => {
    for (let elem in data) {
      data[elem] = data[elem].trim();
      if (!data[elem])
        return null;
    }
    
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
      'November', 'December'];
    let date = new Date();
    data = {...data, ...correct};
    for (let elem of deleted) {
      delete data[`${elem}answer1`];
      delete data[`${elem}answer2`];
      delete data[`${elem}answer3`];
      delete data[`${elem}answer4`];
      delete data[`${elem}question`];
      delete data[`${elem}correct`];
    }
    data.date = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    data.questionsCount = (Object.keys(data).length - 2) / 6
    props.makeQuiz(data);
    props.setRedirect(true);
  };
  
  
  return <Form onSubmit={onSubmit} render={({handleSubmit, pristine}) => (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.center}>
          <Field mystyle={styles.title} myplaceholder='Name your quiz' autoFocus validate={maxLength} name='title'
                 component={TitleInput}/>
        </div>
        {questions}
        <div className={styles.button}>
          <div className={styles.addButton} onClick={addQuestion}>Add new question</div>
        </div>
        <div className={styles.button}>
          <button disabled={pristine} className={styles.submitButton}>Submit</button>
        </div>
      </form>
    </>
  )}/>;
};


export default connect(null, {makeQuiz})(CreateNewQuiz);