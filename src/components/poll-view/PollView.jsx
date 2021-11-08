import React, { useState } from "react";
import "./PollView.css";
import AddPoll from "../../static/add-poll.svg";
import BarChart from "../../static/bar-chart.svg";
import Questions from "../polls/questions/Questions";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		width: "700px",
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};


const PollView = (props) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const createNewPoll = () => {
		setModalOpen(true);
	};

	return (
		<>
			<Modal
				isOpen={isModalOpen}
				contentLabel="Example Modal"
				style={customStyles}
				onRequestClose={() => setModalOpen(false)}
			>
				<Questions />
			</Modal>
			<div className="flex-column">
				<section className="flex-row">
					<strong className="flex">Poll</strong>
					<div>
						<a href="#id" className="flex-row center" onClick={createNewPoll}>
							<img src={AddPoll} alt="adding a new poll"></img>{" "}
							<section>Create new poll</section>
						</a>
					</div>
				</section>
				<div className="box">
					<div class="center"> Poll #1</div>
				</div>
				<div className="box">
					<div class="center"> Poll #2</div>
				</div>
				<div className="box">
					<div class="center"> Poll #3</div>
				</div>
			</div>
		</>
	);
};
export default PollView;
