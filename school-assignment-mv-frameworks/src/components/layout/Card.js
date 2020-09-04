import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MovieSearch from '../movieSearch/MovieSearch';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MediaCard = (props) => {
  const classes = useStyles();
    
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* Lizard */}
            {props.title}
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica */}
            {/* <MovieSearch title={props.title}/> */}
            <MovieSearch title={props.title}/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
        <Button size="small" color="primary">
          Close
        </Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard;