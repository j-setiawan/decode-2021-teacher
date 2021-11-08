import React from "react";
import Emotions from "../emotions/Emotions";
import OnlineUsers from "../onlineUsers/OnlineUser";
import PollView from "../poll-view/PollView";
import "./StoryBookSidePanel.css";
const StoryBookSidePanel = (props) => {
	return (
		<div className="StoryBookSidePanel flex-column">
			<div className="flex-row m32 center">
				<div className="flex">Activity</div>
				<div className="flex">Messages</div>
				<div className="flex">Review</div>
			</div>
			<Emotions/>
			<section className="flex vertical-scroll">
				<OnlineUsers></OnlineUsers>
			</section>
			<PollView></PollView>
		</div>
	);
};
export default StoryBookSidePanel;
