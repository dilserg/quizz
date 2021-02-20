import React from 'react';
import {connect} from 'react-redux';
import AllQuizzes from './AllQuizzes';

const AllQuizzesContainer = (props) => {
  return (
    <AllQuizzes quizzes={props.quizzes}/>
  );
};

const mapStateToProps = (state) =>{
  return{
    quizzes:state.quizzes.quizzes
  }
}

export default connect(mapStateToProps)(AllQuizzesContainer)