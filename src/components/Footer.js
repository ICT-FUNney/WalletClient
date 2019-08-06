import React from 'react';
import { Link } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import RequestIcon from '@material-ui/icons/GetApp';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  bottom_nav: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    gridRow: '3',
    paddingBottom: 'env(safe-area-inset-bottom)',
  },
});

// TODO: 位置の調整
function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.bottom_nav}
    >
      <BottomNavigationAction component={Link}  to="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/send" label="Send" icon={<SendIcon />} />
      <BottomNavigationAction component={Link} to="/request" label="Request" icon={<RequestIcon />} />
      <BottomNavigationAction component={Link} to="/settings" label="Settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  )
}

export default Footer
