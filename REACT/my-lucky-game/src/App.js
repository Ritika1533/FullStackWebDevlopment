
import './App.css';
import Dice from "./Dice"
import Die from "./Die"
function App() {
  return (
    <div className="App">
      <Dice dice={[6,8,8,9,0]} color="green"/>
      <Dice dice={[0,6,0]} color="yellow"/>
    </div>
  );
}

export default App;
