import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import Profile from './component/Profile';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
