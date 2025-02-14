import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Start from './Pages/Start';

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/register" element={<Register />} />
      </Routes>
     </Router>
  
  )
}

export default App
