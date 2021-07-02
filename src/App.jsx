import React from 'react';
import Intro from './Intro.jsx';
import Featured from './Featured.jsx';
import Header from './Header.jsx';
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;