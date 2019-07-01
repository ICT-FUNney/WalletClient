import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from '../helpers/history'

import Header from './Header'
import Footer from './Footer'
import SignIn from './SignIn'
import Home from './Home'
import Send from './Send'
import Settings from './Settings'
import Error from './404'
import { useSelector } from "react-redux";

const theme = createMuiTheme({
  palette: {
    primary: {500: '#FF8C00'},
  },
});

function App() {
  const { id } = useSelector(state => state.signInReducer);
  return (
    <Router history={history}>
      { !id && <Redirect to="/login"/>}
      <MuiThemeProvider theme={theme}>
        {/* Headerを表示させるかどうか */}
        <Switch>
          <Route exact path='/login'/>
          <Route path='/' component={Header} />
        </Switch>

        {/* 中央にを何を表示させるか */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={SignIn}/>
          <Route exact path='/send' component={Send}/>
          <Route exact path='/settings' component={Settings}/>
          <Route path='/' component={Error}/>
        </Switch>

        {/* Footerを表示させるかどうか */}
        <Switch>
          <Route exact path='/login'/>
          <Route path='/' component={Footer} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
