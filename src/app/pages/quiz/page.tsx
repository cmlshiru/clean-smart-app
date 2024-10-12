"use client";
import "./quiz.page.css";
import MultipleChoiceQuestion from "../../components/MultipleChoiceQuestion/MultipleChoiceQuestion";
import { Questions } from "@/app/models/question.interface";
import DragAndDropQuestion from "@/app/components/DragAndDropQuestion/DragAndDropQuestion";
import { useState } from "react";
// import {  } from "";

export default function Quiz() {
  const quizTitle: string = "Dusting Quiz";

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions: Questions[] = [
    {
      questionTitle: "This is the question 1",
      questionType: "multiple",
      multipleChoices: [
        "first choice",
        "second choice",
        "third choice",
        "fourth choice",
        "five choice",
      ],
      multipleCorrectAnswer: 1,
    },
    {
      questionTitle: "this is the question 2",
      questionType: "multiple",
      multipleChoices: [
        "first choice",
        "second choice",
        "third choice",
        "fourth choice",
        "five choice",
      ],
      multipleCorrectAnswer: 2,
    },
    {
      questionTitle: "this is the question 3",
      questionType: "multiple",
      multipleChoices: [
        "first choice",
        "second choice",
        "third choice",
        "fourth choice",
        "five choice",
      ],
      multipleCorrectAnswer: 3,
    },
    {
      questionTitle: "this is the question 4",
      questionType: "multiple",
      multipleChoices: [
        "first choice",
        "second choice",
        "third choice",
        "fourth choice",
        "five choice",
      ],
      multipleCorrectAnswer: 4,
    },
    {
      questionTitle: "this is the question 5",
      questionType: "multiple",
      multipleChoices: [
        "aaa choice",
        "second choice",
        "third choice",
        "fourth choice",
        "five choice",
      ],
      multipleCorrectAnswer: 5,
    },
    {
      questionTitle: "this is the question 5",
      questionType: "multiple",
      multipleChoices: [
        "aaa choice",
        "second choice",
        "third choice",
        "fourth choice",
        "five choice",
      ],
      multipleCorrectAnswer: 5,
    },
    {
      questionTitle: "this is the question 1000",
      questionType: "multiple",
      multipleChoices: [
        "aaa choice",
        "second choice",
        "third choice",
        "fourth choice",
        "five choice",
      ],
      multipleCorrectAnswer: 5,
    },
    {
      questionTitle: "this is the question 5",
      questionType: "multiple",
      multipleChoices: [
        "aaa choice",
        "second choice",
        "third choice",
        "fourth choice",
        "five choice",
      ],
      multipleCorrectAnswer: 5,
    },
    {
      questionTitle: "this is the question 6",
      questionType: "drag",
      dragSentences: [
        "the sky is",
        "the tree is",
        "mud is",
        "anger is",
        "the swan is",
      ],
      dragChoices: ["green", "blue", "brown", "white", "red"],
      dragCorrectAnswer: ["blue", "green", "brown", "red", "white"],
    },
  ];

  const questionTypeSelection = (question: Questions, id: number) => {
    if (question.questionType === "multiple") {
      return (
        <MultipleChoiceQuestion
          questionNumber={id + 1}
          questionTitle={question.questionTitle}
          multipleChoices={question.multipleChoices}
          multipleCorrectAnswer={question.multipleCorrectAnswer}
        />
      );
    } else if (question.questionType === "drag") {
      return (
        <DragAndDropQuestion
          questionNumber={id + 1}
          questionTitle={question.questionTitle}
          dragSentences={question.dragSentences}
          dragChoices={question.dragChoices}
          dragCorrectAnswer={question.dragCorrectAnswer}
        />
      );
    }
  };

  const goNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goPrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="d-flex justify-content-center w-100 h-100 quiz-bg">
      <div className="quiz-page w-75 mt-5 pb-5">
        <div className="col-12 p-5 pb-0">
          <h1>{quizTitle}</h1>
        </div>
        <div className="quiz-question">
          {questions.map((question, id) => (
            <div
              key={id}
              className={currentQuestion === id ? "d-block" : "d-none"}
            >
              {questionTypeSelection(question, id)}
            </div>
          ))}
        </div>
        <div className="col-12 d-inline-flex justify-content-start px-5">
          <div className="quiz-next-page px-4 cursor-pointer" onClick={goPrevQuestion}>Previous</div>
          <div className="quiz-next-page px-4 cursor-pointer" onClick={goNextQuestion}>Next</div>
        </div>
      </div>
      <div className="professor w-25 position-fixed"></div>
      <div className="floor w-100 position-absolute"></div>
    </div>
  );
}
