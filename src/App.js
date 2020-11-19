import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IT Tooling</h1>
        <h3>de env code is: {process.env.REACT_APP_TEST}</h3>
      </header>
    </div>
  );
}

export default App;
