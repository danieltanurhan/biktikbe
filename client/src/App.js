import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MessagePage from './pages/MessagePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} exact />
        <Route path="/message" element={<MessagePage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;