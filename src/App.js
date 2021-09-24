
import './App.css';
import Questions from './components/polls/questions/Questions';
import WelcomePage from './components/Welcome Page/WelcomePage';
import Storybook, { CarouselItem } from './components/storybook/Storybook';
import Emotions from "./components/emotions/Emotions";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  const students = {
    totalStudentsHappy: 1,
    totalStudentsNeutral: 15,
    totalStudentsSad: 23,
  };
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/" component={WelcomePage} exact/> -- change to login
             <Route path="/welcome" component={WelcomePage}/>
             <Route path="/storybook" component={Storybook}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
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
    </div>
  );
}

export default App;
