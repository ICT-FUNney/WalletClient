import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { setPath } from "../actions/Path";

// ログアウト機能
function Settings() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath('Settings'))
  });

  return (
    <div>今回のフェーズではログアウト機能だけ</div>
  )
}

export default Settings
