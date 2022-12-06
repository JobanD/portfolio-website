import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

export default function ProjectCard(props) {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          zIndex: 1,
          position: "relative",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={props.imageSource}
            alt={props.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
