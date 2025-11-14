import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
