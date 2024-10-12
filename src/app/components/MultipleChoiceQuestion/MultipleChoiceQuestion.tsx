'use client';

import React, { FC, useState } from "react";
import styles from "./MultipleChoiceQuestion.module.css";

interface MultipleChoiceQuestionProps {
  questionTitle: string;
  multipleChoices?: string[];
  multipleCorrectAnswer?: number;
  questionNumber:number;
}

const MultipleChoiceQuestion: FC<MultipleChoiceQuestionProps> = (
  props: MultipleChoiceQuestionProps
) => {

  const [answer,setAnswer] = useState(-1);

  return (
    <div className={styles.MultipleChoiceQuestion}>
      <div className="m-5">
        <h1>{props.questionNumber}.- {props.questionTitle}</h1>
        {
          props.multipleChoices?props.multipleChoices.map((choice, id) => (
            <div key={id} className="d-flex">
              <input type="radio" checked={answer===id} name={`question ${id} ${props.questionNumber}`} id={(id+1).toString()+ props.questionNumber} value={id} className="" onChange={()=>setAnswer(id)} />
              <p className="px-3 py-1 m-0 choice-text">{choice}</p>
              
            </div>
          )) : <div></div>
        }
      </div>
    </div>
  );
}

  
  
  
  

export default MultipleChoiceQuestion;
