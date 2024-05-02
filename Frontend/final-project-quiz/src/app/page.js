"use client";

import { useState, useEffect } from "react";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

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
    <>
      <div>
        {shuffledQuestions.map((question, index) => (
          <Question
            key={index}
            question={question}
            onAnswerSelected={handleAnswerSelected}
          />
        ))}
      </div>
      <div>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {showResults && (
        <div>
          {/* Display results here if needed */}
        </div>
      )}
    </>
  );
}

function Question({ question, onAnswerSelected }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function onButtonClick(answer) {
    setSelectedAnswer(answer);
    onAnswerSelected(question.value, answer);
  }

  return (
    <>
      <h2 className="question">{question.value}</h2>
      {question.possibleAnswers.map((answer, index) => (
        <Button
          key={index}
          value={answer}
          onClick={() => onButtonClick(answer)}
          isSelected={selectedAnswer === answer}
        />
      ))}
    </>
  );
}

function Button({ value, onClick, isSelected }) {
  return (
    <button className={`button ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default function Home() {
  return (
    <div>
      <Quiz />
    </div>
  );
}