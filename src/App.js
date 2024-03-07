import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Signup from './Pages/Signup'


function App() {
  return (
    <div className="w-full  bg-black text-white font-abhaya">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>


    </div>
  );
}

export default App;
