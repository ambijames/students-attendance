import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import CreateStudent from './pages/CreateStudent';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/create-student' element={<CreateStudent />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
