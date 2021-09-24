import React from "react";
import Emotions from "../emotions/Emotions";
import OnlineUsers from "../onlineUsers/OnlineUser";
import PollView from "../poll-view/PollView";
import "./StoryBookSidePanel.css";
const StoryBookSidePanel = (props) => {
  const students = {
    totalStudentsHappy: 1,
    totalStudentsNeutral: 15,
    totalStudentsSad: 23,
  };
  return (
    <div className="StoryBookSidePanel">
      <div className="StoryBookSidePanel-header">
        <div className="StoryBookSidePanel-headerItem">Activity</div>
        <div className="StoryBookSidePanel-headerItem">Messages</div>
        <div className="StoryBookSidePanel-headerItem">Review</div>
      </div>
      <Emotions students={students} />
      <OnlineUsers></OnlineUsers>
      <PollView></PollView>
    </div>
  );
};
export default StoryBookSidePanel;
