import "./App.css";
import Emotions from "./components/emotions/Emotions";
import OnlineUsers from "./components/onlineUsers/OnlineUser";
import Questions from "./components/polls/questions/Questions";
import Storybook, { CarouselItem } from "./components/storybook/Storybook";

function App() {
  const students = {
    totalStudentsHappy: 1,
    totalStudentsNeutral: 15,
    totalStudentsSad: 23,
  };
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
      <OnlineUsers />
    </div>
  );
}

export default App;
