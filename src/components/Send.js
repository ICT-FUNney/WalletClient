import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { setPath } from "../actions/Path";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  SendPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
  }
}));

// TODO:送金フォームと確認ダイアログ
function Send() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath('Send'))
  });

  const [value, setValue] = React.useState({
    money: "",
    number: "",
  });
  console.log(value)
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
          onClick={() => {

          }}>
          Send
        </Button>
      </div>
    </div>
  )
}

export default Send
