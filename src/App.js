import "./App.css";
import Emotions from "./components/emotions/Emotions";
import OnlineUsers from "./components/onlineUsers/OnlineUser";
import Questions from "./components/polls/questions/Questions";
import Storybook, { CarouselItem } from "./components/storybook/Storybook";
import React, { useState, useEffect, useRef } from "react";

import { MessagingService } from "./MessagingService";

export const MessagingServiceContext = React.createContext();
const messagingService = new MessagingService();

function App() {
  const messageService = useRef(messagingService);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const connectToBroker = async () => {
      await messageService.current.connect();
      setLoadingState(false);
    };
    const cleanup = () => messageService.current.disconnect();
    connectToBroker();
    return cleanup;
  }, [messageService]);

  const students = {
    totalStudentsHappy: 1,
    totalStudentsNeutral: 15,
    totalStudentsSad: 23,
  };
  return loadingState ? (
    <div>loading messaging service...</div>
  ) : (
    <div className="App">
      <MessagingServiceContext.Provider value={messagingService}>
        <Questions />
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
    </div>
  );
}

export default App;
