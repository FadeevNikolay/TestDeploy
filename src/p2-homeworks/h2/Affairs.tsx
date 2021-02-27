import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    filter: FilterType
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { props.setFilter('all'); } // need to fix
    const setHigh = () => { props.setFilter('high'); }
    const setMiddle = () => { props.setFilter('middle'); }
    const setLow = () => { props.setFilter('low'); }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={style.btn + (props.filter === 'all' ? ` ${style.selected}` : '')}>All</button>
            <button onClick={setHigh} className={style.btn + (props.filter === 'high' ? ` ${style.selected}` : '')}>High</button>
            <button onClick={setMiddle} className={style.btn + (props.filter === 'middle' ? ` ${style.selected}` : '')}>Middle</button>
            <button onClick={setLow} className={style.btn + (props.filter === 'low' ? ` ${style.selected}` : '')}>Low</button>
        </div>
    )
}

export default Affairs