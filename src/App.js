import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/home/home';


function App() {
  return (
  <>
      <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home/>} />
          </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
