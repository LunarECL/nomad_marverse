import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

const CharacterItem = ({ character }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Link to={`/character/${character.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  </Grid>
);

CharacterItem.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CharacterItem;
