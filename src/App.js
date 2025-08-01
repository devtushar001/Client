import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Checklist } from './Pages/Checklist/Checklist';
import { Home } from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginSignup } from './Pages/LoginSignup/LoginSignup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checklist' element={<Checklist />} />
          <Route path='/sign-up' element={<LoginSignup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
