import React from 'react';
import './App.css';
import Navbar from './components/Nav';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
            <main className="form-signin w-100 m-auto">
              <Routes>
                  <Route path='/' Component={Home}/>
                  <Route path='/login' Component={Login}/>
                  <Route path='/register' Component={Register}/>
              </Routes>
            </main>
          </BrowserRouter>
    </div>
  );
}

export default App;
