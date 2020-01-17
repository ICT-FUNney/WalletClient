import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { setPath } from "../actions/Path";
import HistoryItem from './HistoryItem';

const useStyles = makeStyles({
    o_Home: {
        color: '#000000',
        margin: '2vh 2vw',
        gridRow: '2',
    },
    o_list: {
        padding: "0",
    }
});

function HistoryList() {
    const classes = useStyles();
    // const { id } = useSelector(state => state.signInReducer);
    const { history } = useSelector(state => state.funneyHistoryReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPath('Home'))
    });

    return (
        <div className={classes.o_Home}>
            <ul className={classes.o_list}>
                {history.map((item, index) => {
                    return (<HistoryItem key={index} history={item} />);
                })}
            </ul>
        </div>
    )
}

export default HistoryList
