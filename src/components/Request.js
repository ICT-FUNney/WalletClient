import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { setPath } from "../actions/Path";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  SendPage: {
    display: "flex",
    overflow: 'hidden',
    position: 'relative',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gridRow: '2',
  },
  SendBox: {
    width: "80vw",
    maxWidth: 800,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  TextFieldForMoney: {
    width: "100%",
    marginTop: "5vh",
    marginBottom: "8vh",
    '& label.Mui-focused': {
      color: '#FF8C00',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FF8C00',
    },
  },
  button: {
    width: '40%',
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
  buttonWrapper: {
    marginTop: '7vh'
  },
  qr: {
    marginTop: '10vh',
    width: '60vw',
    height: '60vw'
  },
  backDropWrapper: {
    position: 'absolute',
    zIndex: '1000',
    backgroundColor: 'white',
    width: '100%',
    height: '90%',
    top: '10%',
    borderRadius: '10px',
    boxShadow: '0px -3px 5px rgba(0,0,0,0.4)',
    transition: 'top 0.6s'
  },
  backDropWrapperDummy: {
    position: 'absolute',
    zIndex: '1000',
    backgroundColor: 'white',
    width: '100%',
    height: '90%',
    top: '105%',
    borderRadius: '10px',
    boxShadow: '0px -3px 5px rgba(0,0,0,0.4)',
    transition: 'top 0.6s'
  },
  text: {
    paddingLeft: '2vw'
  },
  qrWrapper: {
    textAlign: 'center',
  }
});

function Request() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useSelector(state => state.userReducer);
  useEffect(() => {
    dispatch(setPath('Request'))
    // eslint-disable-next-line
  },[]); // 現在進行系で議論されている

  const [value, setValue] = React.useState({
    money: '',
    isBackDrop: false,
  });

  const [qr, setQr] = React.useState({
    qr: '',
  });


  function requestQR(){
    const url = encodeURIComponent(`${window.location.protocol}//${window.location.host}/send?redirect=send&id=${id}&value=${value.money}`);
    setQr({
      qr: `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=300x300&charset-source=UTF-8`,
    })
  }

  function closeBackDrop() {
    setValue({
      ...value,
      isBackDrop: false,
    });

    setTimeout(() => {
      setQr({
        ...value,
        qr: '',
      });
    }, 1000)

  }

  return (
    <div className={classes.SendPage}>
      <div className={classes.SendBox}>
        <TextField
          id="standard-dense"
          type='number'
          label="請求金額"
          className={classes.TextFieldForMoney}
          margin="dense"
          onChange={e => {
            setValue({
              ...value,
              money: e.target.value,
            })
          }}
        />
        <Button
          disabled={!value.money || parseInt(value.money) === 0}
          variant="contained"
          className={classes.button}
          onClick={()=>{
            setValue({
              ...value,
              isBackDrop: true,
            });
            requestQR();
          }}>
          Request
        </Button>
        <div className={ value.isBackDrop ? classes.backDropWrapper : classes.backDropWrapperDummy}>
          <div className={classes.text}>
            <p>QRコード</p>
          </div>
          <hr/>
          <div className={classes.qrWrapper}>
            <img src={qr.qr} alt='qrコード' className={classes.qr}/>
            <div className={classes.buttonWrapper}>
              <Button className={classes.button} onClick={closeBackDrop}>CLOSE</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request
