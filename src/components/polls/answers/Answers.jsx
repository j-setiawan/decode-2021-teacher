import React, { useEffect, useContext, useState } from "react";
import ProgressBar from "../../progress-bar/ProgressBar";
import { MessagingServiceContext } from "../../../App";

const Answers = ({ question, a, b, c, responses }) => {
	const messageService = useContext(MessagingServiceContext);
	const [responseA, setResponseA] = useState(0);
	const [responseB, setResponseB] = useState(0);
	const [responseC, setResponseC] = useState(1);

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
	let highest = responseA;
	if (responseA < responseB) {
		highest = responseB;
	}
	if (highest < responseC) {
		highest = responseC;
	}

	const percentA = responseA / highest * 100;
	const percentB = responseB / highest * 100;
	const percentC = responseC / highest * 100;

	return (
		<div className="flex-column">
			<h1>{question}</h1>
			<Answer letter="A" question={a} value={responseA} color="green" total={percentA}></Answer>
			<Answer letter="B" question={b} value={responseB} color="yellow" total={percentB}></Answer>
			<Answer letter="C" question={c} value={responseC} color="blue" total={percentC}></Answer>
			<section className="flex-row">
				<div className="flex"></div>
				<button>Post Result</button>
			</section>
		</div>
	);
};

function Answer({letter, question, value, color, total}) {

	return (
		<section className="flex-row center">
			<section>
				<strong>{letter}:</strong>
			</section>
			<section className="flex relative">
				<div className={"fill " + color} style={{width: `${total}%`}}></div>
				<div className="left" style={{zIndex: "10", position: "relative"}}>{question}</div>
			</section>
			<section>
				{value}
			</section>
		</section>
	)
}

export default Answers;
