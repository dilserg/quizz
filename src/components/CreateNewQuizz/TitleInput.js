import React from 'react';
import styles from './CreateNewQuiz.module.css'

const TitleInput = ({input, meta, ...props}) => {
  const className = () =>{
    if (meta.touched && meta.error){
      return styles.error +" "+ styles.title
    }else return styles.title
  }
  
  return (
    <>
      <input autoComplete="off" placeholder='Name your quiz' className={className()} {...input} {...props}/>
      {meta.touched && meta.error ? <span className={styles.errorText}>{meta.error}</span>:undefined}
    </>
  );
};

export default TitleInput;