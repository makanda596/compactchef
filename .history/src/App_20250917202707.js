import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Book from './pages/Book.jsx';
import Gallery from './pages/Gallery.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './pages/NotFound.jsx';
import Decor from './pages/Decor.jsx';

function Layout() {
  const location = useLocation();

  // Paths where you want to HIDE everything
  const hiddenPaths = ["/book"];

  // If current path is hidden, show only that page
  if (hiddenPaths.includes(location.pathname)) {
    return (
      <Routes>
        <Route path="/book" element={<Book />} />
      </Routes>
    );
  }

  // Otherwise, show full layout
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
