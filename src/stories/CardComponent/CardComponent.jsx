import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = ({ withImage }) => {
  return (
    <Card>
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
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
