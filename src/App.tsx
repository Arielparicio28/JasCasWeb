 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Images from './components/Images'; 
import Home from './pages/Home';
import NavBar from './components/NavBar';
import ImagesView from './components/ImagesView';
import About from './components/About';
import Children from './components/Children';


const App = () => {
 

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="/image/:imageName" element={<ImagesView />} />
        <Route path="/children" element={<Children />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
