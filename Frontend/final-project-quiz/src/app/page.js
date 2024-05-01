"use client";

import { useState } from "react";

const questions = [
  {
    value: "What city was Ellie born in?",
    possibleAnswers: ["Louisville", "Kansas City", "Chicago", "Boston"],
    correctAnswer: "Louisville"
  },
  {
    value: "What is Ellie's favorite color?",
    possibleAnswers: ["Orange", "Purple", "Pink", "Blue"],
    correctAnswer: "Pink"
  },
  {
    value: "What animal was Ellie's stuffed animal as a kid?",
    possibleAnswers: ["Penguin", "Elephant", "Dog", "Tarantula"],
    correctAnswer: "Elephant"
  },
  {
    value: "What was Ellie's major while at university?",
    possibleAnswers: ["Marketing", "Theatre", "Computer Science", "Psychology"],
    correctAnswer: "Psychology"
  },
  {
    value: "Which instrument does Ellie not play?",
    possibleAnswers: ["Guitar", "Flute", "Keyboard", "Drums"],
    correctAnswer: "Flute"
  },
  {
    value: "Who is the author of Ellie's favorite book?",
    possibleAnswers: ["J.K. Rowling", "F. Scott Fitzgerald", "J.D. Salinger", "Dalton Trumbo"],
    correctAnswer: "Dalton Trumbo"
  },
  {
    value: "What is Ellie's favorite fruit?",
    possibleAnswers: ["Kiwi", "Pear", "Banana", "Apple"],
    correctAnswer: "Banana"
  },
  {
    value: "What spoken language is Ellie learning on Duolingo?",
    possibleAnswers: ["Spanish", "Italian", "Mandarin", "French"],
    correctAnswer: "Spanish"
  },
  {
    value: "Which is Ellie's favorite cuisine?",
    possibleAnswers: ["Korean", "Cuban", "German", "Italian"],
    correctAnswer: "Cuban"
  },
  {
    value: "Which show does Ellie not enjoy?",
    possibleAnswers: ["30 Rock", "Trailer Park Boys", "South Park", "Rick & Morty"],
    correctAnswer: "Rick & Morty"
  }
]

function Quiz() {

  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  function handleAnswerSelected(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
  }

  function handleSubmit() {
    alert(`You got ${correctAnswersCount} correct answers out of ${questions.length}.`);
  }

  return <>
    <div>
      {questions.map((question, index) => (
        <Question
        key={index}
        value={question.value}
        possibleAnswers={question.possibleAnswers}
        correctAnswer={question.correctAnswer}
        onAnswerSelected={handleAnswerSelected}
        />
      ))}
    </div>
    <div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  </>
}
function Question({value, possibleAnswers, correctAnswer, onAnswerSelected}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  function onButtonClick(answer) {
    setSelectedAnswer(answer);
    onAnswerSelected(answer, correctAnswer);
  }

  return <>
      <h2 className="question">{value}</h2>
      {possibleAnswers.map((answer, index) => (
          <Button
            key={index}
            value={answer}
            onClick={() => onButtonClick(answer)}
            isSelected={selectedAnswer === answer}
          />
        ))}
  </>
}

function Button({value, onClick, isSelected}) {
  return <button className={`button ${isSelected ? 'selected' : ''}`} onClick={onClick}>
    {value}
  </button>
}

export default function Home() {
  return (
    <div>
      <Quiz />
    </div>
  );
}
