import React from 'react';
import errorImage from '../../images/error.svg'
import styles from './ErrorPage.module.css'

const ErrorPage = ({title}) => {
  return (
    <div className={styles.error}>
      <div>There is no {title} with this address.</div>
      <img src={errorImage} alt=""/>
    </div>
  );
};

export default ErrorPage;