import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/header";
import Events from './pages/events/events';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sponsor from "./pages/sponsors/section";
import Blogs from "./pages/blog/blogs";
import Blog from "./pages/blog/moreblog/blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
