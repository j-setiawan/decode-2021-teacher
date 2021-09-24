import React from "react";
import WorkBook from './WorkBook';
import Student from './Student';
import './WelcomePage.css'
const welcomeInfo = {
    userName: "Mrs Flanders",
    workbooks: ["Dinosaurs", "Dinosaurs Eggs", "Dinosaur Train", "Dino Run!"],
    students: ["Mickey","Rickey", "Winny", "the", "Pooh"  ]
  
  }


const WelcomePage = (props) => {
  const { userName, workbooks, students} = welcomeInfo;
  console.log(userName, workbooks, students);
  return (
    <div>
        <h1 style={{textAlign:'left', padding:'2rem'}}>Welcome {userName}!</h1>
        <div className="workBookList flex-container">
            <div className="flex-child">
                <h2 style={{textAlign:'left', paddingLeft:'2rem'}}>Work Books</h2>
                {
                workbooks.map(workbook => <WorkBook name={workbook}
                />)
                }
            </div>
            <div className="flex-child">
                <h2 style={{textAlign:'left', paddingLeft:'2rem'}}>Students</h2>
                {
                students.map(student => <Student name={student}
                />)
                }
            </div>
            
    </div>

      {/* <div className="questionName">{question}</div>
      {choices.map((choice, idx) => (
        <button key={idx} className={choice["choiceId"]}>
          {choice["description"]}
        </button>
      ))}*/}
    </div>
  );
};

export default WelcomePage;