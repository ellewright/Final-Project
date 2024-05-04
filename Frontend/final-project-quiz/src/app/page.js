"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import questions from "./questions";

const darkPink = "#f43f5e";
const lightPink = "#fb7185";
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
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const router = useRouter();

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
      score = correctAnswersCount;
      router.push("/results");
    } else {
      alert("Please answer all questions before submitting.");
    }
  }

  return (
    <div className="quiz flex-col rounded-md">
      <div className="p-2">
        {shuffledQuestions.map((question, index) => (
          <Question
            key={index}
            question={question}
            onAnswerSelected={handleAnswerSelected}
          />
        ))}
      </div>
      <div className="flex items-center justify-center p-2 rounded-md">
        <button className="text-gray-800 font-sans border-2 border-rose-300 p-4 rounded-md bg-rose-100 hover:bg-rose-200 active:bg-rose-300 focus:outline-none focus:ring focus:ring-rose-500" onClick={handleSubmit}>
          Submit
        </button>
      </div>
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
      <h2 className="flex text-rose-300 question p-2 items-center justify-center rounded-md font-sans">{question.value}</h2>
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
    <button className={`button ${isSelected ? 'selected' : ''} border-2 p-2 rounded-md font-sans border-rose-300 text-rose-200`} onClick={onClick} style={{backgroundColor: color}}>
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

export let score;