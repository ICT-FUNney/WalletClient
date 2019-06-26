import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import React from "react";

const useStyles = makeStyles({
  title: {
    color: 'white',
  },
  app_bar: {
    position: 'fixed',
  },
});

function Header() {
  const classes = useStyles();
  const { path } = useSelector(state => state.pathReducer);
  return (
    <AppBar position="static" className={classes.app_bar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {path}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
