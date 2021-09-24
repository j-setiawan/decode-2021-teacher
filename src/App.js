import "./App.css";
import Emotions from "./components/emotions/Emotions";

function App() {
  const students = {
    totalStudentsHappy: 1,
    totalStudentsNeutral: 15,
    totalStudentsSad: 23,
  };
  return (
    <div className="App">
      <Emotions students={students} />
    </div>
  );
}

export default App;
