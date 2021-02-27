import React from "react";
import css from '../h5.module.css';

function Error404() {
    return (
        <div className={css.errorBlock}>
            <div className={css.notFoundCode}>404</div>
            <div>Page not found!</div>
        </div>
    );
}

export default Error404;
