import React from 'react';
import {Field} from 'react-final-form';
import styles from './Question.module.css';
import {required} from '../../../validators/validators';
import TitleInput from '../TitleInput';

const Question = (props) => {
  const [selected, setSelected] = React.useState(1);
  const isSelected = n => selected === n;
  const onChange = (n) => {
    props.setCorrect(prev => ({...prev, [props.id + 'correct']: n}));
    setSelected(n);
  };
  React.useEffect(() => {
    props.setCorrect(prev => ({...prev, [props.id + 'correct']: 1}));
  }, []);
  
  return (
    <div className={styles.question}>
      <Field mystyle={styles.title} type='text' autoFocus={props.autoFocus} myplaceholder='Question' validate={required}
             name={props.id + 'question'} component={TitleInput}/>
      <Field mystyle={styles.title} type='text' myplaceholder='Answer 1' validate={required} name={props.id + 'answer1'}
             component={TitleInput}/>
      <div className={styles.radio}>
        <Field tabindex='3' name={props.id + 'correct'} onChange={() => onChange(1)} checked={isSelected(1)} type='radio'
               value='1' component='input'/>
      </div>
      <Field mystyle={styles.title} type='text' myplaceholder='Answer 2' validate={required} name={props.id + 'answer2'}
             component={TitleInput}/>
      <div className={styles.radio}>
        <Field name={props.id + 'correct'} onChange={() => onChange(2)} checked={isSelected(2)} type='radio'
               value='2' component='input'/>
      </div>
      <Field mystyle={styles.title} type='text' myplaceholder='Answer 3' validate={required} name={props.id + 'answer3'}
             component={TitleInput}/>
      <div className={styles.radio}>
        <Field name={props.id + 'correct'} onChange={() => onChange(3)} checked={isSelected(3)} type='radio'
               value='3' component='input'/>
      </div>
      <Field mystyle={styles.title} type='text' myplaceholder='Answer 4' validate={required} name={props.id + 'answer4'}
             component={TitleInput}/>
      <div className={styles.radio}>
        <Field name={props.id + 'correct'} onChange={() => onChange(4)} checked={isSelected(4)} type='radio'
               value='4' component='input'/>
      </div>
      {props.count > 1 &&
      <div onClick={() => props.deleteQuestion(props.id)} className={styles.delete}>&#10006;</div>
      }
    </div>
  );
};


export default Question;