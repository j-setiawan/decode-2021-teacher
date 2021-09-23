import React from "react";

const Questions = (props) => {
  const { pollId, question, choices } = props.props;
  console.log(pollId, question, choices);
  return (
    <div>
      <div className="questionName">{question}</div>
      {choices.map((choice, idx) => (
        <button key={idx} className={choice["choiceId"]}>
          {choice["description"]}
        </button>
      ))}
    </div>
  );
};

export default Questions;