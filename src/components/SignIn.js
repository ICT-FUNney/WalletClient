import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signInRequest, snackbarClose } from "../actions/SignIn";
import { TextField, Button, Snackbar } from '@material-ui/core';

// TODO:SignUpページの追加，一定期間はログイン無しで行けるようにクッキーを使ってログイン情報を保存
function SignIn() {
  const dispatch = useDispatch();
  const { snackbar } = useSelector(state => state.signInReducer);
  const [data, setData] = React.useState({
    id: '',
    password: '',
  });

  const handleChange = key => event => {
    setData({ ...data, [key]: event.target.value });
  };

  function signIn() {
    dispatch(signInRequest(data))
  }

  function snackClose() {
    dispatch(snackbarClose())
  }

  return (
    <div>
      <div>
        <TextField
          label="User ID"
          value={data.id}
          onChange={handleChange('id')}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label="Password"
          type="password"
          value={data.password}
          onChange={handleChange('password')}
          margin="normal"
        />
      </div>
      <div>
        <Button variant="contained" onClick={signIn}>
          Sign in
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
        key={`bottom,center`}
        open={snackbar}
        onClose={snackClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">サインインに失敗しました</span>}
      />
    </div>
  );
}

export default SignIn;
