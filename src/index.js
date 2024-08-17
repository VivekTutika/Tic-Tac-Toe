import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import RecentWinsPage from './components/RecentWinsPage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/recent-wins" element={<RecentWinsPage />} />
      </Routes>
  </Router>,
  document.getElementById('root')
);
