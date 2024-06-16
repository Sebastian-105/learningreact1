//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from './components/Games';

import Home from './components/Home'
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Games" exact Component={Games} />
        </Routes>
        
      
      </header>
    </div>
    </Router>
  );
}

export default App;
