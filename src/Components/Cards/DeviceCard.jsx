import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ComputerIcon from "@material-ui/icons/Computer";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 42,
    width: 42,
  },
  detailsIcon: {
    height: 20,
    width: 20,
  },
}));

export default function DeviceCard() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card className={classes.root}>
        <CardMedia className={classes.cover}>
          <ComputerIcon className={classes.playIcon} />
        </CardMedia>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              MSEKIT-001
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Quality Control
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cover}>
          <KeyboardArrowRightIcon className={classes.detailsIcon} />
        </CardMedia>
      </Card>
    </Grid>
  );
}
