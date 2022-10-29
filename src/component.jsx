import React, { useState } from "react";

export const Joke = () => {
  const [question, setQuestion] = useState(
    'Click the button "Question" to see a Joke'
  );
  const [answer, setAnswer] = useState();

  const funcQuestion = () => {
    let url = "https://official-joke-api.appspot.com/random_joke";

    async function funcFetch() {
      let response = await fetch(url);
      let responseTxt = await response.json();
      console.log(responseTxt);
      setQuestion(responseTxt.setup, question);
      setAnswer(responseTxt.punchline, answer);
    }
    funcFetch();
  };

  const funcAnswer = () => {
    document.getElementById("answer").style.display = "block";
  };

  return (
    <div>
      <button onClick={funcQuestion}>Question</button>
      <br />
      <br />
      <button onClick={funcAnswer}>Answer</button>
      <h2>{question}</h2>
      <p id="answer">{answer}</p>
    </div>
  );
};
