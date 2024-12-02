 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Images from './pages/Images'; 
import Home from './pages/Home';
import ImagesView from './components/ImagesView';
import About from './pages/About';
import Children from './pages/Children';
import Slider3D from './components/Slider3D';
import NavBar from './components/NavBar';

//Solo importar el navbar cuando ponga la app a funcionar
const App = () => {
 

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="/image/:imageName" element={<ImagesView />} />
        <Route path="/children" element={<Children />} />
        <Route path="/about" element={<About />} />
        <Route path="/slider" element={<Slider3D />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
