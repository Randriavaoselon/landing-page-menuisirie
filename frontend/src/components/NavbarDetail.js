import React, { useEffect, useState } from "react";

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

import { Link } from 'react-router-dom';

const NavbarDetail = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Accueil",
            icon: <HomeIcon />,
        },

    ];

    return (
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
    )
}

export default NavbarDetail
