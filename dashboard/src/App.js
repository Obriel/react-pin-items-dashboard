import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Dashboard />}>
            {/* <Dashboard /> */}
          </Route>
          <Route path="/page1" element={<Page1 />}>
            {/* <Page1 /> */}
          </Route>
          <Route path="/page2" element={<Page2 />}>
            {/* <Page2 /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
