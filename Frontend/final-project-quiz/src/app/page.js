"use client";

import { useState } from "react";

function Quiz() {
return <>
  <Question value={"What city was Ellie born in?"} possibleAnswers={["Louisville", "Kansas City", "Chicago", "Boston"]} correctAnswer={"Louisville"} />
  <Question value={"What is Ellie's favorite color?"} possibleAnswers={["Orange", "Purple", "Pink", "Blue"]} correctAnswer={"Pink"} />
  <Question value={"What animal was Ellie's stuffed animal as a kid?"} possibleAnswers={["Penguin", "Elephant", "Dog", "Tarantula"]} correctAnswer={"Elephant"} />
  <Question value={"What was Ellie's major while at university?"} possibleAnswers={["Marketing", "Theatre", "Computer Science", "Psychology"]} correctAnswer={"Psychology"} />
  <Question value={"Which instrument does Ellie not play?"} possibleAnswers={["Guitar", "Flute", "Keyboard", "Drums"]} correctAnswer={"Flute"} />
  <Question value={"Who is the author of Ellie's favorite book?"} possibleAnswers={["J.K. Rowling", "F. Scott Fitzgerald", "J.D. Salinger", "Dalton Trumbo"]} correctAnswer={"Dalton Trumbo"} />
  <Question value={"What is Ellie's favorite fruit?"} possibleAnswers={["Kiwi", "Pear", "Banana", "Apple"]} correctAnswer={"Banana"} />
  <Question value={"What spoken language is Ellie learning on Duolingo?"} possibleAnswers={["Spanish", "Italian", "Mandarin", "French"]} correctAnswer={"Spanish"} />
  <Question value={"Which is Ellie's favorite cuisine?"} possibleAnswers={["Korean", "Cuban", "German", "Italian"]} correctAnswer={"Cuban"} />
  <Question value={"Which show does Ellie not enjoy?"} possibleAnswers={["30 Rock", "Trailer Park Boys", "South Park", "Rick & Morty"]} correctAnswer={"Rick & Morty"} />
</>
}

function Question({value, possibleAnswers, correctAnswer}) {
  function onButtonClick(answer) {
    console.log(`Selected answer: ${answer}`);

    if (answer === correctAnswer) {
      console.log("Correct!");
    }
  }
  return <>
      <h2 className="question">{value}</h2>
      {possibleAnswers.map((answer, index) => (
          <Button
            key={index}
            value={answer}
            onClick={() => onButtonClick(answer)}
          />
        ))}
  </>
}

function Button({value, onClick}) {
  return <button className="button" onClick={onClick}>
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
