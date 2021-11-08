import React, { useState, useContext, useEffect } from "react";
import { UIStore } from "../../../store";
import { v4 as uuidv4 } from "uuid";
import { MessagingServiceContext } from "../../../App";
import "./Questions.css";
import Answers from "../answers/Answers";

const Questions = () => {
	const [question, setQuestion] = useState("What do you eat?");
	const [responseA, setResponseA] = useState("Meat, like a Carnivore");
	const [responseB, setResponseB] = useState("Veggies, like a Herbivore");
	const [responseC, setResponseC] = useState("Both, like an Omnivore");
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
		});
		setIsDisplayed(true);
	};

	return (
		<div className="flex-column">
			{isDisplayed ? (
				<Answers question={question} responses={responses} a={responseA} b={responseB} c={responseC} />
			) : undefined}
			{!isDisplayed && (
				<>
					<strong>New Poll</strong>
					<section>
						<input
							type="text"
							onChange={(e) => setQuestion(e.target.value)}
							placeholder="Type your question here"
							value={question}
						/>
					</section>
					<div className="flex-column">
						<section className="flex-row">
							<strong className="mr8">A:</strong>
							<div className="flex">
								<input
									type="text"
									placeholder="Poll option"
									onChange={(e) => setResponseA(e.target.value)}
									value={responseA}
								/>
							</div>
						</section>
						<section className="flex-row">
							<strong className="mr8">B:</strong>
							<div className="flex">
								<input
									type="text"
									placeholder="Poll option"
									onChange={(e) => setResponseB(e.target.value)}
									value={responseB}
								/>
							</div>
						</section>
						<section className="flex-row">
							<strong className="mr8">C:</strong>
							<div className="flex">
								<input
									type="text"
									placeholder="Poll option"
									onChange={(e) => setResponseC(e.target.value)}
									value={responseC}
								/>
							</div>
						</section>
					</div>
					<section className="flex-row">
						<div className="flex"></div>
						<button className="createPoll" onClick={submitClick}>
							Create Poll
						</button>
					</section>
				</>
			)}
		</div>
	);
};
export default Questions;
