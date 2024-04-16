import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '../Button/Button';

const CardProduct = ({ withImage }) => {
  return (
    <Card className="produto-single" sx={{ maxWidth: 300}}>
      {withImage ? (
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/150"
          alt="Placeholder"
        />
      ) : null}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href="#">Card Title</a>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        </Typography>
        <div>
          <Typography variant="body2" color="text.secondary">
          <b>Preço</b>
          <br/>OU x
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
