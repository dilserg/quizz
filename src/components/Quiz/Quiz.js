import React from 'react';
import styles from './Quiz.module.css';
import ErrorPage from '../ErrorPage/ErrorPage';


const Quiz = (props) => {
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [correctCount, setCorrectCount] = React.useState(0);
  const [isEnd, setIsEnd] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const [isShowButton, setIsShowButton] = React.useState(false);
  
  const next = () => {
    setSelected(null);
    setIsShowButton(false)
    setPageNumber(prev => ++prev);
    if (props.quiz.questionsCount === pageNumber)
      setIsEnd(true);
    else
      setQuestionNumber(prev => ++prev);
  };
  
  const text = () => {
    if(props.quiz.questionsCount === pageNumber)
      return 'Get result'
    return 'Next question'
  }
  
  const buttonColor = () =>{
    return styles.buttonNext + " " + (props.quiz[pageNumber + 'correct'] === selected ? styles.green : styles.red)
  }
  
  const AnswerClassName = (n) => {
    if (props.quiz[pageNumber + 'correct'] === n && selected) {
      return `${styles.answer} ${styles.right}`;
    }
    if (n === selected && props.quiz[pageNumber + 'correct'] !== selected)
      return `${styles.answer} ${styles.wrong}`;
    return styles.answer;
  };
  
  const selectAnswer = (n) => {
    if (!isShowButton){
      setSelected(n);
      setIsShowButton(true)
    }
  };
  
 React.useEffect(()=>{
   if (!props.quiz)
     return null;
   if (props.quiz[pageNumber + 'correct'] === selected){
     setCorrectCount(prev=>++prev)
   }
 },[selected])
  
  React.useEffect(() => {
    if (!props.quiz)
      return null;
    if (!props.quiz[questionNumber + 'question'])
      setQuestionNumber(prev => ++prev);
  }, [questionNumber]);
  
  
  if (isEnd) {
    return <div>{correctCount}/{props.quiz.questionsCount}</div>;
  }
  if (!props.quiz)
    return <div className={styles.noQuiz}><ErrorPage title='quiz'/></div>;
  return (
    <div className={styles.block}>
      <div className={styles.question}>
        {props.quiz[questionNumber + 'question']}
      </div>
      <div onClick={() => selectAnswer(1)} className={AnswerClassName(1)}>
        {props.quiz[questionNumber + 'answer1']}
      </div>
      <div onClick={() => selectAnswer(2)} className={AnswerClassName(2)}>
        {props.quiz[questionNumber + 'answer2']}
      </div>
      <div onClick={() => selectAnswer(3)} className={AnswerClassName(3)}>
        {props.quiz[questionNumber + 'answer3']}
      </div>
      <div onClick={() => selectAnswer(4)} className={AnswerClassName(4)}>
        {props.quiz[questionNumber + 'answer4']}
      </div>
      {isShowButton && <div onClick={next} className={buttonColor()}>{text()}</div>}
      <div className={styles.counter}>
        {pageNumber}/{props.quiz.questionsCount}
      </div>
    </div>
  );
};


export default Quiz;