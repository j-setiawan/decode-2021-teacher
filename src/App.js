import "./App.css";
import Emotions from "./components/emotions/Emotions";
import Questions from "./components/polls/questions/Questions";
import Storybook, { CarouselItem } from "./components/storybook/Storybook";
import Participants from "./components/participants/Participants";
import { useState } from "react";

function App() {
  const students = {
    totalStudentsHappy: 1,
    totalStudentsNeutral: 15,
    totalStudentsSad: 23,
  };

  const studentInfo = [
    {
      "name":"Student 1",
      "status":"Online",
      "emote":"Happy",
      "handRaised": 0
    },
    {
      "name":"Student 2",
      "status":"Online",
      "emote":"Sad",
      "handRaised": 1
    },
    {
      "name":"Student 3",
      "status":"Offline",
      "emote":"Sad",
      "handRaised": 0
    }
  ]

  const [studentData, updateStudentData] = useState(studentInfo)

  return (
    <div className="App">
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
      <Participants participantsList={studentData} />
    </div>
  );
}

export default App;
