const MAKE_QUIZ = 'MAKE_QUIZ';

const initialState = {
  quizzes: [{
    'id': 1,
    '1answer1': '13',
    '1answer2': '42',
    '1answer3': '7',
    '1answer4': '11',
    '1question': 'What is your favourite number?',
    '1correct': 2,
    '2answer1': 'weekend',
    '2answer2': 'asap rocky',
    '2answer3': 'travis scott',
    '2answer4': 'post malone',
    '2question': 'Who is your favourite artist?',
    '2correct': 1,
    '3answer1': 'basketball',
    '3answer2': 'voleyball',
    '3answer3': 'cricket',
    '3answer4': 'football',
    '3correct': 4,
    '3question': 'What is your favourite sport',
    'date': '18 February 2021 16:55',
    'questionsCount': 3,
    'title': 'Test'
  }],
  quizID: 2
};

const quizzesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_QUIZ:
      return {
        ...state,
        quizzes: [...state.quizzes, {id: state.quizID, ...action.quiz}],
        quizID: state.quizID + 1
      };
    
    default:
      return state;
  }
};

export const makeQuiz = (quiz) => ({type: MAKE_QUIZ, quiz});


export default quizzesReducer;