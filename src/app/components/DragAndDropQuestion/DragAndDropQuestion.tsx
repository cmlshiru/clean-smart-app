import React, { FC, useState } from "react";
import styles from "./DragAndDropQuestion.module.css";

interface DragAndDropQuestionProps {
  questionTitle: string;
  dragSentences?: string[];
  dragChoices?: string[];
  dragCorrectAnswer?: string[];
  questionNumber: number;
}

const DragAndDropQuestion: FC<DragAndDropQuestionProps> = (
  props: DragAndDropQuestionProps
) => {
  const [answer, setAnswer] = useState(-1);
  const [choosedAnswers, setChoosedAnswers] =  useState(new Array(props.dragChoices?.length).fill(-1));

  const chooseOption = (id: number) => {
   setAnswer(id)

    console.log('answer ',answer, id);
  };

  const chooseSentence = (id: number) => {
    const auxArray = choosedAnswers;
    auxArray[id] = answer;
    setChoosedAnswers(auxArray);
    console.log('respuestas ',choosedAnswers, id, answer);
  };

  return (
    <div className={styles.MultipleChoiceQuestion}>
      <div className="m-5">
        <h1>
          {props.questionNumber}.- {props.questionTitle}
        </h1>
        <div className="d-inline-flex">
          {props.dragChoices ? (
            props.dragChoices.map((choice, id) => (
              <div
                className={`drag-choice p-1 mx-2 ${answer === id ? "drag-selection" : ""}`}
                key={id}
                onClick={() => chooseOption(id)}
              >
                {choice}
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>

        {props.dragSentences ? (
          props.dragSentences.map((sentence, id) => (
            <div
              className={`${answer >= 0 ? "drag-selection-answer" : ""}`}
              key={id}
              onClick={() => chooseSentence(id)}
            >
              {`${sentence} ${(choosedAnswers[id]!==-1 && !!props.dragChoices)?props.dragChoices[id]:''}`}
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default DragAndDropQuestion;
