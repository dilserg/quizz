import React from 'react';
import styles from './AllQuizzes.module.css';
import QuizLink from './QuizLink/QuizLink';

const AllQuizzes = ({quizzes}) => {
  const titles = quizzes.map((quiz) => <QuizLink key={quiz.id} id={quiz.id} title={quiz.title} date={quiz.date}
                                                     count={quiz.questionsCount}/>);
  return (
    <>
      <div className={styles.count}>
        You have {quizzes.length} {quizzes.length === 1 ? "quiz" : "quizzes"}
      </div>
      <div className={styles.wrapper}>
        {titles}
      </div>
    </>
  );
};

export default AllQuizzes;