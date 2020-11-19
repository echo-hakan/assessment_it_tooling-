import logo from './logo.svg';
import './App.css';


function App() {
  var arr = ["b","o","n","u","s"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>IT Tooling</h1>
        <span>
        { arr.map((value, index) => {
          return <span> {value}</span>
        })}
        </span>
        <h3>de env code is: {process.env.REACT_APP_TEST}</h3>
      </header>
    </div>
  );
}

export default App;
