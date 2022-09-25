import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
