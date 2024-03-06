import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';


function App() {
  return (
    <div className="w-full  bg-black">
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>


    </div>
  );
}

export default App;
