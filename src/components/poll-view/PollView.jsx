import React from "react";
import "./PollView.css";
import "@fontsource/poppins";
import AddPoll from "../../static/add-poll.svg";
import BarChart from "../../static/bar-chart.svg";

const PollView = (props) => {
  function CreateNewPoll() {
    console.log("Create new Poll");
  }
  return (
    <div className="main-div">
      <img src={BarChart} alt="bar chart svg"></img>
      <button className="button-create-poll" onClick={CreateNewPoll}>
        <img src={AddPoll} alt="adding a new poll"></img>
        Create new poll
      </button>
      <div className="box">
        <div className="box-text"> Poll #1</div>
      </div>
      <div className="box">
        <div className="box-text"> Poll #2</div>
      </div>
      <div className="box">
        <div className="box-text"> Poll #3</div>
      </div>
      <div className="box">
        <div className="box-text"> Poll #4</div>
      </div>
    </div>
  );
};
export default PollView;
