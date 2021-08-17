import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '200%',
      maxWidth: 1000,
      flex: 1, 
      textAlign: 'center',
    },
  });

function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3" gutterBottom>
                Home Page
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Welcome to the Flatiroon Comics Publishers App, phase 3 final project.
            </Typography>
        </div>
    )
}

export default HomePage;