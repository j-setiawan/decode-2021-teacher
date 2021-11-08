import React from "react";
import WorkBook from './WorkBook';
import Student from './Student';
import './WelcomePage.css';
import SentimentSatisfied from "../../static/sentiment_satisfied.svg";
import SentimentDissatisfied from "../../static/sentiment_dissatisfied.svg";
import ProfilePic from "../../static/ProfilePic.svg";


const welcomeInfo = {
		userName: "Mrs Flanders",
		workbooks: ["Dinosaurs", "Dinosaurs Eggs", "Dinosaur Train", "Dino Run!"],
		students: [
					{ name: "Donald", sentiment: SentimentSatisfied, profile: ProfilePic },
					{ name: "Nelson", sentiment: SentimentDissatisfied, profile: ProfilePic },
					{ name: "Ian Wong", sentiment: SentimentDissatisfied, profile: ProfilePic },
					{ name: "T-Rex", sentiment: SentimentSatisfied, profile: ProfilePic },
					{ name: "Mickey", sentiment: SentimentSatisfied, profile: ProfilePic },
					{ name: "Rickey", sentiment: SentimentSatisfied, profile: ProfilePic },
					{ name: "Winny", sentiment: SentimentSatisfied, profile: ProfilePic },
					{ name: "Donald", sentiment: SentimentSatisfied, profile: ProfilePic },
					{ name: "Milhouse", sentiment: SentimentDissatisfied, profile: ProfilePic },
					{ name: "Ralph", sentiment: SentimentSatisfied, profile: ProfilePic },
					{ name: "Mickey Mouse", sentiment: SentimentSatisfied, profile: ProfilePic },
					{ name: "Lisa Simpson", sentiment: SentimentSatisfied, profile: ProfilePic },
				]
	
	}

const WelcomePage = (props) => {
	const { userName, workbooks, students} = welcomeInfo;
	console.log(userName, workbooks, students);
	return (
		<div className="m32">
			<h1>Welcome <strong>{userName}!</strong></h1>
			<div className="flex-row">
				<section className="flex wide flex-column">
					<h2>Today's Workbooks</h2>
					{workbooks.map(workbook => <WorkBook name={workbook}/>)}
					<section>
						<h2>Recently Used</h2>
						{workbooks.map(workbook => <WorkBook name={workbook}/>)}
					</section>
				</section>
				<section className="flex flex-column wide">
					<h2>My Students</h2>
					<input size="small" placeholder="Filter by name" type="search" />
					{students.map(student => <Student name={student.name} profilePic={student.profile} sentiment={student.sentiment}/>)}
				</section>
			</div>
		</div>
	);
};

export default WelcomePage;