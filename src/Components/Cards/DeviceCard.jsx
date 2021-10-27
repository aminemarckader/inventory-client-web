import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ComputerIcon from "@material-ui/icons/Computer";
import MuiLink from '@material-ui/core/Link';

import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 100
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
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
    <>
    <Grid item component="Card" xs={12} sm={6} lg={3}>
      <Card className={classes.root}>
        <CardMedia className={classes.cover}>
          <ComputerIcon className={classes.playIcon} />
        </CardMedia>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              <MuiLink underline="none">
                <Link to="/hardware/details/vvv">
                  MSEKIT-001
                </Link>
              </MuiLink>
             
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Information Technologies
            </Typography>
          </CardContent>
        </div>
       
      </Card>
    </Grid>

    <Grid item component="Card" style={{ height: '-webkit-fill-available' }} xs={12} sm={6} lg={3}>
      <Card className={classes.root}>
        <CardMedia className={classes.cover}>
          <ComputerIcon className={classes.playIcon} />
        </CardMedia>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              <Link to="/hardware/details/vvv">
                MSEKIT-001
              </Link>
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Quality Control
            </Typography>
          </CardContent>
        </div>
       
      </Card>
    </Grid>
    </>
  );
}
