import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route path='/productpage' element={<ProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
