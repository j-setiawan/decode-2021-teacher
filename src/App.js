
import './App.css';
import Questions from './components/polls/questions/Questions';
import WelcomePage from './components/Welcome Page/WelcomePage';
import Storybook, { CarouselItem } from './components/storybook/Storybook';
import Emotions from "./components/emotions/Emotions";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import styled from 'styled-components';
import OnlineUsers from "./components/onlineUsers/OnlineUser";
import React, { useState, useEffect, useRef } from "react";
import DateTime from './components/storybook/DateTime';
import PollView from './components/poll-view/PollView';
import { MessagingService } from "./MessagingService";

export const MessagingServiceContext = React.createContext();
const messagingService = new MessagingService();

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
  return loadingState
    ? (<div>loading messaging service...</div>)
    : (
      <div className="App">
        <MessagingServiceContext.Provider value={messagingService}>
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/welcome" component={WelcomePage} />
                <Route path="/storybook" component={Storybook} />
                <Route component={Error} />
              </Switch>
            </div>
          </BrowserRouter>
          <div><PollView></PollView></div>
          <Emotions students={students} />
        </MessagingServiceContext.Provider>
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

function ToggleGroup({ buttonTags }) {
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
