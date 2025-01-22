import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Menu from './pages/Menu.jsx';
import Contact from './pages/Contact.jsx';
import Book from './pages/Book.jsx';
import Gallery from './pages/Gallery.jsx'; // Import the Gallery page
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './pages/NotFound.jsx';
import NotFound from './pages/NotFound.jsx'; // Import the NotFound page

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/gallery" element={<Gallery />} /> {/* Add the gallery route */}

          <Route path="*" element={<NotFound />} /> {/* Add the NotFound route */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
