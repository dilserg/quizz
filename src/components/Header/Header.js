import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div>
          <NavLink to='/home' className={styles.link}>
            <div className={styles.linkText}>To all quizzes</div>
          </NavLink>
        </div>
        <div>
          <NavLink to='/create' className={styles.link}>
            <div className={styles.linkText}>Create new quiz</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;