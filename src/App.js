
import Home from './Home';
import { Route, Routes} from 'react-router-dom';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Error from './Pages/Error';


function App() {
  return (
    <>
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/about" element={<About />} />
       <Route exact path="/services" element={<Services />} />
       <Route exact path="/contact" element={<Contact />} />
       <Route exact path="/" element={<Error/>} />
     </Routes>
     
    </>
  );
}

export default App;
