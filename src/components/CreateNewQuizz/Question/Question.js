import React from 'react';
import {Field} from 'react-final-form';

const Question = (props) => {
  return (
    <div>
      <Field autoComplete="off" name={"title"+props.name} component='input'/>
    </div>
  );
};


export default Question;