import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from './components/Intro';
import Offer from './components/Offer';
import Mail from './components/Mail';
import Greetings from './components/Greetings';
import GamePlayDisabled from './components/GamePlayDisabled';
import Error from './components/Error';
import './App.css';

export default function App() {

  const [screen, setScreen] = useState(1);

  useEffect(() => {

  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Intro />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/greetings" element={<Greetings />} />
        <Route path="/gameplaydisabled" element={<GamePlayDisabled />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}