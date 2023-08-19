import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Home from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactsIcon from '@mui/icons-material/Contacts';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

export default function BottomTab() {
  const [value, setValue] = React.useState(0);

  return (
    <Box position="fixed" color="primary" style={{top: "auto", bottom: 16,width:"100%"}}>
      <BottomNavigation
        showLabels
        style={{backgroundColor:"#e9dfe3"}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction component={Link} label="Home" icon={<Home />} to="/"/>
        <BottomNavigationAction component={Link} label="Products" icon={<ShoppingBasketIcon/>} to="/products"/>
        <BottomNavigationAction component={Link} label="Offers" icon={<FavoriteIcon />}  to="/offers" />
        <BottomNavigationAction component={Link} label="Contacts" icon={<ContactsIcon />}  to="/contacts"/>
      </BottomNavigation>
    </Box>
  );
}
