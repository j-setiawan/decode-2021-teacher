import './App.css';
import Questions from './components/polls/questions/Questions';
import Storybook, { CarouselItem } from './components/storybook/Storybook';
import DateTime from './components/storybook/DateTime';
import styled from 'styled-components';
import React, { useState } from "react";

const headerButtons = ['Start Lesson Plan', 'End Lesson Plan'];
const footerButtons = ['Post Workbook'];


function App() {
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

  return (
    <div className="App">
      <Questions props={question} />
      <DateTime>
      </DateTime>
      <ToggleGroup buttonTags = {headerButtons}/>
      <Storybook>
        <CarouselItem>
          <h3>Agenda for teacher </h3>
        </CarouselItem>
        <CarouselItem>
          <h3>Second Slide Label</h3>
        </CarouselItem>
        <CarouselItem>
        <h3>Third Slide Label</h3>
        </CarouselItem>
      </Storybook>
      <ToggleGroup buttonTags = {footerButtons}/>
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
