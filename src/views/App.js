import logo from './logo.svg';
import './App.scss';
import ClassComponent from './exmaple/mycomponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClassComponent/> 
      </header>
    </div>
  );
}

export default App;
