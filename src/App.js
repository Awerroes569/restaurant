import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import Table from './components/pages/Table';
import Wrong from './components/pages/Wrong';
import Header from './components/views/Header';
import Footer from './components/views/Footer';

function App() {
  return (
    <Container className="min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<Table />} />
        <Route path="*" element={<Wrong />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
