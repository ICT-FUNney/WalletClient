import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { setPath } from "../actions/Path";
import { sendRequest } from "../actions/Send";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  SendPage: {
    display: "flex",
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
  },
  TextFieldForNumber: {
    width: "100%",
    marginTop: "5vh",
    marginBottom: "8vh"
  },
  button: {
    width: "40%",
    backgroundColor: '#FF8C00',
    color: '#ffffff',
  }
}));

const AlertDialog = (props) => {
  if(props.flag){
    return (
      <div>
        <Dialog
          open={true}
          onClose={()=>{props.closeDialog()}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"確認"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {`${props.number}さんに${props.money}FUNneyを送信しますか`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{props.closeDialog()}} color="primary">
              CANCEL
            </Button>
            <Button
              onClick={() => {
                props.send()
                props.closeDialog()
              }}
            color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  else{
    return "";
  }
}

function Send() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useSelector(state => state.signInReducer);
  useEffect(() => {
    dispatch(setPath('Send'))
  });

  function send(){
    dispatch(sendRequest({balance: value.money, id, send_id: value.number}))
  }

  const [value, setValue] = React.useState({
    money: "",
    number: "",
    dialog_flag: false,
  });

  return (
    <div className={classes.SendPage}>
      <div className={classes.SendBox}>
        <TextField
          id="standard-dense"
          label="送金金額"
          className={classes.TextFieldForMoney}
          margin="dense"
          onChange={e => {
            setValue({
              ...value,
              money: e.target.value,
            })
          }}
        />
        <TextField
          id="standard-dense"
          label="送り先 学籍番号"
          className={classes.TextFieldForNumber}
          margin="dense"
          onChange={e => {
            setValue({
              ...value,
              number: e.target.value,
            })
          }}
        />
        <Button
          variant="contained"
          className={classes.button}
          onClick={()=>{
            setValue({
              ...value,
              dialog_flag: true,
            })
          }}>
          Send
        </Button>
        <AlertDialog
          flag={value.dialog_flag}
          send={send}
          number={value.number}
          money={value.money}
          closeDialog={()=>
            setValue({
              ...value,
              dialog_flag: false,
            })
           }/>
      </div>
    </div>
  )
}

export default Send
