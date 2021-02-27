import React from "react";
import {BrowserRouter, HashRouter} from 'react-router-dom';
import css from './h5.module.css';
import Header from "./Header";
import Routes from "./Routes";

function HW5() {
    return (
        <div className={css.h5Block}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Routes/>

                </HashRouter>
        </div>
    );
}

export default HW5;
