import React, { useState } from "react";
import { UIStore } from "../../../store";
import { v4 as uuidv4 } from "uuid";
import "./Questions.css";

const Questions = (props) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [responses, setResponses] = useState([]);

  const submitClick = () => {
    const output = {
      id: uuidv4(),
      question,
      responses,
    };

    //store the poll
    UIStore.update((s) => {
      s.questionBank.push(output);
      console.log(UIStore);
    });
  };

  const addPollItem = () => {
    setResponses((oldArray) => [...oldArray, response]);
    setResponse("");
  };

  const deleteResponse = (response) => {
    const newArray = responses.filter((r) => r !== response);
    setResponses(newArray);
  };
  return (
    <div className="questionCard">
      <div className="first">
        <h3>Enter your question</h3>
        <input
          type="text"
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
        />
      </div>
      <div className="second">
        <h3>Enter your poll option</h3>
        <div className="inner-second">
          <input
            type="text"
            placeholder="Poll option"
            onChange={(e) => setResponse(e.target.value)}
            value={response}
          />
          <button onClick={addPollItem}>Add Poll Item</button>
        </div>
      </div>

      <h3>Poll Options</h3>
      {responses.map((response, idx) => (
        <div key={idx} className="pollOption">
          <p>{response}</p>
          <button onClick={() => deleteResponse(response)}>Delete</button>
        </div>
      ))}
      <br />

      <button className="createPoll" onClick={submitClick}>
        Create Poll
      </button>
    </div>
  );
};
export default Questions;
