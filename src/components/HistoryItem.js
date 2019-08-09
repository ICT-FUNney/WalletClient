import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    o_history_list: {
        margin: " 5px 5px",
        listStyle: "none",
        display: "grid",
        gridTemplateColumns: "60px 25px 1fr 80px",
    },
    o_date: {
        width: "50px",
        marginRight: "5px",
    },
    o_io: {
        width: "25px",
        textAlign: "center",
        background: "orange",
        color: "white",
    },
    o_user: {
        margin: "0px 10px",
    },
    o_amount: {
        justifySelf: "right",
    },
    o_funnney: {

    },
});

function HistoryItem(props) {
    const classes = useStyles();
    const msec = Date.parse(props.history.timestamp);
    const date = new Date(msec);
    const month = date.getMonth();
    const day = date.getDate();
    const funney = Number(props.history.amount);
    // const [day, setDay] = React.useState();
    return (
        <li className={classes.o_history_list}>
            <div className={classes.o_date}>{month > 9 ? month : "0" + month.toString()}/{day > 9 ? day : "0" + day.toString()}</div>
            <div className={classes.o_io}>出</div>
            <div className={classes.o_user}>UserName</div>
            <div className={classes.o_amount}>{funney}FNY</div>
        </li>
    )
}

export default HistoryItem
