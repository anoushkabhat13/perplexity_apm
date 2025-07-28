// src/App.js


import Home from './home';
import { Routes, Route } from 'react-router-dom';
import ExceptionalTalent from './exceptionalTalent';
import Projects from './projects';
import Leadership from './leadership';
import Internships from './internships';
import Discover from './discover';
export default function App() {
  return (
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/exceptional-talent" element={<ExceptionalTalent />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/discover" element={<Discover />} />
    </Routes>
  );
}
