import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';


function App() {
  return (
  <>
      <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
