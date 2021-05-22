import React, { FC } from 'react';
import { AnswerObject } from '../pages/index';
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div className="question">
      <p className="question__number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} className="question__body" />
      <div className="question__answers">
        {answers.map((answer) => (
          <div
            key={answer}
            className={`
              question__answer 
              ${userAnswer?.answer === answer ? 'clicked' : ''}
              ${userAnswer?.correctAnswer === answer ? 'correct' : ''}
            `}
          >
            <button
              className="btn"
              value={answer}
              disabled={userAnswer ? true : false}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default QuestionCard;
