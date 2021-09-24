import React from "react";
import "./PollView.css";
import "@fontsource/poppins";
import AddPoll from "../../static/add-poll.svg";
import BarChart from "../../static/bar-chart.svg";

const PollView = (props) => {

    function CreateNewPoll() {
        console.log("Create new Poll");
    }

    function getId(event) {
        console.log(event.target.id);
    }

  return (
    <div class="main-div">
        <img src={BarChart} alt="bar chart svg"></img>
        <button class="button-create-poll" onClick={CreateNewPoll}>
            <img src={AddPoll} alt="adding a new poll"></img>
            Create new poll
        </button>
        <div className="box">
            <div id = "Poll1" class = "box-text" onClick={event => getId(event)}> Poll #1</div>
        </div>
        <div className="box">
            <div id = "Poll2" class = "box-text" onClick={event => getId(event)}> Poll #2</div>
        </div>
        <div className="box">
            <div id = "Poll3" class = "box-text" onClick={event => getId(event)}> Poll #3</div>
        </div>
        <div className="box">
            <div id = "Poll4" class = "box-text" onClick={event => getId(event)}> Poll #4</div>
        </div>
    </div> 
  );
};
export default PollView;
