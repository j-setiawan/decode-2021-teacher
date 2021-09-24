
import './App.css';
import Questions from './components/polls/questions/Questions';
import WorkBookList from './Welcome Page/WelcomePage';
import Storybook, { CarouselItem } from './components/storybook/Storybook';
import Emotions from "./components/emotions/Emotions";
import Login from './components/login/Login';
import DateTime from './components/storybook/DateTime';
import styled from 'styled-components';
import React, { useState } from "react";
const welcomeInfo = {
  userName: "Mrs Flanders",
  workbooks: ["Dinosaurs", "Dinosaurs Eggs", "Dinosaur Train", "Dino Run!"],
  students: ["Mickey", "Rickey", "Vinny", "the", "Poo"]

}

function App() {
  const students = {
    totalStudentsHappy: 1,
    totalStudentsNeutral: 15,
    totalStudentsSad: 23,
  };
  const question = {
    pollId: "123",
    question: "What is the name of the hackathon?",
    choices: [
      {
        choiceId: "435",
        description: "Decode"
      },
      {
        choiceId: "4356",
        description: "Newcode"
      }
    ]
  }

  const headerButtons = ['Start Lesson Plan', 'End Lesson Plan'];
  const footerButtons = ['Post Workbook'];

  return (
    <div className="App">
      <Emotions students = {students} />
    </div>
  );
}

export default App;

const Button = styled.button`
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  height: 40px;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function ToggleGroup( {buttonTags} ) {
  const [active, setActive] = useState(buttonTags[0]);
  return (
    <ButtonGroup>
      {buttonTags.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}
