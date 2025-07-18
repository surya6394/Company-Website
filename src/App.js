import logo from './logo.svg';
import './App.css';
import Home from './Components/Screens/Home';
import { Route, Routes } from 'react-router-dom';
import { createContext, useReducer } from 'react';
import About from './Components/Screens/About';
import Services from './Components/Screens/Services';
import Navbar from './Components/Elements/Navbar';
import Contact from './Components/Screens/Contact';
import Footer from './Components/Elements/Footer';

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer();
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <div className='font-montserrat'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </UserContext.Provider>


    </>
  );
}

export default App;
