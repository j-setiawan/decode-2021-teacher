import './App.css';
import Questions from './components/polls/questions/Questions';
import Storybook, { CarouselItem } from './components/storybook/Storybook';

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
    </div>
  );
}

export default App;