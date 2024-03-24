import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Signup from './Pages/Signup'
import { EmailVerify } from './Pages/EmailVerify';
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';


function App() {
  return (
    <div className="w-full   bg-black text-white font-abhaya">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/verify-email' element={<EmailVerify />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element= {<Dashboard />} />
        </Routes>


    </div>
  );
}

export default App;
