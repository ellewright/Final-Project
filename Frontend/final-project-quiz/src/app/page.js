"use client";

import { useState, useEffect } from "react";
import questions from "./questions";

const darkPink = "#F9476C";
const lightPink = "#FF8195";
const tan = "#FDD5CB";
const eggshell = "#FAF2E8";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    const shuffled = shuffle([...questions]);
    const updatedQuestions = shuffled.map((question) => ({
      ...question,
      possibleAnswers: shuffle([...question.possibleAnswers])
    }));
    setShuffledQuestions(updatedQuestions);
  }, []);

  function handleAnswerSelected(questionId, selectedAnswer) {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer
    }));
  }

  function handleSubmit() {
    // Check if all questions have been answered
    if (Object.keys(selectedAnswers).length === questions.length) {
      // Calculate correct answers
      let correctAnswersCount = 0;
      shuffledQuestions.forEach((question) => {
        if (selectedAnswers[question.value] === question.correctAnswer) {
          correctAnswersCount++;
        }
      });
      // Show results
      setShowResults(true);
      alert(`You got ${correctAnswersCount} correct answers out of ${questions.length}.`);
    } else {
      alert("Please answer all questions before submitting.");
    }
  }

  return (
    <div className="quiz flex-col">
      <div className="border-2 p-2">
        {shuffledQuestions.map((question, index) => (
          <Question
            key={index}
            question={question}
            onAnswerSelected={handleAnswerSelected}
          />
        ))}
      </div>
      <div className="flex items-center justify-center p-2 border-2 rounded-md">
        <button className="border-2 p-2 rounded-md" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {showResults && (
        <div>
          {/* Display results here*/}
        </div>
      )}
    </div>
  );
}

function Question({ question, onAnswerSelected }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function onButtonClick(answer) {
    setSelectedAnswer(answer);
    onAnswerSelected(question.value, answer);
  }

  return (
    <div>
      <h2 className="flex question border-2 p-2 items-center justify-center rounded-md">{question.value}</h2>
        <div className="flex space-x-4 items-center justify-center">
          {question.possibleAnswers.map((answer, index) => (
            <Button
              key={index}
              value={answer}
              onClick={() => onButtonClick(answer)}
              isSelected={selectedAnswer === answer}
              color={selectedAnswer === answer ? darkPink : lightPink}
            />
          ))}
        </div>
    </div>
  );
}

function Button({ value, onClick, isSelected, color }) {
  return (
    <button className={`button ${isSelected ? 'selected' : ''} border-2 p-6 rounded-md`} onClick={onClick} style={{backgroundColor: color}}>
      {value}
    </button>
  );
}

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Quiz />
    </div>
  );
}