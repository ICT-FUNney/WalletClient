import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signUpRequest, snackbarClose} from "../actions/SignIn";
import {TextField, Button, makeStyles, SnackbarContent, Snackbar} from '@material-ui/core';
import {Link} from 'react-router-dom'
import Logo from '../image/FUNneyLogo.png'
import ErrorIcon from '@material-ui/icons/Error';

function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { snackbar } = useSelector(state => state.signInReducer);
  const [data, setData] = React.useState({
    id: '',
    password: '',
    password2: '',
  });

  useEffect(() => {
    if(snackbar) {
      document.getElementById('inputFields').focus()
    }
  },[snackbar]);

  const handleChange = key => event => {
    setData({...data, [key]: event.target.value});
  };

  function signUp() {
    dispatch(signUpRequest(data));
  }

  function snackClose() {
    dispatch(snackbarClose());
  }

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
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
        <TextField
          id="password2"
          label="Re-enter Password"
          className={classes.textField}
          type="password"
          value={data.password2}
          onChange={handleChange('password2')}
          margin="normal"
        />
        <div className={classes.invalidText}>
          {data.password !== data.password2  && data.password2 ? 'パスワードが異なります' : ''}
        </div>
      </form>
      <div className={classes.buttonContainer}>
        <Button id='signUpButton' className={classes.button} variant="contained" onClick={signUp} disabled={!(data.password && data.password2 && data.password === data.password2)}>
          Sign Up
        </Button>
      </div>
      <div className={classes.signInContainer}>
        <Link to='/login' className={classes.signIn}>既に登録されている方はこちら</Link>
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
                既に登録されているIDです
              </div>
            </span>
          }
        />
      </Snackbar>
    </div>
  );
}

export default SignUp;

const useStyles = makeStyles(theme => ({
  container: {
    width: '60vw',
    height: '100vh',
    margin: '0 auto'
  },
  logoContainer: {
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
  invalidText: {
    height: '1rem',
    color: 'red',
    textAlign: 'center'
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
  signInContainer: {
    width: '100%',
    textAlign: 'center',
    paddingTop: '5vh',
  },
  signIn: {
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

