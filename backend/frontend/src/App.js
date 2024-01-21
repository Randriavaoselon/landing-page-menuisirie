import {useParams, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import DetailProduits from './pages/DetailProduits';
import Search from './components/Search';
import AboutPages from './pages/AboutPages';

function App() {

  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search_produit" element={<Search />} />
          <Route path="/liste_produit/:id_prod" element={<DetailProduits />} />
          <Route path="/about-plus" element={<AboutPages />} />
      </Routes>
    </Router>
  );
}

export default App;
