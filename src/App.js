import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Events from "./pages/events/events";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/header";
import Blog from './pages/Blog/blogs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
