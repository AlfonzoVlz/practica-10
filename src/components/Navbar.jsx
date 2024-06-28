import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import logo from '../assets/logo.svg';
import avatar from '../assets/image-avatar.png';

export function Navbar() {
  return (
    <AppBar position="absolute" sx={{ backgroundColor: 'white', color: 'black', height: '100px', justifyContent: 'center',  paddingLeft: '80px', paddingRight: '80px' }}>
      <Toolbar>
        {/* Grid container para alinear elementos */}
        <Grid container alignItems="center" spacing={3}>
          {/* Logo */}
          <Grid item>
            <img src={logo} alt="Logo" height="40px" style={{ marginRight: '10px' }} />
          </Grid>
          
          {/* Botones a la izquierda */}
          <Grid item>
            <Button color="inherit" sx={{ fontSize: '18px' }} >Collections</Button>
          </Grid>
          <Grid item>
            <Button color="inherit" sx={{ fontSize: '18px' }} >Men</Button>
          </Grid> 
          <Grid item>
            <Button color="inherit" sx={{ fontSize: '18px' }} >Women</Button>
          </Grid>
          <Grid item>
            <Button color="inherit" sx={{ fontSize: '18px' }} >About</Button>
          </Grid>
          <Grid item>
            <Button color="inherit" sx={{ fontSize: '18px' }} >Contact</Button>
          </Grid>

          {/* Espacio en blanco para separar elementos */}
          <Grid item xs />

          {/* Icono de carrito de compra */}
          <Grid item>
            <IconButton size="large" edge="end" color="inherit" aria-label="carrito de compra">
              <Badge /* badgeContent={1} color="error" */>
                <ShoppingCartIcon sx={{width: 40, height: 40 }} />
              </Badge>
            </IconButton>
          </Grid>

          {/* Avatar del usuario */}
          <Grid item>
            <IconButton
              size="large"
              edge="end"
              aria-label="cuenta del usuario"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar
                alt="Usuario"
                src={avatar}
                sx={{ width: 50, height: 50 }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
