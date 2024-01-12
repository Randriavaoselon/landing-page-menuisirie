import {useParams, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import ListeProduit from './pages/ListeProduit';
import DetailProduits from './pages/DetailProduits';

function App() {

  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/liste_produit" element={<ListeProduit />} />
          <Route path="/liste_produit/:id_prod" element={<DetailProduits />} />
      </Routes>
    </Router>
  );
}

export default App;
