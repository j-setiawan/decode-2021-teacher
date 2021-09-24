import React, { useEffect, useContext, useState } from "react";
import ProgressBar from "../../progress-bar/ProgressBar";
import { MessagingServiceContext } from "../../../App";

const Answers = ({ question, responses }) => {
  const messageService = useContext(MessagingServiceContext);
  const [responseA, setResponseA] = useState(0);
  const [responseB, setResponseB] = useState(0);
  const [responseC, setResponseC] = useState(0);

  useEffect(() => {
    console.log("isPrinted");
    messageService.subscribeToTopic(
      "workbook/poll/answer",
      (receivedMessage) => {
        console.log(receivedMessage["answer"]);
        if (receivedMessage["answer"] === "A") setResponseA(responseA + 1);
        if (receivedMessage["answer"] === "B") setResponseB(responseB + 1);
        if (receivedMessage["answer"] === "C") setResponseC(responseC + 1);
      }
    );
  }, [messageService, responseA, responseB, responseC]);
  console.log(question);
  const totalResponse = responseA + responseB + responseC;

  return (
    <div>
      <h1>{question}</h1>
      <span> A: {responseA} </span>{" "}
      <ProgressBar percentage={(responseA / totalResponse) * 100} />
      <span> B: {responseB}</span>{" "}
      <ProgressBar percentage={(responseB / totalResponse) * 100} />
      <span> C: {responseC} </span>{" "}
      <ProgressBar percentage={(responseC / totalResponse) * 100} />
    </div>
  );
};

export default Answers;
