import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Login } from './components/Login';

import { Nav } from './components/Nav';
import { Registration } from './components/Registration';

function App() {
  return (
    <div className="App">
        <Nav/>

        <hr/>

        <Registration/>

        <hr/>

        <Login />
    </div>
  );
}

export default App;
