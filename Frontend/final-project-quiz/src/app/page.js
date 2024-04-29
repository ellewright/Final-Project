"use client";

import { useState } from "react";

function Quiz() {
return <>
  <Question value={"Question 1."} />
  <Question value={"Question 2."} />
  <Question value={"Question 3."} />
</>
}

function Question({value}) {
  function onButtonClick() {}
  return <>
    <h2>{value}</h2>
    <Button value="Yes" onClick={() => onButtonClick()} />
    <Button value="Yes" onClick={() => onButtonClick()} />
    <Button value="Yes" onClick={() => onButtonClick()} />
    <Button value="Yes" onClick={() => onButtonClick()} />
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
