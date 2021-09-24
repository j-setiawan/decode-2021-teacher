import './App.css';
import Questions from './components/polls/questions/Questions';
import WorkBookList from './Welcome Page/WelcomePage';
import Storybook, { CarouselItem } from './components/storybook/Storybook';


const welcomeInfo = {
  userName: "Mrs Flanders",
  workbooks: ["Dinosaurs", "Dinosaurs Eggs", "Dinosaur Train", "Dino Run!"],
  students: ["Mickey","Rickey", "Vinny", "the", "Poo"  ]

}

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

    </div>
  );
}

export default App;