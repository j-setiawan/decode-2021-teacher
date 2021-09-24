import React, { useState, useContext, useEffect } from "react";
import { UIStore } from "../../../store";
import { v4 as uuidv4 } from "uuid";
import { MessagingServiceContext } from "../../../App";
import "./Questions.css";
import Answers from "../answers/Answers";

const Questions = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [responses, setResponses] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const messageService = useContext(MessagingServiceContext);

  const submitClick = () => {
    const output = {
      pollId: uuidv4(),
      question,
      responses,
    };

    messageService.publishMessage("workbook/poll", output);

    //store the poll
    UIStore.update((s) => {
      s.questionBank.push(output);
      console.log(UIStore);
    });
    setIsDisplayed(true);
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
      {isDisplayed ? (
        <Answers question={question} responses={responses} />
      ) : undefined}
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

      <div className="polls">
        <div className="response">
          <h3 className="pollOptions">Poll Options</h3>
          {responses.map((response, idx) => (
            <div key={idx} className="pollOption">
              <p>{response}</p>
              <button onClick={() => deleteResponse(response)}>Delete</button>
            </div>
          ))}
        </div>

        <div className="button">
          <button className="createPoll" onClick={submitClick}>
            Create Poll
          </button>
        </div>
      </div>
    </div>
  );
};
export default Questions;
