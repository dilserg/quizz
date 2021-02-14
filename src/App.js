import styles from './App.module.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import AllQuizzes from './components/AllQuizzes/AllQuizzes';
import CreateNewQuiz from './components/CreateNewQuizz/CreateNewQuiz';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header/>
        <div className={styles.content}>
          <Switch>
            <Route path='/home'>
              <AllQuizzes/>
            </Route>
            <Route path='/create'>
              <CreateNewQuiz/>
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
