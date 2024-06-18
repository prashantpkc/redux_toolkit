// src/App.jsx
import './App.css';
import DarkTheme from './features/darkTheme/DarkTheme';
import { Counter } from './features/counter/Counter';


function App() {

  return (
    <div className="App">
        <Counter/>
        <DarkTheme/>
      
    </div>
  );
}

export default App;
