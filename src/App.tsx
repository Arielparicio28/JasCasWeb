 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Images from './components/Images'; 
import Home from './pages/Home';
import NavBar from './components/NavBar';
import ImagesView from './components/ImagesView';

const App = () => {
 

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="/image/:imageName" element={<ImagesView />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
