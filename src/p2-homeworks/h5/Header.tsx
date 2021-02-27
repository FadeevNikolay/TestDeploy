import css from './h5.module.css';
import React from "react";
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <div className={css.header}>
            <div className={css.headerContent}>
                <NavLink to={'/pre-junior'} activeClassName={css.selectedLink}>PRE_JUNIOR</NavLink>
                <NavLink to={'/junior'} activeClassName={css.selectedLink}>JUNIOR</NavLink>
                <NavLink to={'/junior-plus'} activeClassName={css.selectedLink}>JUNIOR+</NavLink>
            </div>
            <div className={css.navigationText}>Navigation</div>
        </div>
    );
}

export default Header;
