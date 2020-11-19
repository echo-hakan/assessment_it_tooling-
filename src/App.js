import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IT Tooling</h1>
        <h3></h3> 
        <input type="hidden" defaultValue={process.env.VAR_KEY_TEST} />
      </header>
    </div>
  );
}

export default App;
