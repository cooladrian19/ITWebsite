import './App.css';
import Home from "./Pages/Home"
import About from './Pages/About';
import WorkOrder from './Pages/WorkOrder';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className='App'><Home /></div>} />
      <Route path="/home" element={<div className='App'><Home /></div>} />
      <Route path="/about" element={<div className='App'><About /></div>} />
      <Route path="/workorder" element={<div className='App'><WorkOrder /></div>} />
    </Routes>
  );
}

export default App;
