import React from 'react'
//import { Link } from 'react-router-dom'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import "./NavBar.css"

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

function NavBar() {
    const classes = useStyles();

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="textPrimary" href="/" className={classes.link} >
                <HomeIcon className={classes.icon} />
                Home</Link>
            <Link color="textPrimary" href="/publishers" className={classes.link} >
                <WhatshotIcon className={classes.icon} />
                Publishers</Link>
        </Breadcrumbs>
    )
}

export default NavBar;