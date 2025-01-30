import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import Profile from './component/Profile';
import { auth } from './component/Firebase';
function App() {
  const [user, setUser] = useState()
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      setUser(user)
    });
  })
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={user ? <Profile /> : <Login />} />
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
