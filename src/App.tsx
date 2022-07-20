import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import NotHome from './pages/NotHome';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/not-home" element={<NotHome />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}