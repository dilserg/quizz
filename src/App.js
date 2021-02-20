import styles from './App.module.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import CreateNewQuiz from './components/CreateNewQuizz/CreateNewQuiz';
import AllQuizzesContainer from './components/AllQuizzes/AllQuizzesContainer';
import QuizContainer from './components/Quiz/QuizContainer';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header/>
        <div className={styles.content}>
          <Switch>
            <Route path='/home'>
              <AllQuizzesContainer/>
            </Route>
            <Route path='/create'>
              <CreateNewQuiz/>
            </Route>
            <Route path='/quiz/:id?'>
              <QuizContainer/>
            </Route>
            <Route>
              <Redirect to='/home'/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
