import logo from './logo.svg';
import './App.css';
import Intro from './sections/Intro';
import AboutMe from './sections/AboutMe';

function App() {
  return (
    <div className="App">
        <Intro 
          name={"Pradeep Jadhav"}
        />
        <AboutMe />
    </div>
  );
}

export default App;
