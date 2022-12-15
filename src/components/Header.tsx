import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position ='static'>
      <Toolbar>
        <Typography variant="h6" component="span"sx={{ flexGrow: 1 }}>
          All world here
        </Typography>
        <Link to="/">HomePage</Link>
        <IconButton color="inherit" >
          <FavoriteIcon />
        </IconButton>
        
      </Toolbar>
    </AppBar>
  );
}

export default Header