import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const Section = ({ title, items }) => (
  <div>
    <Typography variant="h6" gutterBottom>
      {title}:
    </Typography>
    {items.map((item, index) => (
      <Card key={index} sx={{ mb: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              item.thumbnail && item.thumbnail.path && item.thumbnail.extension
                ? `${item.thumbnail.path}.${item.thumbnail.extension}`
                : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
            }
            alt={item.title || item.name}
          />
          <CardContent>
            <Link href={item.resourceURI}>
              <Typography variant="subtitle1">
                {item.title || item.name}
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }),
      title: PropTypes.string,
      name: PropTypes.string,
      resourceURI: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

export default Section;
