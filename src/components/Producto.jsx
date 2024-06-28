import React, { useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import {DetailsProducto} from "../components/DetailsProducto";
import image1 from '../assets/image-product-1.jpg';
import image2 from '../assets/image-product-2.jpg';
import image3 from '../assets/image-product-3.jpg';
import image4 from '../assets/image-product-4.jpg';

const images = [image1, image2, image3, image4];

export const Producto = () => {
  const [imagenPrincipal, setImagenPrincipal] = useState(images[0]);

  const cambiarImagenPrincipal = (image) => {
    setImagenPrincipal(image);
  };

  return (
    <Grid container spacing={2} sx={{ marginTop: 15 }}>
      {/* Producto Grid Item */}
      <Grid item xs={7}>
        <Box p={2} width={600} ml={20}>
          <Paper elevation={3} style={{ borderRadius: '16px', overflow: 'hidden' }}>
            <img src={imagenPrincipal} alt="Main Product" style={{ width: '100%' }} />
          </Paper>
          <Grid container spacing={2} mt={2}>
            {images.map((image, index) => (
              <Grid item xs={3} key={index}>
                <Paper
                  elevation={3}
                  style={{ borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => cambiarImagenPrincipal(image)}
                >
                  <img src={image} alt={`Product ${index + 1}`} style={{ width: '100%' }} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>

      {/* DetailsProducto Grid Item */}
      <Grid item xs={4}>
        <Box p={5} mt={20}>
          <DetailsProducto />
        </Box>
      </Grid>
    </Grid>
  );
};




