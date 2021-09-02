import { Route, Switch, Link } from 'react-router-dom';

import Routes from './config/Routes';
import Nav from './components/Nav/Nav';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Nav/>
      <Routes/>
    </div>
  );
}

export default App;
