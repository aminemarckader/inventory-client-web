import React from 'react';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import img_404 from './404.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        maxHeight: "100vh",
      },
      card: {
        maxWidth: "60%",
        maxHeight: "120vh",
      }
  }));

export default function Page404() {
    const classes = useStyles();

    return (
      

        <div >
            <Grid 
            container
            direction="column"
           
            alignItems="center"
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}
            >
                <Box p={2} >
                    <Grid item align="center">
                        <img className={classes.card} src={img_404} alt="404 page" />
                    </Grid>
                </Box>
                <Box p={2}>
                    <Grid item align="center">
                        <Button component={Link} to="/" variant="contained" color="primary" >
                            Go Home
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        </div>
    )
}
