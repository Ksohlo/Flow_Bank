import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import './App.css'
import SignUp from './pages/signup';
import Login from './pages/Login';



function App() {


  return (
    <>
      <Router >
        <NavBar />
        <Routes>
          <Route element={ <Home /> } path='/' exact /> 
          <Route element={ <SignUp /> } path='/open' exact />
          <Route element={ <Login /> } path='/login' exact />
        </Routes>
      </Router>
    </>
  )
}

export default App
