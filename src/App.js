import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Checklist } from './Pages/Checklist/Checklist';
import { Home } from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checklist' element={<Checklist/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
