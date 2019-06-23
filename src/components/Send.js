import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { setPath } from "../actions/Path";

// TODO:送金フォームと確認ダイアログ
function Send() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath('Send'))
  });

  return (
    <div>送金用のページ</div>
  )
}

export default Send
