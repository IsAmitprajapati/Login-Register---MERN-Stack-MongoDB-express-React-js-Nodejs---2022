import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { Login } from './Component/Login';
import Register from './Component/Register';
import "./Component/style.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import data from './ContextApi';
import { useState } from 'react';

function App() {
  const [userdata,setUserData] = useState({})
  
  return (
    <div className="App">
      <data.Provider value={{userdata,setUserData}}>
        <Router>
          <Routes>
            <Route path="/"
              element={userdata && userdata._id ? <Home /> : <Login/>}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </data.Provider>

    </div>
  );
}

export default App;
