
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './webpage/Home';
import Cart from './webpage/Cart';
import Navbar from './componante/Navbar';

function App() {
  return (
    <div >
     
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/cart" element={<Cart />} > </Route>
        </Routes>

    
    </div>

  );
}

export default App;
