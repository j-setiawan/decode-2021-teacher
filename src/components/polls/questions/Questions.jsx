import React, { useState } from "react";
import { UIStore } from "../../../store";

const Questions = (props) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [response_2, setResponse_2] = useState("");
  const [response_3, setResponse_3] = useState("");

  const submitClick = () => {
    const output = {
      question,
      response,
      response_2,
      response_3,
    };

    //store the poll
    UIStore.update((s) => {
      s.questionBank.push(output);
      console.log(UIStore);
    });
  };
  return (
    <div>
      <label>Enter your question?</label>
      <input type="text" onChange={(e) => setQuestion(e.target.value)} />
      <br />
      <label>Enter your response</label>
      <input
        type="text"
        placeholder="response 1"
        onChange={(e) => setResponse(e.target.value)}
      />
      <br />
      <label>Enter your response</label>
      <input
        type="text"
        placeholder="response 2"
        onChange={(e) => setResponse_2(e.target.value)}
      />
      <br />
      <label>Enter your response</label>
      <input
        type="text"
        placeholder="response 3"
        onChange={(e) => setResponse_3(e.target.value)}
      />
      <br />
      <button onClick={submitClick}>Create Poll</button>
    </div>
  );
};
export default Questions;
