import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { setPath } from "../actions/Path";
import HistoryList from "./HistoryList";
import { getAllFunneyRequest } from "../actions/Funney";
import usePullToRefresh from '../functions/pullToRefresh';

const useStyles = makeStyles({
  o_Home: {
    position:  'relative',
    color: '#000000',
    padding: '1rem 10vw',
    gridRow: '2',
    overflow: 'visible',
  },
  o_funney: {
    display: 'grid',
    gridTemplateColumns: '1fr auto auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '62.5%',
    borderBottom: '#FF8C00',
    borderBottomWidth: '3px',
    borderBottomStyle: 'solid',
  },
  o_funnney_title: {
    justifSelf: 'center',
    alignSelf: 'end',
    width: '100px',
    fontSize: '1.5rem',
  },
  o_funnney_total: {
    justifySelf: 'end',
    fontSize: '1.5rem'
  },
  o_funnney_unit: {
    fontSize: '1.5rem'
  },
  o_main_contents:{
    overflowY: 'scroll',
    height: '100%',
  }
});

function Home() {
  const classes = useStyles();
  const { id } = useSelector(state => state.userReducer);
  const [isFetching, setIsFetching] = usePullToRefresh(fetchFunneyItems);
  const { funney } = useSelector(state => state.funneyReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath('Home'))
  });

  function fetchFunneyItems() {
    setTimeout(() => {
      dispatch(getAllFunneyRequest(id));
      setIsFetching(false);
    }, 1000);
  }
  // HomePageでリロードとかするかなって思って作ったけど、今回は実装してない
  // function getAllFunney() {
  //   dispatch(getAllFunneyRequest(id));
  // }

  return (
    <div id="main" className={classes.o_Home} >
      {isFetching ? <div className="sk-fading-circle">
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
      </div> : <div id="loading__circle" className="loading__circle">
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M12 0c3.31 0 6.291 1.353 8.459 3.522l2.48-2.48 1.061 7.341-7.437-.966 2.489-2.489c-1.808-1.807-4.299-2.928-7.052-2.928-5.514 0-10 4.486-10 10s4.486 10 10 10c3.872 0 7.229-2.216 8.89-5.443l1.717 1.046c-2.012 3.803-6.005 6.397-10.607 6.397-6.627 0-12-5.373-12-12s5.373-12 12-12z"/></svg>
      </div>}
      <div className={classes.o_main_contents}>
      <div className={classes.o_funney}>
        <div className={classes.o_funnney_title}>総資産</div>
        <div className={classes.o_funnney_total}>{funney}</div>
        <div className={classes.o_funnney_unit}>FNY</div>
      </div>
      <HistoryList />
      </div>
    </div>
  )
}

export default Home
