import logo from "./logo.svg";
import "./App.scss";
// import ClassComponent from "./exmaple/mycomponent";
import ListTodo from "./Todos/ListTodo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>Simple Todo app with React</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <ClassComponent /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
