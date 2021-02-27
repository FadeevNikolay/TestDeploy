import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => { props.deleteAffairCallback(props.affair._id); }// need to fix
    // let priorityClassName = '';
    // if (props.affair.priority === 'high') priorityClassName = styles.high;
    // if (props.affair.priority === 'middle') priorityClassName = styles.middle;
    // if (props.affair.priority === 'low') priorityClassName = styles.low;
    let priorityClassName = styles[props.affair.priority];

    return (
        <div className={styles.affair}>
            <div>{props.affair.name}</div>
            <div className={priorityClassName}>{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
