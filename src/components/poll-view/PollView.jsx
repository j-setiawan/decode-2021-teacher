import React, { useState } from "react";
import "./PollView.css";
import "@fontsource/poppins";
import AddPoll from "../../static/add-poll.svg";
import BarChart from "../../static/bar-chart.svg";
import Questions from "../polls/questions/Questions";
import Modals from "../polls/questions/Modals";

const PollView = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const createNewPoll = () => {
    setModalOpen(true);
  };

  return (
    <div class="main-div">
      <Modals componentToPassDown={<Questions />} isOpen={isModalOpen} />
      <img src={BarChart} alt="bar chart svg"></img>
      <button class="button-create-poll" onClick={createNewPoll}>
        <img src={AddPoll} alt="adding a new poll"></img>
        Create new poll
      </button>
      <div className="box">
        <div class="box-text"> Poll #1</div>
      </div>
      <div className="box">
        <div class="box-text"> Poll #2</div>
      </div>
      <div className="box">
        <div class="box-text"> Poll #3</div>
      </div>
      <div className="box">
        <div class="box-text"> Poll #4</div>
      </div>
    </div>
  );
};
export default PollView;
