import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../Assets/logo1.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";

import axios from 'axios';

const Search = () => {

  const [recherche, setRecherche] = useState('');
  const [resultats, setResultats] = useState([]);

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Accueil",
      icon: <HomeIcon />,
    },

  ];

  const effectuerRecherche = async () => {
    try {
      const response = await axios.get(`api/produit-list/?q=${recherche}`);
      setResultats(response.data);
    } catch (error) {
      console.error('Erreur lors de la recherche d\'articles :', error);
    }
  };

  useEffect(() => {
    effectuerRecherche();
  }, [recherche]);

  return (
    <div className="back-color">
      <nav>
        <div className="nav-logo-container">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar-links-containers">
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <Link to="/" className="color-style">
            Accueil
          </Link>
          <input
            type="search"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="primary-button"
            placeholder="Recherches"
          />
        </div>

        <div className="navbar-menu-containers">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <Link to="/" className="accuiel-phone">
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Link>
            <Divider />
          </Box>
        </Drawer>
      </nav>
      {/* <input
                type="text"
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                placeholder="Rechercher des articles"
            /> */}

      <div className='body-page-Liste-produit'>
        <div className="image-container">
          {resultats.map((resultat, index) => (
            <Link to={`/liste_produit/${resultat.id}`} className="link-textImage">
              <div key={index.id} className="image-background">
                <img src={resultat.image} alt="" />
                <p>{resultat.titre_prod} en {resultat.prix_prod} €</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search