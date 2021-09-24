import './App.css';
import Questions from './components/polls/questions/Questions';
import WorkBookList from './Welcome Page/WelcomePage';
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
      {/* <Questions props={question} /> */}
    </div>
  );
}

export default App;
