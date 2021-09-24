import './App.css';
import Questions from './components/polls/questions/Questions';


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
    </div>
  );
}

export default App;
