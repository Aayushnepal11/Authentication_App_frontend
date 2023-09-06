import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Nav';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';


function App() {
  const [name, setName]= useState<String>('');
    useEffect(() => {
        // Executing the async function inside the useEffect
        (
            async () => {
                const response = await fetch("http://127.0.0.1:8000/users/user/", {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                  });
                  const content = await response.json()
                  setName(content.name);
            }
        )();
    });
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar name={name} setName={setName}/>
            <main className="form-signin w-100 m-auto">
              <Routes>
                  <Route path='/' Component={() => <Home name={name}/>}/>
                  <Route path='/login' Component={() => <Login setName={setName}/>}/>
                  <Route path='/register' Component={Register}/>
              </Routes>
            </main>
          </BrowserRouter>
    </div>
  );
}

export default App;
