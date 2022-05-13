/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

import React from "react";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";

const App = () =>  {
    return (
        <Router>
        <div>
          <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
            <ul className="header">
              <li><NavLink exact to = "/">Home</NavLink></li>
              <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
              <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>

            </ul>
          <div className="content">
              <li><NavLink exact to = "/">Home</NavLink></li>
              <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
              <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
          </div>
        </div>
        </Router>
    );
}
 
export default App;

