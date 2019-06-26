import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signInRequest, snackbarClose } from "../actions/SignIn";
import { TextField, Button, Snackbar, SnackbarContent, makeStyles } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import { Link } from 'react-router-dom'
import Logo from '../image/FUNneyLogo.png'

function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { snackbar } = useSelector(state => state.signInReducer);
  const [data, setData] = React.useState({
    id: '',
    password: '',
  });

  useEffect(() => {
    if(snackbar) {
      document.getElementById('inputFields').focus()
    }
  },[snackbar]);

  const handleChange = key => event => {
    setData({ ...data, [key]: event.target.value });
  };

  function signIn() {
    dispatch(signInRequest(data));
  }

  function snackClose() {
    dispatch(snackbarClose());
  }

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer} >
        <img className={classes.logo} src={Logo} alt='funney logo'/>
      </div>
      <div className={classes.title}>
        FUNney
      </div>
      <form id='inputFields' tabIndex='-1' className={classes.inputFields} noValidate autoComplete="off">
        <TextField
          id="id"
          label="User ID"
          className={classes.textField}
          value={data.id}
          onChange={handleChange('id')}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          value={data.password}
          onChange={handleChange('password')}
          margin="normal"
        />
      </form>
      <div className={classes.buttonContainer}>
        <Button id='signInButton' className={classes.button} variant="contained" onClick={signIn}>
          Sign in
        </Button>
      </div>
      <div className={classes.signUpContainer}>
        <Link to='/signup' className={classes.signUp}>初めての方はこちら</Link>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
        autoHideDuration={4000}
        key={`bottom,center`}
        open={snackbar}
        onClose={snackClose}
      >
        <SnackbarContent
          className={classes.snackbar}
          aria-live="assertive"
          aria-describedby="client-snackbar"
          message={
            <span id="message-id" className={classes.snackbarContent}>
              <ErrorIcon />
              <div className={classes.message}>
                サインインに失敗しました
              </div>
            </span>
          }
        />
      </Snackbar>
    </div>
  );
}

export default SignIn;


const useStyles = makeStyles(theme => ({
  container: {
    width: '60vw',
    height: '100vh',
    margin: '0 auto'
  },
  logoContainer:{
    width: '80%',
    paddingTop: '15vh',
    margin: '0 auto',
  },
  logo: {
    width: '100%',
  },
  title: {
    textAlign: 'center',
  },
  inputFields: {
    width: '100%',
    outline: 'none'
  },
  textField: {
    width: '100%',
    '& label.Mui-focused': {
      color: '#FF8C00',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FF8C00',
    },
  },
  buttonContainer: {
    width: '70%',
    margin: '0 auto',
    marginTop: '7vh'
  },
  button: {
    width: '100%',
    textTransform: 'none',
    color: 'white',
    backgroundColor: '#FF8C00',
    borderColor: '#FF8C00',
    '&:hover': {
      backgroundColor: '#FF8C00',
      borderColor: '#FF8C00',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#c55d00',
      borderColor: '#c55d00',
    }
  },
  signUpContainer: {
    width: '100%',
    textAlign: 'center',
    paddingTop: '5vh',
  },
  signUp: {
    textDecoration: 'none',
    color: '#FF8C00'
  },
  snackbar: {
    backgroundColor: theme.palette.error.dark,
    marginBottom: '1em'
  },
  snackbarContent: {
    display: 'flex',
    alignItems: 'center',
  },
  message: {
    paddingLeft: '1em'
  }
}));

