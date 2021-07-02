import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { MemoryRouter } from 'react-router';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    margin: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (

    <div className="header">
      <AppBar position="static" >
        <Toolbar className="headerToolbar">
        
          <Typography variant="h6">
            <img src="src/images/favicon" />
          </Typography>
          
          <Typography variant="h6">
            <Button
              color="inherit"
              component={Link}
              to="/"
            >
              Home
              </Button>
            <Button
              color="inherit"
              component={Link}
              to={"/projects"}
            >
              Projects
              </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
            >
              About
              </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;