import React from 'react';
import styles from './CreateNewQuiz.module.css'

const TitleInput = ({input, meta, ...props}) => {
  const className = () =>{
    if (meta.touched && meta.error){
      return styles.error + " " + props.mystyle
    }else return props.mystyle
  }
  
  return (
    <>
      <input autoComplete="off" placeholder={props.myplaceholder} className={className()} {...input} {...props}/>
    </>
  );
};

export default TitleInput;