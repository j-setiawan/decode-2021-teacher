
import './App.css';
import Questions from './components/polls/questions/Questions';
import WorkBookList from './Welcome Page/WelcomePage';
import Storybook, { CarouselItem } from './components/storybook/Storybook';
import Emotions from "./components/emotions/Emotions";



const welcomeInfo = {
  userName: "Mrs Flanders",
  workbooks: ["Dinosaurs", "Dinosaurs Eggs", "Dinosaur Train", "Dino Run!"],
  students: ["Mickey","Rickey", "Vinny", "the", "Poo"  ]

}

function App() {
  const students = {
    totalStudentsHappy: 1,
    totalStudentsNeutral: 15,
    totalStudentsSad: 23,
  };
  return (
    <div className="App">
      <WorkBookList props={welcomeInfo} />
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
      <Questions props={question} />
      <Emotions students={students} />
    </div>
  );
}

export default App;
