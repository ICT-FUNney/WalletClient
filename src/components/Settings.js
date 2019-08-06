import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { setPath } from "../actions/Path";
import { signOut } from "../actions/User";

import { makeStyles, Typography, ListSubheader, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import {AccountCircle, Bluetooth, Sync, MoreHoriz, ExitToApp} from '@material-ui/icons'

const useStyles = makeStyles({
  SettingsPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gridRow: '2'
  },
  SettingsBox: {
    width: "80vw",
    maxWidth: 800
  },
  logout: {
    marginTop: "10vh"
  }
});

// ログアウト機能
function Settings() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath('Settings'))
  });
  const classes = useStyles();

  function signOutRequest() {
    dispatch(signOut())
  }

  return (
    <div className={classes.SettingsPage}>
      <List
        component="nav"
        className={classes.SettingsBox}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
           <Typography variant="h7" color="primary">
             Account
           </Typography>
          </ListSubheader>
        }
       >
        <ListItem button>
          <ListItemIcon>
            <AccountCircle color="primary"/>
          </ListItemIcon>
          <ListItemText primary="個人情報" />
        </ListItem>
        <Divider />

        <ListItem button>
          <ListItemIcon>
            <Bluetooth color="primary"/>
          </ListItemIcon>
         <ListItemText primary="なんか入れる" />
        </ListItem>
        <Divider />

        <ListItem button>
          <ListItemIcon>
            <Sync color="primary"/>
          </ListItemIcon>
         <ListItemText primary="なんか入れる" />
        </ListItem>
        <Divider />

        <ListItem button>
          <ListItemIcon>
            <MoreHoriz color="primary"/>
          </ListItemIcon>
          <ListItemText primary="More" />
        </ListItem>
        <Divider />
        <ListItem className={classes.logout} button>
          <ListItemIcon>
            <ExitToApp color="primary"/>
          </ListItemIcon>
          <ListItemText
            primary="Sign Out"
            onClick={signOutRequest}/>
        </ListItem>
      </List>
    </div>
  )
}

export default Settings
