
import './App.css';
import Questions from './components/polls/questions/Questions';
import WelcomePage from './components/Welcome Page/WelcomePage';
import Storybook, { CarouselItem } from './components/storybook/Storybook';
import Emotions from "./components/emotions/Emotions";

import OnlineUsers from "./components/onlineUsers/OnlineUser";
import Questions from "./components/polls/questions/Questions";
import Storybook, { CarouselItem } from "./components/storybook/Storybook";
import React, {useState, useEffect, useRef } from "react";

import { MessagingService } from "./MessagingService";

export const MessagingServiceContext = React.createContext();
const messagingService = new MessagingService();
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import DateTime from './components/storybook/DateTime';
import styled from 'styled-components';
import React, { useState } from "react";
import PollView from './components/poll-view/PollView';

const welcomeInfo = {
  userName: "Mrs Flanders",
  workbooks: ["Dinosaurs", "Dinosaurs Eggs", "Dinosaur Train", "Dino Run!"],
  students: ["Mickey", "Rickey", "Vinny", "the", "Poo"]
}

function App() {
  const messageService = useRef(messagingService);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const connectToBroker = async () => {
      await messageService.current.connect();
      setLoadingState(false);
    }
    const cleanup = () => messageService.current.disconnect();
    connectToBroker();
    return cleanup;
  }, [messageService]);

  const students = {
    totalStudentsHappy: 1,
    totalStudentsNeutral: 15,
    totalStudentsSad: 23,
  };
  return loadingState 
  ? (<div>loading messaging service...</div>) 
  : (
    <div className="App">
      <MessagingServiceContext.Provider value={messagingService}>
      <Questions />
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
      <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/" component={Login} exact/>
             <Route path="/welcome" component={WelcomePage}/>
             <Route path="/storybook" component={Storybook}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
      <Storybook>
        <CarouselItem>
          <h3>Dinosaurs</h3>
        </CarouselItem>
        <CarouselItem>
          <h3>Second Slide Label</h3>
        </CarouselItem>
        <CarouselItem>
          <h3>Third Slide Label</h3>
        </CarouselItem>
      </Storybook>
      <Emotions students={students} />
      <OnlineUsers />
      </MessagingServiceContext.Provider>
      <Emotions students = {students} />
      <div><PollView></PollView></div>
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
