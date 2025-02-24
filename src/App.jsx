import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FrontPage from './FrontPage';
import Login from './assets/components/functional/loginForm';
import Signup from './assets/components/functional/SignUp';
import Dashboard from './assets/pages/Dashboard';
import Home from './assets/pages/Home';


function App() {
  

  return (
    <div >
      <FrontPage />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
    </div>
  
  )
}
export default App;
