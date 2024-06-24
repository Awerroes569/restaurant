import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import Table from './components/pages/Table';
import Wrong from './components/pages/Wrong';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import { fetchDataTables } from './redux/tablesRedux';
import { fetchDataStatuses } from './redux/statusesRedux';
import { useDispatch } from 'react-redux';
import styles from './styles/temporary.module.scss';  

function App() {

  const dispatch1 = useDispatch();
  const dispatch2 = useDispatch();

  useEffect(() => {
    dispatch1(fetchDataTables());
  }, [dispatch1])

  useEffect(() => {
    dispatch2(fetchDataStatuses());
  }, [dispatch2])

  return (
    <Container className="min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<Table />} />
        <Route path="*" element={<Wrong />} />
      </Routes>
      <Footer className="mt-auto"/>
    </Container>
  );
}

export default App;
