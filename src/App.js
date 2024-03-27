import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Signup from './Pages/Signup'
import { EmailVerify } from './Pages/EmailVerify';
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import { ResetPassword } from './Pages/ResetPassword';
import { SetPassword } from './Pages/SetPassword';
import { CheckMail } from './Pages/CheckMail';
import { Profile } from './Pages/Profile';


function App() {
  return (
    <div className="w-full   bg-white text-black font-abhaya">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/verify-email' element={<EmailVerify />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element= {<Dashboard />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/resetpassword/:token' element={<SetPassword />} />
          <Route path='/check-mail' element={<CheckMail />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>


    </div>
  );
}

export default App;
