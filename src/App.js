import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Disclaimer from './components/pages/Disclaimer';
import Foot from './components/pages/Foot';

function App() {
  return (
    <>
    <Router>

    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/disclaimer' element={<Disclaimer/>}/>
    </Routes>
    <Foot/>
    </Router>
    </>
  );
}

export default App;
