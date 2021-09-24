import logo from './logo.svg';
import './App.css';
import WorkBookList from './Welcome Page/WelcomePage';
const welcomeInfo = {
  userName: "Mrs Flanders",
  workbooks: ["Dinosaurs", "Dinosaurs Eggs", "Dinosaur Train", "Dino Run!"],
  students: ["Mickey","Rickey", "Vinny", "the", "Poo"  ]

}


function App() {
  return (
    <div className="App">
        <WorkBookList props={welcomeInfo} />

    </div>
  );
}

export default App;
