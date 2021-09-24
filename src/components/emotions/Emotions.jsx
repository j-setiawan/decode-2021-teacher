import React from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import "./Emotions.css";
import SentimentSatisfied from "../../static/sentiment_satisfied.svg";
import SentimentNeutral from "../../static/sentiment_neutral.svg";
import SentimentDissatisfied from "../../static/sentiment_dissatisfied.svg";
const Emotions = (props) => {
  const totalStudents =
    props.students.totalStudentsHappy +
    props.students.totalStudentsNeutral +
    props.students.totalStudentsSad;
  return (
    <div className="Emotions">
      <div className="Emotions-row">
        <div className="Emotions-emoji">
          <img src={SentimentSatisfied} alt="HAPPY" />
        </div>
        <ProgressBar
          percentage={(props.students.totalStudentsHappy / totalStudents) * 100}
        ></ProgressBar>
        <div className="Emotions-result">
          {props.students.totalStudentsHappy}
        </div>
      </div>
      <div className="Emotions-row">
        <div className="Emotions-emoji">
          <img src={SentimentNeutral} alt="NEUTRAL" />
        </div>
        <ProgressBar
          percentage={
            (props.students.totalStudentsNeutral / totalStudents) * 100
          }
        ></ProgressBar>
        <div className="Emotions-result">
          {props.students.totalStudentsNeutral}
        </div>
      </div>
      <div className="Emotions-row">
        <div className="Emotions-emoji">
          <img src={SentimentDissatisfied} alt="SAD" />
        </div>
        <ProgressBar
          percentage={(props.students.totalStudentsSad / totalStudents) * 100}
        ></ProgressBar>
        <div className="Emotions-result">{props.students.totalStudentsSad}</div>
      </div>
    </div>
  );
};
export default Emotions;
