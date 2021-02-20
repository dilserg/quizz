import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './QuizLink.module.css';

const QuizLink = ({id, title, count, date}) => {
  
  return (
    <NavLink className={styles.link} to={`/quiz/${id}`}>
      <div className={styles.block}>
        <div className={styles.title}>{title}</div>
        <div className={styles.count}>Questions count: {count}</div>
        <div className={styles.count}>{date}</div>
      </div>
    </NavLink>
  );
};

export default QuizLink;