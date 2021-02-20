import React from 'react';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Quiz from './Quiz';


const QuizContainer = (props) => {
  const quiz = props.quizzes[Number(props.match.params.id)-1]
  return <Quiz quiz={quiz}/>
};

const mapStateToProps = state =>{
  return{
    quizzes:state.quizzes.quizzes,
    
  }
}



export default compose(
  withRouter,
  connect(mapStateToProps)
)(QuizContainer);