import React from 'react';
import { Link } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import SettingsIcon from '@material-ui/icons/Settings';

// TODO: 位置の調整
function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction component={Link}  to="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/send" label="Send" icon={<SendIcon />} />
      <BottomNavigationAction component={Link} to="/settings" label="Settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  )
}

export default Footer
