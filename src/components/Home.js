import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { getAllFunneyRequest } from "../actions/Funney";
import { setPath } from "../actions/Path";

const useStyles = makeStyles({
  o_Home: {
    color: '#000000',
    margin: '2vh 10vw',
    gridRow: '2',
  },
  o_funney: {
    display: 'grid',
    gridTemplateColumns: '1fr auto auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize :'62.5%',
    borderBottom: '#FF8C00',
    borderBottomWidth: '3px',
    borderBottomStyle: 'solid',
  },
  o_funnney_title: {
    justifSelf: 'center',
    alignSelf: 'end',
    width: '100px',
    fontSize:'1.5rem',
  },
  o_funnney_total: {
    justifySelf: 'end',
    fontSize: '1.5rem'
  },
  o_funnney_unit: {
    fontSize: '1.5rem'
  }
});

function Home() {
  const classes = useStyles();
  const { id } = useSelector(state => state.signInReducer);
  const { funney } = useSelector(state => state.funneyReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath('Home'))
  });

  // HomePageでリロードとかするかなって思って作ったけど、今回は実装してない
  function getAllFunney() {
    dispatch(getAllFunneyRequest(id));
  }

  return (
    <div className={classes.o_Home}>
      <div className={classes.o_funney}>
        <div className={classes.o_funnney_title}>総資産</div>
        <div className={classes.o_funnney_total}>{funney}</div>
        <div className={classes.o_funnney_unit}>FNY</div>
      </div>
    </div>
  )
}

export default Home
