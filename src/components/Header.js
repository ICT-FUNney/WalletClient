import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import React from "react";

const useStyles = makeStyles({
  title: {
    color: 'white',
  },
});

function Header() {
  const classes = useStyles();
  const { path } = useSelector(state => state.pathReducer);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {path}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
