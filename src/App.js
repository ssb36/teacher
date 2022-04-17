import { Route, Routes } from 'react-router';
import './App.css';
import { Admin } from './components/Admin/Admin';
import { Home } from './components/Home/Home';
import { Teachers } from './components/List/Teachers';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/teachers' element={<Teachers />} />
      </Routes>
    </div>
  );
}

export default App;
