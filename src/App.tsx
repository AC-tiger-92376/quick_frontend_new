import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Start from './Pages/Start';

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Start />} />        
        <Route path="/register" element={<Register />} />
      </Routes>
     </Router>
  
  )
}

export default App
