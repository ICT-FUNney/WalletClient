import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { setPath } from "../actions/Path";

// TODO: 資産等の表示
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath('Home'))
  });

  return (
    <div>資産とか送信履歴とか表示させるとこ</div>
  )
}

export default Home
