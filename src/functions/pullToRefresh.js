import { useState, useEffect } from 'react';

const usePullToRefresh = (callback) => {
  const [isFetching, setIsFetching] = useState(false)
  let _startY;
  let _endY;

  useEffect(() => {
    document.getElementById("main").addEventListener('touchstart', e => {
      // eslint-disable-next-line
      _startY = e.touches[0].pageY;
    }, true);
    document.getElementById("main").addEventListener('touchmove', e => {
      if(document.getElementById("root").scrollTop === 0){
      transform(e)}
    }, false);
    document.getElementById("main").addEventListener('touchend', e => { handleScroll(e) }, true);
    //　removeEventListenerできてるかわからん
    return () =>  {
      document.getElementById("main").removeEventListener('touchstart', e => { handleScroll(e) }, true);
      document.getElementById("main").removeEventListener('touchmove', e => {
        if(document.getElementById("root").scrollTop === 0){
        transform(e)}
      }, false);
      document.getElementById("main").removeEventListener('touchend', e => { handleScroll(e) }, true)
    }
  });

  useEffect(() => {
    if (!isFetching) return;
    callback();
    // eslint-disable-next-line
  }, [isFetching]);
  let s;
  function transform(e) {
    _endY = e.touches[0].pageY;
    s = (_endY - _startY)/5;
    console.log("(_endY - _startY)/5:"+(_endY - _startY)/5)
    document.getElementById("main").style.transform = `translate3d(0px, ${s}px, 0px)`;
  }

  function handleScroll(e) {
    var top = 42 * 5;
    document.getElementById("main").style.transform=""
    if (!isFetching) {
      console.log("_startY"+_startY)
      console.log("_endY"+_endY)
      console.log("_endY - _startY:" + (_endY - _startY));
        if (document.getElementById("root").scrollTop === 0 && _endY > _startY && _endY - _startY > top) {
          setIsFetching(true);
        } else { return }
    } else { return }
  }
  return [isFetching, setIsFetching];
};

export default usePullToRefresh;